export type TimelineEntry = {
  title: string;
  subtitle: string;
  detail?: string;
  bullets?: string[];
};

export const education: TimelineEntry[] = [
  {
    title: "Licenciatura en Psicología",
    subtitle: "Universidad Latinoamericana de Comercio Exterior (2012 – 2017)",
    detail:
      'Trabajo de grado: "La aplicación de la arteterapia para mejorar la autoestima en jóvenes en riesgo social."',
  },
  {
    title: "Psicología Clínica con Especialización en Psicoterapia Integrativa",
    subtitle: "Universidad Especializada de Las Américas (2018 – 2022)",
  },
  {
    title: "Psicoterapia Psicodinámica en Niños y Adolescentes",
    subtitle:
      "Instituto Internacional de Psicoterapia (Mar. 2022 – Oct. 2022)",
  },
];

export const diplomados: string[] = [
  "Fundamentos de Psicoterapia Psicodinámica (2020 – 2021)",
  "Psicología Clínica (2019)",
  "Psicología en la Infancia y Adolescencia (2019)",
  "Pruebas Psicológicas en su Campo de Acción (2018)",
  "Marketing Digital 2.0 y Community Manager (2020 – 2021)",
];

export const experience: TimelineEntry[] = [
  {
    title: "Psicóloga Independiente",
    subtitle: "2018 – Actualidad",
    bullets: [
      "Psicoterapia individual para adolescentes y adultos",
      "Evaluaciones psicológicas y elaboración de informes",
      "Facilitación de grupos de apoyo",
    ],
  },
  {
    title: "Coordinadora de Programas Juveniles",
    subtitle:
      "Secretaría Nacional de Niñez, Adolescencia y Familia (2023 – Actualidad)",
    bullets: [
      "Gestión y planificación de actividades para NNA",
      "Intervención en crisis y orientación psicológica",
    ],
  },
  {
    title: "Directora de Proyecto",
    subtitle: "Red Apoyo Psicológico Panamá (2020 – 2022)",
    detail:
      "Supervisión de protocolos, asignación de casos y manejo de redes sociales",
  },
  {
    title: "Psicóloga",
    subtitle: "Novus Medical Center (2019 – 2021)",
    detail:
      "Evaluaciones psicológicas, orientación emocional y psicoterapia",
  },
];
