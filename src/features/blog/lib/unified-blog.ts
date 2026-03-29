import NotionService from "./notion";
import { getPublishedMdxPosts, getMdxPostBySlug, getAllMdxSlugs } from "./mdx";
import type { BlogPost, PostPage } from "../types/blog.types";

/**
 * Unified blog service that merges posts from both Notion CMS and local MDX files.
 * Notion posts take priority; MDX posts supplement them.
 */
export async function getAllPublishedPosts(): Promise<BlogPost[]> {
  let notionPosts: BlogPost[] = [];
  let mdxPosts: BlogPost[] = [];

  // Fetch from Notion
  try {
    const ns = new NotionService();
    notionPosts = await ns.getPublishedBlogPosts();
  } catch (error) {
    console.error("Error fetching Notion posts:", error);
  }

  // Fetch from local MDX
  try {
    mdxPosts = getPublishedMdxPosts();
  } catch (error) {
    console.error("Error fetching MDX posts:", error);
  }

  // Merge and deduplicate by slug (Notion takes priority)
  const notionSlugs = new Set(notionPosts.map((p) => p.slug));
  const uniqueMdxPosts = mdxPosts.filter((p) => !notionSlugs.has(p.slug));

  const allPosts = [...notionPosts, ...uniqueMdxPosts];

  // Sort by date descending
  return allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<PostPage | null> {
  // Try Notion first
  try {
    const ns = new NotionService();
    const post = await ns.getSingleBlogPost(slug);
    if (post) return post;
  } catch {
    // Notion post not found, try MDX
  }

  // Try local MDX
  try {
    const mdxPost = getMdxPostBySlug(slug);
    if (mdxPost) return mdxPost;
  } catch {
    // MDX post not found either
  }

  return null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const slugs: string[] = [];

  // Notion slugs
  try {
    const ns = new NotionService();
    const posts = await ns.getPublishedBlogPosts();
    slugs.push(...posts.map((p) => p.slug));
  } catch {
    // Notion unavailable
  }

  // MDX slugs
  try {
    const mdxSlugs = getAllMdxSlugs();
    const existingSlugs = new Set(slugs);
    slugs.push(...mdxSlugs.filter((s) => !existingSlugs.has(s)));
  } catch {
    // MDX unavailable
  }

  return slugs;
}

/**
 * Calculate reading time estimate for content
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}
