import Head from "next/head";
import Link from "next/link";
import { BookOpen, FileText, Download, ArrowRight, Bell } from "lucide-react";

const upcomingResources = [
  {
    icon: FileText,
    title: "Guía: Manejo de la Ansiedad",
    description:
      "Herramientas prácticas y ejercicios para cuando la ansiedad se siente abrumadora.",
    tag: "PDF Descargable",
  },
  {
    icon: BookOpen,
    title: "Diario de Emociones",
    description:
      "Un diario guiado para explorar y comprender tus patrones emocionales día a día.",
    tag: "Recurso Interactivo",
  },
  {
    icon: Download,
    title: "Kit de Autocuidado",
    description:
      "Estrategias y actividades de autocuidado para incorporar en tu rutina diaria.",
    tag: "PDF Descargable",
  },
];

export default function Recursos() {
  return (
    <>
      <Head>
        <title>
          Recursos de Psicología | Psi. Kyo-Sai Nieves
        </title>
        <meta
          name="description"
          content="Recursos y herramientas de psicología para tu bienestar emocional. Guías descargables, ejercicios prácticos y material de apoyo terapéutico."
        />
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <span className="text-xs font-semibold text-rosa-600 dark:text-rosa-400 tracking-widest uppercase">
            Recursos
          </span>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            Herramientas para tu bienestar
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            Próximamente encontrarás aquí guías descargables, ejercicios
            prácticos y recursos de apoyo terapéutico diseñados para acompañarte
            entre sesiones y más allá.
          </p>
        </div>

        {/* Coming soon notice */}
        <div className="bg-gradient-to-br from-rosa-50 to-warm-50 dark:from-rosa-950/30 dark:to-warm-950/30 rounded-3xl p-10 lg:p-14 border border-rosa-100 dark:border-rosa-900/50 mb-16">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-14 h-14 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Bell className="w-7 h-7 text-rosa-600 dark:text-rosa-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Estamos preparando algo especial
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Estoy creando recursos de calidad que complementen tu proceso
              terapéutico. Escríbeme por WhatsApp si quieres ser de las primeras
              personas en recibirlos.
            </p>
            <Link
              href={`https://wa.me/50764333779?text=${encodeURIComponent("Hola, me gustaría recibir los recursos cuando estén disponibles.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-rosa-600 text-white text-sm font-semibold rounded-full hover:bg-rosa-700 transition shadow-lg shadow-rosa-600/25"
            >
              Avísame cuando estén listos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Preview of upcoming resources */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Próximamente
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingResources.map((resource) => (
              <div
                key={resource.title}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 opacity-75"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-rosa-50 dark:bg-rosa-950 rounded-xl flex items-center justify-center">
                    <resource.icon className="w-6 h-6 text-rosa-600 dark:text-rosa-400" />
                  </div>
                  <span className="text-[11px] font-semibold text-rosa-600 dark:text-rosa-400 bg-rosa-50 dark:bg-rosa-950 px-3 py-1 rounded-full">
                    {resource.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
