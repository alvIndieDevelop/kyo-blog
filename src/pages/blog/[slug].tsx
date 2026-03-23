import {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NotionService from "@/lib/notion";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

export default function BlogPost({
  markdown,
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/blog"
          className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 mb-8 text-sm font-medium transition"
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

  return (
    <>
      <Head>
        <title>{post.title} | Psi. Kyo-Sai Nieves</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        {post.cover && <meta property="og:image" content={post.cover} />}
      </Head>

      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 mb-10 text-sm font-medium transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 px-3 py-1 rounded-full"
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

          <time className="text-sm text-gray-400 dark:text-gray-500">
            {new Date(post.date).toLocaleDateString("es-PA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
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
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-teal-600 dark:prose-a:text-teal-400 prose-a:underline-offset-4 prose-blockquote:border-teal-500 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-300">
          <ReactMarkdown>{markdown.parent}</ReactMarkdown>
        </div>

        {/* Footer navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link
            href="/blog"
            className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 text-sm font-medium transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Link>
        </div>
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ns = new NotionService();
  const post = await ns.getSingleBlogPost(params?.slug as string);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      markdown: post.markdown,
      post: post.post,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const ns = new NotionService();
    const posts = await ns.getPublishedBlogPosts();
    const paths = posts.map((post) => `/blog/${post.slug}`);

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
