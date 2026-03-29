import {
  User,
  Monitor,
  Building2,
  ClipboardCheck,
  Heart,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  forWhom: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    icon: User,
    title: "Psicoterapia Individual",
    shortDescription:
      "Sesiones personalizadas para explorar, sanar y crecer emocionalmente.",
    longDescription:
      "Un espacio confidencial y seguro donde trabajamos juntos en tus objetivos terapéuticos. Utilizando un enfoque integrativo, combino las mejores técnicas de diferentes corrientes psicológicas para adaptarme a tus necesidades únicas.",
    features: [
      "Sesiones de 45-50 minutos",
      "Enfoque integrativo personalizado",
      "Plan de tratamiento a tu medida",
      "Seguimiento continuo de tu progreso",
    ],
    forWhom: "Adultos y adolescentes que buscan un acompañamiento profundo y personalizado.",
  },
  {
    icon: Monitor,
    title: "Consulta Online",
    shortDescription:
      "Accede a sesiones terapéuticas desde la comodidad de tu hogar.",
    longDescription:
      "La terapia online te permite recibir atención psicológica de calidad sin importar tu ubicación. Las sesiones se realizan por videollamada en un entorno seguro y confidencial, con la misma efectividad que las sesiones presenciales.",
    features: [
      "Sesiones por videollamada segura",
      "Flexibilidad de horarios",
      "Sin necesidad de desplazamiento",
      "Ideal para personas fuera de Panamá",
    ],
    forWhom: "Personas que prefieren la comodidad de sus espacios o que se encuentran fuera de Ciudad de Panamá.",
  },
  {
    icon: Building2,
    title: "Consulta Presencial",
    shortDescription:
      "En un espacio seguro en Consultorios Royal Center, Marbella, Panamá.",
    longDescription:
      "Las consultas presenciales se realizan en los Consultorios Royal Center en Marbella, Ciudad de Panamá. Un espacio diseñado para tu comodidad, privacidad y bienestar, donde podrás sentirte en confianza desde el primer momento.",
    features: [
      "Consultorio privado y acogedor",
      "Ubicación céntrica y accesible",
      "Ambiente diseñado para tu bienestar",
      "Estacionamiento disponible",
    ],
    forWhom: "Personas que valoran la interacción presencial y residen en el área metropolitana de Panamá.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluaciones Psicológicas",
    shortDescription:
      "Diagnósticos especializados para identificar necesidades en salud mental.",
    longDescription:
      "Realizo evaluaciones psicológicas completas utilizando herramientas validadas y protocolos estandarizados. Estas evaluaciones permiten obtener un panorama claro de tu estado emocional y cognitivo, facilitando un plan de intervención más efectivo.",
    features: [
      "Pruebas psicológicas estandarizadas",
      "Informes detallados de resultados",
      "Recomendaciones de tratamiento",
      "Seguimiento post-evaluación",
    ],
    forWhom: "Personas que necesitan un diagnóstico claro o documentación para procesos institucionales o personales.",
  },
  {
    icon: Heart,
    title: "Orientación y Apoyo Emocional",
    shortDescription:
      "Asesoramiento para gestionar crisis y promover el bienestar emocional.",
    longDescription:
      "Sesiones de orientación enfocadas en brindarte herramientas prácticas para manejar situaciones difíciles. Ya sea que enfrentes una crisis, una transición de vida o simplemente necesites alguien que te escuche, estoy aquí para acompañarte.",
    features: [
      "Intervención en crisis",
      "Herramientas de manejo emocional",
      "Estrategias de afrontamiento",
      "Apoyo en transiciones de vida",
    ],
    forWhom: "Personas que atraviesan momentos difíciles y necesitan orientación profesional y empática.",
  },
  {
    icon: Users,
    title: "Terapia para Adolescentes",
    shortDescription:
      "Enfoque especializado para jóvenes en su desarrollo emocional.",
    longDescription:
      "Un espacio pensado especialmente para adolescentes, donde pueden expresarse libremente y trabajar los desafíos propios de esta etapa. Utilizo técnicas adaptadas a su edad y contexto, facilitando su desarrollo emocional y social de forma saludable.",
    features: [
      "Enfoque adaptado a la edad",
      "Comunicación con padres (con consentimiento)",
      "Técnicas creativas y dinámicas",
      "Apoyo en desarrollo de identidad",
    ],
    forWhom: "Adolescentes de 12 a 17 años que enfrentan retos emocionales, sociales o académicos.",
  },
];
