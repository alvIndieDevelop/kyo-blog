import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-20 bg-rosa-50/40 dark:bg-rosa-950/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold text-rosa-600 dark:text-rosa-400 tracking-widest uppercase">
              Ubicación
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
              Visítame en consulta
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Consultorios Royal Center, ubicados en el corazón de Marbella,
              Ciudad de Panamá. Un espacio cómodo y accesible para tu
              sesión.
            </p>
            <div className="flex items-start gap-3 mb-8">
              <MapPin className="w-5 h-5 text-rosa-600 dark:text-rosa-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Consultorios Royal Center
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Marbella, Ciudad de Panamá, Panamá
                </p>
              </div>
            </div>
            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 px-6 py-3 bg-rosa-600 text-white text-sm font-semibold rounded-full hover:bg-rosa-700 transition shadow-lg shadow-rosa-600/25"
            >
              Agenda tu cita
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7!2d-79.5285!3d8.9824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f1dbe80363%3A0xaba9df7ed89d1c2!2sRoyal%20Center!5e0!3m2!1sen!2spa!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Consultorios Royal Center, Marbella"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
