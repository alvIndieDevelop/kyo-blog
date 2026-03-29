import Image from "next/image";
import { Award, BookOpen, Users } from "lucide-react";

export default function AboutHero() {
  return (
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
  );
}
