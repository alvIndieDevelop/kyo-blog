import Head from "next/head";
import { GetStaticProps } from "next";
import {
  HeroSection,
  ServicesSection,
  WhyChooseSection,
  TestimonialsSection,
  FeaturedPostsSection,
  LocationSection,
} from "@/features/home";
import { NotionService } from "@/features/blog";
import type { BlogPost } from "@/features/blog";
import CTASection from "@/components/shared/CTASection";

interface HomeProps {
  featuredPosts: BlogPost[];
}

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
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <FeaturedPostsSection posts={featuredPosts} />
        <LocationSection />
        <CTASection
          title="¿Listo para dar el primer paso?"
          description="El bienestar emocional comienza con una conversación. Agenda tu primera sesión hoy."
          buttonText="Agenda tu cita ahora →"
          buttonHref="/contact"
        />
      </div>
    </>
  );
}
