import { Client } from "@notionhq/client";
import { BlogPost, PostPage } from "@/types/notion.schema";
import { NotionToMarkdown } from "notion-to-md";

import options from "@/utils/config";

export default class NotionService {
  client: Client;
  n2m: NotionToMarkdown;

  constructor() {
    this.client = new Client({
      auth: options.NOTION.ACCESS_TOKEN,
    });
    this.n2m = new NotionToMarkdown({
      notionClient: this.client,
    });
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    const database = options.NOTION.BLOG_DATABASE_ID ?? "";

    try {
      const response = await this.client.databases.query({
        database_id: database,
        filter: {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
        sorts: [
          {
            property: "CreatedAt",
            direction: "descending",
          },
        ],
      });
      return response.results.map((res) => {
        return NotionService.pageToPostTransformer(res);
      });
    } catch (error) {
      throw new Error("Error fetching posts: " + error);
    }
  }

  async getSingleBlogPost(slug: string): Promise<PostPage> {
    let post, markdown;

    const database = options.NOTION.BLOG_DATABASE_ID ?? "";
    // list of blog posts
    try {
      const response = await this.client.databases.query({
        database_id: database,
        filter: {
          property: "Slug",
          formula: {
            string: {
              equals: slug,
            },
          },
          // add option for tags in the future
        },
        sorts: [
          {
            property: "CreatedAt",
            direction: "descending",
          },
        ],
      });

      if (!response.results[0]) {
        throw new Error("No results available");
      }

      // grab page from notion
      const page = response.results[0];

      const mdBlocks = await this.n2m.pageToMarkdown(page.id);
      markdown = this.n2m.toMarkdownString(mdBlocks);
      post = NotionService.pageToPostTransformer(page);

      return {
        post,
        markdown,
      };
    } catch (error) {
      throw new Error("Error fetching post: " + error);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static pageToPostTransformer(page: any): BlogPost {
    let cover = page.cover;

    if (cover !== null) {
      switch (cover.type) {
        case "file":
          cover = page.cover.file.url;
          break;
        case "external":
          cover = page.cover.external.url;
          break;
        default:
          // Add default cover image if you want...
          cover = "";
      }
    } else {
      cover = "";
    }

    const content = {
      id: page.id,
      cover: cover,
      title: page.properties.Name.title[0].plain_text,
      tags: page.properties.Tags.multi_select,
      description: page.properties.Description.rich_text[0].plain_text,
      date: page.properties.CreatedAt.created_time,
      slug: page.properties.Slug.formula.string,
    };

    return content;
  }
}
