import Head from "next/head";
import Link from "next/link";
import { AgendaHero, CalendlyEmbed, BookingInfo } from "@/features/agenda";
import { MessageCircle, AlertCircle } from "lucide-react";
import options from "@/utils/config";

export default function Agenda() {
  const whatsappUrl = `https://wa.me/${options.WHATSAPP.NUMBER}?text=${encodeURIComponent(options.WHATSAPP.DEFAULT_MESSAGE)}`;

  return (
    <>
      <Head>
        <title>
          Agendar Cita con Psicóloga en Panamá | Psi. Kyo-Sai Nieves
        </title>
        <meta
          name="description"
          content="Agenda tu cita con Psi. Kyo-Sai Nieves, psicóloga clínica en Ciudad de Panamá. Consultas online y presenciales. Sesión a $65."
        />
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <AgendaHero />

        {/* Booking info cards */}
        <div className="mb-12">
          <BookingInfo />
        </div>

        {/* Two-column: Calendly + WhatsApp */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <CalendlyEmbed />
          </div>
          <div className="space-y-6">
            {/* WhatsApp alternative */}
            <div className="bg-[#25D366]/10 dark:bg-[#25D366]/5 rounded-2xl p-6 border border-[#25D366]/20">
              <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                ¿Prefieres WhatsApp?
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                Si prefieres coordinar tu cita directamente, escríbeme por
                WhatsApp y te respondo a la brevedad.
              </p>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-full hover:bg-[#20bd5a] transition"
              >
                <MessageCircle className="w-4 h-4" />
                Escribir por WhatsApp
              </Link>
            </div>

            {/* Policies */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-rosa-600 dark:text-rosa-400 flex-shrink-0 mt-0.5" />
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Información importante
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rosa-400 rounded-full mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong className="text-gray-700 dark:text-gray-300">
                      Cancelaciones:
                    </strong>{" "}
                    Solicita cancelaciones o cambios con al menos 24 horas de
                    anticipación.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rosa-400 rounded-full mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong className="text-gray-700 dark:text-gray-300">
                      Reserva:
                    </strong>{" "}
                    La cita se confirma con el pago previo de la sesión ($65).
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rosa-400 rounded-full mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong className="text-gray-700 dark:text-gray-300">
                      Pago:
                    </strong>{" "}
                    Transferencia bancaria, Yappy o efectivo (presencial).
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rosa-400 rounded-full mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong className="text-gray-700 dark:text-gray-300">
                      Primera vez:
                    </strong>{" "}
                    La primera sesión es de evaluación y conocimiento mutuo.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
