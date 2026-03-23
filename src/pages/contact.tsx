import Head from "next/head";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { MessageCircle } from "lucide-react";
import options from "@/utils/config";

const WHATSAPP_NUMBER = options.WHATSAPP.NUMBER;
const WHATSAPP_MESSAGE = encodeURIComponent(
  options.WHATSAPP.DEFAULT_MESSAGE
);

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto | Psi. Kyo-Sai Nieves</title>
        <meta
          name="description"
          content="Agenda tu cita con Psi. Kyo-Sai Nieves. Consultas presenciales en Royal Center Marbella, Ciudad de Panamá, y sesiones online."
        />
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-widest uppercase">
            Contacto
          </span>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            Agenda tu cita
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">
            El primer paso hacia tu bienestar comienza aquí. Completa el
            formulario o contáctame directamente.
          </p>
        </div>

        {/* WhatsApp Card */}
        <div className="mb-10">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#25D366]/10 dark:bg-[#25D366]/5 border border-[#25D366]/20 dark:border-[#25D366]/10 rounded-2xl p-5 hover:bg-[#25D366]/15 dark:hover:bg-[#25D366]/10 transition group"
          >
            <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">
                Escríbeme por WhatsApp
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                La forma más rápida de agendar tu cita. Respuesta en menos de 24
                horas.
              </p>
            </div>
            <span className="text-sm font-semibold text-[#25D366] group-hover:translate-x-1 transition-transform hidden sm:inline">
              Abrir chat →
            </span>
          </a>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Envíame un mensaje
            </h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Información de contacto
            </h2>
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
}
