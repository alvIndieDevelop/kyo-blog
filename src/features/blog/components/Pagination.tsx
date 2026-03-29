import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-full text-gray-600 dark:text-gray-400 disabled:text-gray-300 dark:disabled:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        aria-label="Página anterior"
      >
        <ChevronLeft size={18} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-9 h-9 text-sm font-medium rounded-full transition ${
            currentPage === page
              ? "bg-teal-600 text-white"
              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full text-gray-600 dark:text-gray-400 disabled:text-gray-300 dark:disabled:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        aria-label="Página siguiente"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
