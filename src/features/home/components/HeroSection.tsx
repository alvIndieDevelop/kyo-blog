import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 px-4 py-2 rounded-full text-xs font-semibold mb-8">
              <span className="w-2 h-2 bg-teal-500 rounded-full" />
              Aceptando nuevos pacientes
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Tu bienestar emocional{" "}
              <span className="text-teal-600 dark:text-teal-400">
                es mi prioridad
              </span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-lg">
              Acompañamiento psicológico personalizado para adolescentes y
              adultos. Un espacio seguro donde explorar, sanar y crecer.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition shadow-lg shadow-teal-600/25"
              >
                Agenda tu cita →
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
              >
                Conoce más
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  7+
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Años de experiencia
                </p>
              </div>
              <div className="w-px h-10 bg-gray-200 dark:bg-gray-700" />
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  500+
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Pacientes atendidos
                </p>
              </div>
              <div className="w-px h-10 bg-gray-200 dark:bg-gray-700" />
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  Online
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  & Presencial
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/10 dark:shadow-black/30 max-h-[420px] lg:max-h-none lg:aspect-[3/4] relative">
              <Image
                src="/images/KyoSaiNieves.jpg"
                alt="Psi. Kyo-Sai Nieves"
                width={600}
                height={800}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 left-4 lg:-left-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-5 border border-gray-100 dark:border-gray-800 max-w-[260px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-teal-50 dark:bg-teal-950 rounded-full flex items-center justify-center">
                  <span className="text-sm">🌿</span>
                </div>
                <p className="text-xs font-semibold text-gray-900 dark:text-white">
                  El don de fluir
                </p>
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                hacia una vida plena comienza con un primer paso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
