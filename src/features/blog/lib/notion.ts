import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { BlogPost, PostPage } from "../types/blog.types";
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
      return response.results
        .filter((res): res is PageObjectResponse => "properties" in res)
        .map((res) => NotionService.pageToPostTransformer(res));
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

      const result = response.results[0];
      if (!result || !("properties" in result)) {
        throw new Error("No results available");
      }

      // grab page from notion
      const page = result as PageObjectResponse;

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

  private static pageToPostTransformer(page: PageObjectResponse): BlogPost {
    let coverUrl = "";
    const cover = page.cover;

    if (cover) {
      switch (cover.type) {
        case "file":
          coverUrl = cover.file.url;
          break;
        case "external":
          coverUrl = cover.external.url;
          break;
      }
    }

    const props = page.properties;
    const nameProperty = props.Name;
    const tagsProperty = props.Tags;
    const descProperty = props.Description;
    const dateProperty = props.CreatedAt;
    const slugProperty = props.Slug;

    return {
      id: page.id,
      cover: coverUrl,
      title:
        nameProperty?.type === "title"
          ? (nameProperty.title[0]?.plain_text ?? "")
          : "",
      tags:
        tagsProperty?.type === "multi_select"
          ? tagsProperty.multi_select.map((tag) => ({
              id: tag.id,
              name: tag.name,
              color: tag.color,
            }))
          : [],
      description:
        descProperty?.type === "rich_text"
          ? (descProperty.rich_text[0]?.plain_text ?? "")
          : "",
      date:
        dateProperty?.type === "created_time"
          ? dateProperty.created_time
          : "",
      slug:
        slugProperty?.type === "formula" &&
        slugProperty.formula.type === "string"
          ? (slugProperty.formula.string ?? "")
          : "",
    };
  }
}
