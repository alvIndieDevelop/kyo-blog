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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
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

export const whyChooseMe: ServiceItem[] = [
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

export type TestimonialItem = {
  text: string;
  author: string;
  role: string;
};

export const testimonials: TestimonialItem[] = [
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
