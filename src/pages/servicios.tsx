import Head from "next/head";
import { ServicesHero, ServicesList, PricingSection } from "@/features/services";
import CTASection from "@/components/shared/CTASection";

export default function Servicios() {
  return (
    <>
      <Head>
        <title>
          Servicios de Psicoterapia en Panamá | Terapia Individual Online y
          Presencial
        </title>
        <meta
          name="description"
          content="Servicios de psicoterapia individual, consultas online y presenciales, evaluaciones psicológicas y terapia para adolescentes. Sesión a $65. Psicóloga clínica en Ciudad de Panamá."
        />
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <ServicesHero />
        <ServicesList />
        <PricingSection />

        <div className="mt-8">
          <CTASection
            title="Da el primer paso hacia tu bienestar"
            description="Agenda una consulta inicial y juntos encontraremos el camino terapéutico más adecuado para ti."
            buttonText="Agenda tu sesión ahora →"
            buttonHref="/agenda"
          />
        </div>
      </div>
    </>
  );
}
