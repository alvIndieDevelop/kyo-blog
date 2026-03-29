import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "../data/home-content";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50/70 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Servicios"
          title="¿Cómo puedo ayudarte?"
          description="Un enfoque integral y empático para tu bienestar emocional y mental."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/20 hover:border-teal-100 dark:hover:border-teal-900 transition-all group"
            >
              <div className="w-12 h-12 bg-teal-50 dark:bg-teal-950 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-100 dark:group-hover:bg-teal-900 transition">
                <service.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
