import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {
  User,
  Monitor,
  Building2,
  ClipboardCheck,
  Heart,
  Users,
  Shield,
  Brain,
  Sparkles,
  Quote,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { GetStaticProps } from "next";
import NotionService from "@/lib/notion";
import { BlogPost } from "@/types/notion.schema";

interface HomeProps {
  featuredPosts: BlogPost[];
}

const services = [
  {
    icon: User,
    title: "Psicoterapia Individual",
    description:
      "Sesiones personalizadas para explorar, sanar y crecer emocionalmente.",
  },
  {
    icon: Monitor,
    title: "Consulta Online",
    description:
      "Accede a sesiones terapéuticas desde la comodidad de tu hogar.",
  },
  {
    icon: Building2,
    title: "Consulta Presencial",
    description:
      "En un espacio seguro en Consultorios Royal Center, Marbella, Panamá.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluaciones Psicológicas",
    description:
      "Diagnósticos especializados para identificar necesidades en salud mental.",
  },
  {
    icon: Heart,
    title: "Orientación y Apoyo",
    description:
      "Asesoramiento para gestionar crisis y promover el bienestar emocional.",
  },
  {
    icon: Users,
    title: "Terapia para Adolescentes",
    description:
      "Enfoque especializado para jóvenes en su desarrollo emocional.",
  },
];

const whyChooseMe = [
  {
    icon: Shield,
    title: "Espacio Seguro",
    description:
      "Un ambiente de total confidencialidad donde puedes expresarte sin juicio.",
  },
  {
    icon: Brain,
    title: "Enfoque Integrativo",
    description:
      "Combino diversas técnicas terapéuticas adaptadas a tus necesidades únicas.",
  },
  {
    icon: Sparkles,
    title: "Atención Personalizada",
    description:
      "Cada plan de tratamiento es diseñado específicamente para ti y tus objetivos.",
  },
];

const testimonials = [
  {
    text: "El acompañamiento de Kyo-Sai me ayudó a encontrar herramientas para manejar mi ansiedad. Me siento más segura y en control de mis emociones.",
    author: "M.R.",
    role: "Paciente",
  },
  {
    text: "Gracias a la terapia, pude entender mejor mis patrones emocionales y construir relaciones más saludables. Un espacio realmente seguro.",
    author: "J.L.",
    role: "Paciente",
  },
  {
    text: "Mi hijo adolescente ha mejorado mucho desde que empezó sus sesiones. La paciencia y empatía de Kyo-Sai han sido fundamentales.",
    author: "C.V.",
    role: "Madre de paciente",
  },
];

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const notionService = new NotionService();
    const posts = await notionService.getPublishedBlogPosts();
    return {
      props: {
        featuredPosts: posts.slice(0, 3),
      },
      revalidate: 60,
    };
  } catch {
    return {
      props: {
        featuredPosts: [],
      },
      revalidate: 60,
    };
  }
};

export default function Home({ featuredPosts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Psi. Kyo-Sai Nieves | Psicóloga Clínica en Panamá</title>
      </Head>

      <div>
        {/* Hero Section */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 px-4 py-2 rounded-full text-xs font-semibold mb-8">
                  <span className="w-2 h-2 bg-teal-500 rounded-full" />
                  Aceptando nuevos pacientes
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                  Tu bienestar emocional{" "}
                  <span className="text-teal-600 dark:text-teal-400">
                    es mi prioridad
                  </span>
                </h1>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-lg">
                  Acompañamiento psicológico personalizado para adolescentes y
                  adultos. Un espacio seguro donde explorar, sanar y crecer.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-3.5 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition shadow-lg shadow-teal-600/25"
                  >
                    Agenda tu cita →
                  </Link>
                  <Link
                    href="/about"
                    className="px-8 py-3.5 text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                  >
                    Conoce más
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      7+
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Años de experiencia
                    </p>
                  </div>
                  <div className="w-px h-10 bg-gray-200 dark:bg-gray-700" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      500+
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Pacientes atendidos
                    </p>
                  </div>
                  <div className="w-px h-10 bg-gray-200 dark:bg-gray-700" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      Online
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      & Presencial
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
                    priority
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 left-4 lg:-left-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-5 border border-gray-100 dark:border-gray-800 max-w-[260px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-teal-50 dark:bg-teal-950 rounded-full flex items-center justify-center">
                      <span className="text-sm">🌿</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">
                      El don de fluir
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    hacia una vida plena comienza con un primer paso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50/70 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-widest uppercase">
                Servicios
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                ¿Cómo puedo ayudarte?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
                Un enfoque integral y empático para tu bienestar emocional y
                mental.
              </p>
            </div>
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

        {/* Why Choose Me Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-widest uppercase">
                Mi enfoque
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                ¿Por qué elegirme?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
                Mi compromiso es brindarte un acompañamiento genuino y
                profesional en cada paso de tu proceso.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseMe.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 bg-teal-50 dark:bg-teal-950 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50/70 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-widest uppercase">
                Testimonios
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                Lo que dicen mis pacientes
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800"
                >
                  <Quote className="w-8 h-8 text-teal-200 dark:text-teal-900 mb-4" />
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-teal-50 dark:bg-teal-950 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                        {testimonial.author}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-widest uppercase">
                    Blog
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3">
                    Artículos recientes
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition"
                >
                  Ver todos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/20 hover:border-teal-100 dark:hover:border-teal-900 transition-all group"
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag.id}
                          className="px-3 py-1 bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 rounded-full text-xs font-medium"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        {new Date(post.date).toLocaleDateString("es-PA", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Leer más <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center sm:hidden">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400"
                >
                  Ver todos los artículos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Location Section */}
        <section className="py-20 bg-gray-50/70 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-widest uppercase">
                  Ubicación
                </span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                  Visítame en consulta
                </h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  Consultorios Royal Center, ubicados en el corazón de Marbella,
                  Ciudad de Panamá. Un espacio cómodo y accesible para tu
                  sesión.
                </p>
                <div className="flex items-start gap-3 mb-8">
                  <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      Consultorios Royal Center
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Marbella, Ciudad de Panamá, Panamá
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition shadow-lg shadow-teal-600/25"
                >
                  Agenda tu cita
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7!2d-79.5285!3d8.9824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f1dbe80363%3A0xaba9df7ed89d1c2!2sRoyal%20Center!5e0!3m2!1sen!2spa!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Consultorios Royal Center, Marbella"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  ¿Listo para dar el primer paso?
                </h2>
                <p className="text-teal-100 mb-10 max-w-lg mx-auto">
                  El bienestar emocional comienza con una conversación. Agenda tu
                  primera sesión hoy.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-white text-teal-700 text-sm font-semibold rounded-full hover:bg-teal-50 transition shadow-lg"
                >
                  Agenda tu cita ahora →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
