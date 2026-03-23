import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/notion.schema";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { title, description, date, slug, cover, tags } = post;

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/20 transition-all">
        {cover ? (
          <div className="h-48 overflow-hidden">
            <Image
              src={cover}
              alt={title}
              width={600}
              height={300}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ) : (
          <div className="h-48 bg-gradient-to-br from-teal-100 to-teal-50 dark:from-teal-900 dark:to-teal-950" />
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            {tags && tags.length > 0 && (
              <span className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 px-2.5 py-1 rounded-full">
                {tags[0].name}
              </span>
            )}
            <span className="text-xs text-gray-400 dark:text-gray-500">
              ·{" "}
              {new Date(date).toLocaleDateString("es-PA", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition leading-snug">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>
          <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 group-hover:underline">
            Leer más →
          </span>
        </div>
      </article>
    </Link>
  );
}
