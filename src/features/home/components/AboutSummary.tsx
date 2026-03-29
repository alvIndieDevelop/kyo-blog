import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BookOpen } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

export default function AboutSummary() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left" className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-rosa-900/10 dark:shadow-black/30 aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/KyoSaiNieves.jpg"
                alt="Psi. Kyo-Sai Nieves — Psicóloga Clínica"
                width={500}
                height={625}
                className="object-cover w-full h-full"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <span className="text-xs font-semibold text-rosa-600 dark:text-rosa-400 tracking-widest uppercase">
              Sobre mí
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3 mb-6">
              Psi. Kyo-Sai Nieves
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Soy psicóloga clínica con más de 7 años de experiencia en el
              acompañamiento terapéutico de adolescentes y adultos. Mi enfoque
              combina la perspectiva psicodinámica y sistémica para ofrecer una
              atención integral que responda a tus necesidades únicas.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Además de mi práctica clínica privada, he dedicado parte de mi
              carrera al trabajo comunitario, coordinando programas de salud
              mental juvenil — porque creo que la psicología debe ser accesible
              para todos.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-3 bg-rosa-50 dark:bg-rosa-950 rounded-xl px-4 py-3">
                <Award className="w-5 h-5 text-rosa-600 dark:text-rosa-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Psicóloga Clínica Licenciada
                </span>
              </div>
              <div className="flex items-center gap-3 bg-rosa-50 dark:bg-rosa-950 rounded-xl px-4 py-3">
                <BookOpen className="w-5 h-5 text-rosa-600 dark:text-rosa-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Psicoterapia Integrativa
                </span>
              </div>
            </div>

            <Link
              href="/sobre-mi"
              className="inline-flex items-center gap-2 text-sm font-semibold text-rosa-600 dark:text-rosa-400 hover:text-rosa-700 dark:hover:text-rosa-300 transition"
            >
              Conoce más sobre mí
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
