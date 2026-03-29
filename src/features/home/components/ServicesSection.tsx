import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/shared/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/shared/StaggerChildren";
import { services } from "../data/home-content";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-rosa-50/40 dark:bg-rosa-950/10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="Servicios"
            title="¿Cómo puedo ayudarte?"
            description="Un enfoque integral y empático para tu bienestar emocional y mental."
          />
        </FadeIn>
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/20 hover:border-rosa-100 dark:hover:border-rosa-900 hover:-translate-y-1 transition-all group h-full">
                <div className="w-12 h-12 bg-rosa-50 dark:bg-rosa-950 rounded-xl flex items-center justify-center mb-5 group-hover:bg-rosa-100 dark:group-hover:bg-rosa-900 transition">
                  <service.icon className="w-6 h-6 text-rosa-600 dark:text-rosa-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-rosa-600 dark:text-rosa-400 hover:text-rosa-700 dark:hover:text-rosa-300 transition"
            >
              Ver todos los servicios
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
