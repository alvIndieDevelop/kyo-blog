import Link from "next/link";
import {
  Brain,
  HeartHandshake,
  Flame,
  Sparkles,
  Sprout,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/shared/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/shared/StaggerChildren";
import type { LucideIcon } from "lucide-react";

type ProblemItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
};

const problems: ProblemItem[] = [
  {
    icon: Brain,
    title: "Ansiedad",
    description:
      "Pensamientos acelerados, preocupación constante o dificultad para relajarte. Aprende herramientas para recuperar la calma.",
    tag: "Ansiedad",
  },
  {
    icon: HeartHandshake,
    title: "Relaciones",
    description:
      "Dificultades en tus vínculos de pareja, familia o amistades. Trabaja en patrones que afectan tus conexiones.",
    tag: "Relaciones",
  },
  {
    icon: Sparkles,
    title: "Autoestima",
    description:
      "Inseguridad, autocrítica excesiva o dificultad para reconocer tu valor. Reconecta con una imagen más compasiva de ti.",
    tag: "Autoestima",
  },
  {
    icon: Flame,
    title: "Burnout",
    description:
      "Agotamiento emocional y físico por exceso de trabajo o responsabilidades. Encuentra un equilibrio sostenible.",
    tag: "Burnout",
  },
  {
    icon: Sprout,
    title: "Desarrollo Personal",
    description:
      "Quieres crecer, conocerte mejor y alcanzar tu potencial. La terapia también es para quienes buscan evolucionar.",
    tag: "Desarrollo personal",
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-rosa-50/40 dark:bg-rosa-950/10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="Puedo ayudarte con"
            title="Problemas que atiendo"
            description="Si te identificas con alguno de estos temas, la terapia puede ser el espacio que necesitas."
          />
        </FadeIn>
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <StaggerItem key={problem.title}>
              <Link
                href={`/blog?tag=${encodeURIComponent(problem.tag)}`}
                className="block bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/20 hover:border-rosa-100 dark:hover:border-rosa-900 hover:-translate-y-1 transition-all group h-full"
              >
                <div className="w-12 h-12 bg-rosa-50 dark:bg-rosa-950 rounded-xl flex items-center justify-center mb-5 group-hover:bg-rosa-100 dark:group-hover:bg-rosa-900 transition">
                  <problem.icon className="w-6 h-6 text-rosa-600 dark:text-rosa-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-rosa-600 dark:group-hover:text-rosa-400 transition">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {problem.description}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
