import { Leaf, Heart, Award } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section className="mb-20">
      <div className="bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/30 dark:to-gray-950 rounded-3xl p-10 lg:p-14 border border-teal-100 dark:border-teal-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Leaf className="w-7 h-7 text-teal-600 dark:text-teal-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Mi Filosofía de Trabajo
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Creo firmemente que cada persona tiene dentro de sí la capacidad
            de sanar y crecer. Mi enfoque integrativo combina las mejores
            técnicas de diferentes corrientes terapéuticas, adaptándolas a
            las necesidades únicas de cada paciente.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            <div className="text-center">
              <Heart className="w-6 h-6 text-teal-600 dark:text-teal-400 mx-auto mb-3" />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                Empatía
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Un espacio de escucha activa y comprensión genuina.
              </p>
            </div>
            <div className="text-center">
              <Leaf className="w-6 h-6 text-teal-600 dark:text-teal-400 mx-auto mb-3" />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                Crecimiento
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Acompaño tu proceso de transformación personal.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-6 h-6 text-teal-600 dark:text-teal-400 mx-auto mb-3" />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                Profesionalismo
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Formación continua y prácticas basadas en evidencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
