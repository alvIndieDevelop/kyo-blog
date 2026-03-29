import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/features/blog/types/blog.types";

interface FeaturedPostsSectionProps {
  posts: BlogPost[];
}

export default function FeaturedPostsSection({
  posts,
}: FeaturedPostsSectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold text-rosa-600 dark:text-rosa-400 tracking-widest uppercase">
              Blog
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3">
              Artículos recientes
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-rosa-600 dark:text-rosa-400 hover:text-rosa-700 dark:hover:text-rosa-300 transition"
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/20 hover:border-rosa-100 dark:hover:border-rosa-900 transition-all group"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag.id}
                    className="px-3 py-1 bg-rosa-50 dark:bg-rosa-950 text-rosa-700 dark:text-rosa-400 rounded-full text-xs font-medium"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-rosa-600 dark:group-hover:text-rosa-400 transition">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4">
                {post.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {new Date(post.date).toLocaleDateString("es-PA", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span className="text-xs font-semibold text-rosa-600 dark:text-rosa-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Leer más <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-rosa-600 dark:text-rosa-400"
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
