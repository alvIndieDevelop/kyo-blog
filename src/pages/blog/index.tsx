import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Search } from "lucide-react";
import {
  BlogCard,
  TagFilter,
  Pagination,
} from "@/features/blog";
import type { BlogPost } from "@/features/blog";
import { getAllPublishedPosts } from "@/features/blog/lib/unified-blog";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import CTASection from "@/components/shared/CTASection";

const POSTS_PER_PAGE = 6;

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Handle tag from URL query (e.g., /blog?tag=Ansiedad)
  useEffect(() => {
    const tag = router.query.tag;
    if (typeof tag === "string" && tag) {
      setSelectedTags([tag]);
    }
  }, [router.query.tag]);

  const uniqueCategories = [
    ...Array.from(
      new Set(
        posts.flatMap((post: BlogPost) => post.tags.map((tag) => tag.name))
      )
    ),
  ];

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((selectedTag) => selectedTag !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const filteredPosts = posts.filter((post: BlogPost) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) =>
        post.tags.some((postTag) => postTag.name === tag)
      );

    return matchesSearch && matchesTags;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <Head>
        <title>Blog de Psicología | Ansiedad, Autoestima y Bienestar Emocional</title>
        <meta
          name="description"
          content="Artículos sobre psicología, ansiedad, autoestima, relaciones y bienestar emocional por Psi. Kyo-Sai Nieves, psicóloga clínica en Panamá."
        />
        <meta
          property="og:title"
          content="Blog de Psicología | Psi. Kyo-Sai Nieves"
        />
        <meta
          property="og:description"
          content="Artículos sobre psicología, bienestar emocional y salud mental."
        />
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-rosa-600 dark:text-rosa-400 tracking-widest uppercase">
            Blog
          </span>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            Artículos & Reflexiones
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">
            Exploraciones sobre psicología, bienestar emocional y herramientas
            para una vida más plena.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full px-4 py-2.5 pl-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-rosa-400 dark:focus:border-rosa-600 transition"
            />
            <Search
              className="absolute left-3.5 top-3 text-gray-400 dark:text-gray-600"
              size={16}
            />
          </div>

          {uniqueCategories.length > 0 && (
            <TagFilter
              tags={uniqueCategories as string[]}
              selectedTags={selectedTags}
              onTagSelect={handleTagSelect}
            />
          )}
        </div>

        {/* Blog Posts Grid */}
        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post: BlogPost) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 dark:text-gray-600">
              No se encontraron artículos con los filtros seleccionados.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {/* CTA */}
        <div className="mt-16">
          <CTASection
            title="¿Necesitas acompañamiento profesional?"
            description="Si algo de lo que leíste resonó contigo, agenda una sesión y hablemos."
            buttonText="Agenda tu sesión →"
            buttonHref="/agenda"
          />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let posts: BlogPost[];

  try {
    posts = await getAllPublishedPosts();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    posts = [];
  }

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
