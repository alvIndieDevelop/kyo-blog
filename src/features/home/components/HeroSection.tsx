import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="inline-flex items-center gap-2 bg-rosa-50 dark:bg-rosa-950 text-rosa-700 dark:text-rosa-400 px-4 py-2 rounded-full text-xs font-semibold mb-8">
              <span className="w-2 h-2 bg-rosa-500 rounded-full animate-pulse" />
              Aceptando nuevos pacientes
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Entenderte tambi&eacute;n es{" "}
              <span className="text-rosa-600 dark:text-rosa-400">
                una forma de sanar
              </span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-lg">
              Acompa&ntilde;amiento psicol&oacute;gico c&aacute;lido y
              personalizado para adolescentes y adultos. Un espacio seguro donde
              explorar tus emociones, comprenderte y crecer.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/agenda"
                className="px-8 py-3.5 bg-rosa-600 text-white text-sm font-semibold rounded-full hover:bg-rosa-700 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-rosa-600/25"
              >
                Agendar sesi&oacute;n &rarr;
              </Link>
              <Link
                href="/sobre-mi"
                className="px-8 py-3.5 text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full hover:border-rosa-300 dark:hover:border-rosa-800 hover:bg-rosa-50 dark:hover:bg-rosa-950 transition"
              >
                Conoce m&aacute;s
              </Link>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800"
            >
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
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-rosa-900/10 dark:shadow-black/30 max-h-[420px] lg:max-h-none lg:aspect-[3/4] relative">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 left-4 lg:-left-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-5 border border-gray-100 dark:border-gray-800 max-w-[260px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-rosa-50 dark:bg-rosa-950 rounded-full flex items-center justify-center">
                  <span className="text-sm">🌿</span>
                </div>
                <p className="text-xs font-semibold text-gray-900 dark:text-white">
                  El don de fluir
                </p>
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                hacia una vida plena comienza con un primer paso.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
