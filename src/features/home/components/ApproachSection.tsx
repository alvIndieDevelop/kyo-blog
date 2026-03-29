import { Leaf, Heart, Lightbulb } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/shared/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/shared/StaggerChildren";

const approaches = [
  {
    icon: Heart,
    title: "Perspectiva Psicodinámica",
    description:
      "Exploro contigo los patrones inconscientes y las experiencias que moldean tu forma de sentir y relacionarte. Comprender el origen es el primer paso para transformar.",
  },
  {
    icon: Lightbulb,
    title: "Enfoque Sistémico",
    description:
      "Entiendo que no existimos en aislamiento. Analizo cómo tus relaciones y contextos influyen en tu bienestar, para lograr cambios que se sostengan en tu vida real.",
  },
  {
    icon: Leaf,
    title: "Integración Terapéutica",
    description:
      "Combino lo mejor de diferentes enfoques, adaptándome a lo que tú necesitas en cada momento. No hay una fórmula única — cada proceso es tan único como tú.",
  },
];

export default function ApproachSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="Mi enfoque terapéutico"
            title="Una mirada integrativa y humana"
            description="Mi práctica se fundamenta en la comprensión profunda de quién eres, no solo de lo que te pasa."
          />
        </FadeIn>
        <StaggerChildren className="grid md:grid-cols-3 gap-8">
          {approaches.map((item) => (
            <StaggerItem key={item.title}>
              <div className="text-center">
                <div className="w-14 h-14 bg-rosa-50 dark:bg-rosa-950 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-rosa-600 dark:text-rosa-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
