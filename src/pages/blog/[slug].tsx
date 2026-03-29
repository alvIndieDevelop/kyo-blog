import {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Share2, MessageCircle } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { NotionService } from "@/features/blog";
import type { BlogPost, Tag } from "@/features/blog";
import {
  getPostBySlug,
  getAllPostSlugs,
  getAllPublishedPosts,
  calculateReadingTime,
} from "@/features/blog/lib/unified-blog";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import options from "@/utils/config";

interface BlogPostProps {
  markdown: { parent: string } | string;
  post: BlogPost;
  readingTime: number;
  relatedPosts: BlogPost[];
}

export default function BlogPostPage({
  markdown,
  post,
  readingTime,
  relatedPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/blog"
          className="inline-flex items-center text-rosa-600 dark:text-rosa-400 hover:text-rosa-700 dark:hover:text-rosa-300 mb-8 text-sm font-medium transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al blog
        </Link>
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Artículo no encontrado
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            El artículo que buscas no existe o ha sido eliminado.
          </p>
        </div>
      </div>
    );
  }

  const SITE_URL = options.APP.SEO.DEFAULT_URL;
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const markdownContent =
    typeof markdown === "string" ? markdown : markdown.parent;

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.cover || `${SITE_URL}/images/LogoHero.png`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Kyo-Sai Nieves",
      jobTitle: "Psicóloga Clínica",
      url: `${SITE_URL}/sobre-mi`,
    },
    publisher: {
      "@type": "Organization",
      name: "Psi. Kyo-Sai Nieves",
      url: SITE_URL,
    },
    mainEntityOfPage: postUrl,
  };

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${post.title} — ${postUrl}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(postUrl)}`,
  };

  return (
    <>
      <Head>
        <title>
          {post.title} | Psicóloga en Panamá — Psi. Kyo-Sai Nieves
        </title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        {post.cover && <meta property="og:image" content={post.cover} />}
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Kyo-Sai Nieves" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleStructuredData),
          }}
        />
      </Head>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-rosa-600 dark:text-rosa-400 hover:text-rosa-700 dark:hover:text-rosa-300 mb-10 text-sm font-medium transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag: Tag) => (
                <span
                  key={tag.id}
                  className="text-[11px] font-semibold text-rosa-600 dark:text-rosa-400 bg-rosa-50 dark:bg-rosa-950 px-3 py-1 rounded-full"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            {post.title}
          </h1>

          {post.description && (
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {post.description}
            </p>
          )}

          <div className="flex items-center gap-4 text-sm text-gray-400 dark:text-gray-500">
            <time>
              {new Date(post.date).toLocaleDateString("es-PA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {readingTime} min de lectura
            </span>
          </div>
        </header>

        {/* Cover Image */}
        {post.cover && (
          <div className="mb-10 rounded-2xl overflow-hidden">
            <Image
              src={post.cover}
              alt={post.title}
              width={900}
              height={500}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-rosa-600 dark:prose-a:text-rosa-400 prose-a:underline-offset-4 prose-blockquote:border-rosa-500 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-300">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>

        {/* Share buttons */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Compartir:
            </span>
            <a
              href={shareLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-full flex items-center justify-center transition"
              aria-label="Compartir en WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
            </a>
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950 dark:hover:bg-blue-900 rounded-full flex items-center justify-center transition"
              aria-label="Compartir en Facebook"
            >
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-full flex items-center justify-center transition"
              aria-label="Compartir en X"
            >
              <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Artículos relacionados
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.id}
                  href={`/blog/${relPost.slug}`}
                  className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:border-rosa-100 dark:hover:border-rosa-900 hover:shadow-md transition-all group"
                >
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {relPost.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag.id}
                        className="text-[10px] font-semibold text-rosa-600 dark:text-rosa-400 bg-rosa-50 dark:bg-rosa-950 px-2 py-0.5 rounded-full"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-rosa-600 dark:group-hover:text-rosa-400 transition line-clamp-2">
                    {relPost.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="bg-rosa-50 dark:bg-rosa-950/30 rounded-2xl p-8 text-center">
            <p className="text-gray-900 dark:text-white font-semibold mb-2">
              ¿Este artículo resonó contigo?
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Si necesitas acompañamiento profesional, estoy aquí para ayudarte.
            </p>
            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-rosa-600 text-white text-sm font-semibold rounded-full hover:bg-rosa-700 transition shadow-lg shadow-rosa-600/25"
            >
              Agenda tu sesión
            </Link>
          </div>
        </div>

        {/* Footer navigation */}
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-rosa-600 dark:text-rosa-400 hover:text-rosa-700 dark:hover:text-rosa-300 text-sm font-medium transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Link>
        </div>
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const postData = await getPostBySlug(slug);

  if (!postData) {
    return { notFound: true };
  }

  const markdownContent =
    typeof postData.markdown === "string"
      ? postData.markdown
      : postData.markdown.parent;

  const readingTime = calculateReadingTime(markdownContent);

  // Fetch related posts (same tags, excluding current)
  let relatedPosts: BlogPost[] = [];
  try {
    const allPosts = await getAllPublishedPosts();
    const currentTags = postData.post.tags.map((t) => t.name);
    relatedPosts = allPosts
      .filter(
        (p) =>
          p.slug !== slug &&
          p.tags.some((t) => currentTags.includes(t.name))
      )
      .slice(0, 2);
  } catch {
    // Related posts are non-critical
  }

  return {
    props: {
      markdown: postData.markdown as { parent: string },
      post: postData.post,
      readingTime,
      relatedPosts,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const slugs = await getAllPostSlugs();
    const paths = slugs.map((slug) => `/blog/${slug}`);

    return {
      paths,
      fallback: "blocking",
    };
  } catch {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};
