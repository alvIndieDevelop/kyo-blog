import Head from "next/head";
import {
  AboutHero,
  PhilosophySection,
  EducationSection,
  ExperienceSection,
} from "@/features/about";
import CTASection from "@/components/shared/CTASection";

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre Mí | Psi. Kyo-Sai Nieves — Psicóloga Clínica en Panamá</title>
        <meta
          name="description"
          content="Conoce a Kyo-Sai Nieves, psicóloga clínica en Ciudad de Panamá con más de 7 años de experiencia. Enfoque psicodinámico y sistémico. Psicoterapia online y presencial."
        />
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <AboutHero />
        <PhilosophySection />

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <EducationSection />
          <ExperienceSection />
        </div>

        <CTASection
          title="¿Te gustaría comenzar tu proceso?"
          description="Estoy aquí para acompañarte en cada paso. Agenda una primera sesión y juntos encontraremos el camino hacia tu bienestar."
          buttonText="Agenda tu cita"
          buttonHref="/agenda"
        />
      </div>
    </>
  );
}
