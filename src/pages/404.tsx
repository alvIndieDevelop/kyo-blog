import Head from "next/head";
import Link from "next/link";
import { Home, ArrowLeft, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página no encontrada | Psi. Kyo-Sai Nieves</title>
      </Head>

      <div className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-6xl font-bold text-rosa-200 dark:text-rosa-900 mb-4">
            404
          </p>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Página no encontrada
          </h1>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida. Pero
            estamos aquí para ayudarte a encontrar lo que necesitas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-rosa-600 text-white text-sm font-semibold rounded-full hover:bg-rosa-700 transition shadow-lg shadow-rosa-600/25"
            >
              <Home className="w-4 h-4" />
              Ir al inicio
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
            >
              <BookOpen className="w-4 h-4" />
              Leer el blog
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
            <Link
              href="/agenda"
              className="inline-flex items-center gap-1 text-sm text-rosa-600 dark:text-rosa-400 hover:text-rosa-700 dark:hover:text-rosa-300 transition"
            >
              <ArrowLeft className="w-3 h-3" />
              O agenda tu cita directamente
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
