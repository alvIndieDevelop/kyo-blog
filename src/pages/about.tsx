import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, Users, Leaf, Heart, ArrowRight } from "lucide-react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Acerca de | Psi. Kyo-Sai Nieves</title>
        <meta
          name="description"
          content="Conoce a Kyo-Sai Nieves — Psicóloga Clínica y Psicoterapeuta en Formación."
        />
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-widest uppercase">
              Acerca de
            </span>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-6">
              Psi. Kyo-Sai Nieves
            </h1>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Kyo-Sai Nieves es una psicóloga profesional comprometida con el
              bienestar emocional de adolescentes y adultos. Con experiencia en
              psicología clínica y en formación como psicoterapeuta, ofrece un
              enfoque integral y empático para abordar temas como ansiedad,
              depresión, crecimiento personal y manejo de crisis.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Su objetivo es brindar un espacio seguro donde cada persona pueda
              explorar sus emociones, superar desafíos y alcanzar un equilibrio
              mental y emocional. Con sesiones tanto presenciales en los
              Consultorios Royal Center de Marbella, Ciudad de Panamá, como en
              modalidad online.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-teal-50 dark:bg-teal-950 rounded-2xl p-5 text-center">
                <Award className="w-6 h-6 text-teal-600 dark:text-teal-400 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-900 dark:text-white">
                  Psicóloga Clínica
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                  Licenciada
                </p>
              </div>
              <div className="bg-teal-50 dark:bg-teal-950 rounded-2xl p-5 text-center">
                <BookOpen className="w-6 h-6 text-teal-600 dark:text-teal-400 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-900 dark:text-white">
                  Psicoterapia Integrativa
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                  Especialista
                </p>
              </div>
              <div className="bg-teal-50 dark:bg-teal-950 rounded-2xl p-5 text-center">
                <Users className="w-6 h-6 text-teal-600 dark:text-teal-400 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-900 dark:text-white">
                  Programas Juveniles
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                  Coordinadora
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/10 dark:shadow-black/30 max-h-[420px] lg:max-h-none lg:aspect-[3/4] relative">
              <Image
                src="/images/KyoSaiNieves.jpg"
                alt="Psi. Kyo-Sai Nieves"
                width={600}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Philosophy / Approach Section */}
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

        {/* Education & Experience */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Education */}
          <section>
            <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-widest uppercase">
              Formación
            </span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-3 mb-8">
              Educación
            </h2>
            <div className="space-y-6">
              <TimelineCard
                title="Licenciatura en Psicología"
                subtitle="Universidad Latinoamericana de Comercio Exterior (2012 – 2017)"
                detail='Trabajo de grado: "La aplicación de la arteterapia para mejorar la autoestima en jóvenes en riesgo social."'
              />
              <TimelineCard
                title="Psicología Clínica con Especialización en Psicoterapia Integrativa"
                subtitle="Universidad Especializada de Las Américas (2018 – 2022)"
              />
              <TimelineCard
                title="Psicoterapia Psicodinámica en Niños y Adolescentes"
                subtitle="Instituto Internacional de Psicoterapia (Mar. 2022 – Oct. 2022)"
              />
            </div>

            {/* Diplomados */}
            <div className="mt-8 bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Diplomados
              </h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>• Fundamentos de Psicoterapia Psicodinámica (2020 – 2021)</li>
                <li>• Psicología Clínica (2019)</li>
                <li>• Psicología en la Infancia y Adolescencia (2019)</li>
                <li>• Pruebas Psicológicas en su Campo de Acción (2018)</li>
                <li>• Marketing Digital 2.0 y Community Manager (2020 – 2021)</li>
              </ul>
            </div>
          </section>

          {/* Experience */}
          <section>
            <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-widest uppercase">
              Trayectoria
            </span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-3 mb-8">
              Experiencia Profesional
            </h2>
            <div className="space-y-6">
              <TimelineCard
                title="Psicóloga Independiente"
                subtitle="2018 – Actualidad"
                bullets={[
                  "Psicoterapia individual para adolescentes y adultos",
                  "Evaluaciones psicológicas y elaboración de informes",
                  "Facilitación de grupos de apoyo",
                ]}
              />
              <TimelineCard
                title="Coordinadora de Programas Juveniles"
                subtitle="Secretaría Nacional de Niñez, Adolescencia y Familia (2023 – Actualidad)"
                bullets={[
                  "Gestión y planificación de actividades para NNA",
                  "Intervención en crisis y orientación psicológica",
                ]}
              />
              <TimelineCard
                title="Directora de Proyecto"
                subtitle="Red Apoyo Psicológico Panamá (2020 – 2022)"
                detail="Supervisión de protocolos, asignación de casos y manejo de redes sociales"
              />
              <TimelineCard
                title="Psicóloga"
                subtitle="Novus Medical Center (2019 – 2021)"
                detail="Evaluaciones psicológicas, orientación emocional y psicoterapia"
              />
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                ¿Te gustaría comenzar tu proceso?
              </h2>
              <p className="text-teal-100 mb-8 max-w-lg mx-auto">
                Estoy aquí para acompañarte en cada paso. Agenda una primera
                sesión y juntos encontraremos el camino hacia tu bienestar.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white text-teal-700 text-sm font-semibold rounded-full hover:bg-teal-50 transition shadow-lg"
              >
                Agenda tu cita
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function TimelineCard({
  title,
  subtitle,
  detail,
  bullets,
}: {
  title: string;
  subtitle: string;
  detail?: string;
  bullets?: string[];
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
        {title}
      </h3>
      <p className="text-xs text-teal-600 dark:text-teal-400 font-medium mb-2">
        {subtitle}
      </p>
      {detail && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{detail}</p>
      )}
      {bullets && (
        <ul className="mt-2 space-y-1">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2"
            >
              <span className="text-teal-500 mt-0.5">•</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
