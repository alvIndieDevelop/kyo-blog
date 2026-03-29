import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, PostPage } from "../types/blog.types";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export interface MdxFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  published: boolean;
  cover?: string;
}

function ensureContentDir(): boolean {
  return fs.existsSync(CONTENT_DIR);
}

function frontmatterToPost(
  frontmatter: MdxFrontmatter,
  filename: string
): BlogPost {
  const slug = frontmatter.slug || filename.replace(/\.mdx?$/, "");
  return {
    id: `mdx-${slug}`,
    slug,
    cover: frontmatter.cover || "",
    title: frontmatter.title,
    tags: (frontmatter.tags || []).map((tag, i) => ({
      id: `mdx-tag-${i}`,
      name: tag,
      color: "default",
    })),
    description: frontmatter.description || "",
    date: frontmatter.date || new Date().toISOString(),
  };
}

export function getPublishedMdxPosts(): BlogPost[] {
  if (!ensureContentDir()) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts: BlogPost[] = [];

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    const source = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(source);
    const frontmatter = data as MdxFrontmatter;

    if (frontmatter.published !== false) {
      posts.push(frontmatterToPost(frontmatter, file));
    }
  }

  // Sort by date descending
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getMdxPostBySlug(slug: string): PostPage | null {
  if (!ensureContentDir()) return null;

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    const source = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(source);
    const frontmatter = data as MdxFrontmatter;
    const postSlug = frontmatter.slug || file.replace(/\.mdx?$/, "");

    if (postSlug === slug && frontmatter.published !== false) {
      return {
        post: frontmatterToPost(frontmatter, file),
        markdown: { parent: content },
      };
    }
  }

  return null;
}

export function getAllMdxSlugs(): string[] {
  if (!ensureContentDir()) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const slugs: string[] = [];

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    const source = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(source);
    const frontmatter = data as MdxFrontmatter;

    if (frontmatter.published !== false) {
      slugs.push(frontmatter.slug || file.replace(/\.mdx?$/, ""));
    }
  }

  return slugs;
}
