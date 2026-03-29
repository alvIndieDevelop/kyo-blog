import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const included = [
  "Sesión de 45-50 minutos",
  "Plan de tratamiento personalizado",
  "Seguimiento de tu progreso",
  "Modalidad online o presencial",
  "Herramientas prácticas entre sesiones",
  "Confidencialidad total",
];

export default function PricingSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-rosa-600 dark:text-rosa-400 tracking-widest uppercase">
            Inversión
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            Tu bienestar es una inversión, no un gasto
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            La terapia es un compromiso contigo. Aquí tienes toda la información
            para que puedas tomar tu decisión con tranquilidad.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-10 lg:p-12 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm text-rosa-600 dark:text-rosa-400 font-semibold mb-2">
                Sesión individual
              </p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">
                  $65
                </span>
                <span className="text-gray-400 dark:text-gray-500 text-sm">
                  / sesión
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                Aplica tanto para sesiones online como presenciales. El pago se
                realiza antes de cada sesión por transferencia, Yappy o efectivo.
              </p>
              <Link
                href="/agenda"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-rosa-600 text-white text-sm font-semibold rounded-full hover:bg-rosa-700 transition shadow-lg shadow-rosa-600/25"
              >
                Agenda tu primera sesión
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Qué incluye cada sesión:
              </h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-rosa-50 dark:bg-rosa-950 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-rosa-600 dark:text-rosa-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="mt-8 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Politicas de cancelacion y pago
          </h3>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-rosa-500 mt-0.5">&bull;</span>
              Las cancelaciones deben realizarse con al menos 24 horas de
              anticipacion.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rosa-500 mt-0.5">&bull;</span>
              Cancelaciones tardias o inasistencias podran generar un cargo
              parcial.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rosa-500 mt-0.5">&bull;</span>
              Metodos de pago: transferencia bancaria, Yappy o efectivo.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rosa-500 mt-0.5">&bull;</span>
              Consulta por cobertura de seguro medico.
            </li>
          </ul>
        </div>

        {/* Process info */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-10 h-10 bg-rosa-50 dark:bg-rosa-950 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-sm font-bold text-rosa-600 dark:text-rosa-400">
                1
              </span>
            </div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              Primera sesión
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Conociéndonos: exploramos tu motivo de consulta y definimos
              objetivos juntos.
            </p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-rosa-50 dark:bg-rosa-950 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-sm font-bold text-rosa-600 dark:text-rosa-400">
                2
              </span>
            </div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              Proceso terapéutico
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Sesiones semanales o quincenales según tu necesidad y
              disponibilidad.
            </p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-rosa-50 dark:bg-rosa-950 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-sm font-bold text-rosa-600 dark:text-rosa-400">
                3
              </span>
            </div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              Evolución y cierre
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Evaluamos tu progreso y ajustamos el plan hasta alcanzar tus
              metas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
