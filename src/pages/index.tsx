import Head from "next/head";
import { GetStaticProps } from "next";
import {
  HeroSection,
  EmotionalBlock,
  AboutSummary,
  ProblemsSection,
  ApproachSection,
  ServicesSection,
  TestimonialsSection,
  FeaturedPostsSection,
  LocationSection,
} from "@/features/home";
import { NotionService } from "@/features/blog";
import type { BlogPost } from "@/features/blog";
import CTASection from "@/components/shared/CTASection";
import FadeInSection from "@/components/ui/FadeInSection";

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
        <title>
          Psi. Kyo-Sai Nieves | Psicóloga Clínica en Ciudad de Panamá
        </title>
        <meta
          name="description"
          content="Psicóloga clínica en Ciudad de Panamá. Psicoterapia online y presencial para adolescentes y adultos. Terapia de ansiedad, autoestima, relaciones y bienestar emocional."
        />
      </Head>

      <div>
        <HeroSection />
        <FadeInSection>
          <EmotionalBlock />
        </FadeInSection>
        <FadeInSection>
          <AboutSummary />
        </FadeInSection>
        <FadeInSection>
          <ProblemsSection />
        </FadeInSection>
        <FadeInSection>
          <ApproachSection />
        </FadeInSection>
        <FadeInSection>
          <ServicesSection />
        </FadeInSection>
        <FadeInSection>
          <TestimonialsSection />
        </FadeInSection>
        <FadeInSection>
          <FeaturedPostsSection posts={featuredPosts} />
        </FadeInSection>
        <FadeInSection>
          <LocationSection />
        </FadeInSection>
        <FadeInSection>
          <CTASection
            title="¿Lista para dar el primer paso?"
            description="El bienestar emocional comienza con una conversación. Agenda tu primera sesión hoy."
            buttonText="Agenda tu sesión ahora →"
            buttonHref="/agenda"
          />
        </FadeInSection>
      </div>
    </>
  );
}
