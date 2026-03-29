const options = {
  APP: {
    SEO: {
      DEFAULT_TITLE: "Psi. Kyo-Sai Nieves | Psicóloga Clínica",
      DEFAULT_DESCRIPTION:
        "Acompañamiento emocional y psicológico personalizado para adolescentes y adultos. Psicóloga Clínica en Panamá.",
      DEFAULT_URL:
        process.env.NEXT_PUBLIC_SITE_URL || "https://kyo-sai-blog.netlify.app",
    },
  },
  WHATSAPP: {
    NUMBER: "50764333779",
    DEFAULT_MESSAGE:
      "Hola, me gustaría agendar una cita con Psi. Kyo-Sai Nieves.",
  },
  NOTION: {
    ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN,
    BLOG_DATABASE_ID: process.env.NOTION_BLOG_DATABASE_ID,
  },
  EMAILJS: {
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
  },
  GOOGLE: {
    ANALYTICS: {
      TRACKING_ID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    },
  },
};

export default options;
