import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import options from "@/utils/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = options.APP.SEO.DEFAULT_URL;
const GA_ID = options.GOOGLE.ANALYTICS.TRACKING_ID;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Psi. Kyo-Sai Nieves — Psicóloga Clínica",
  description:
    "Acompañamiento emocional y psicológico personalizado para adolescentes y adultos en Panamá.",
  url: SITE_URL,
  telephone: "+50764333779",
  email: "psi.kyosainieves@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Consultorios Royal Center, Marbella",
    addressLocality: "Ciudad de Panamá",
    addressCountry: "PA",
  },
  openingHours: "Mo-Fr 08:00-17:00",
  priceRange: "$$",
  image: `${SITE_URL}/images/KyoSaiNieves.jpg`,
  founder: {
    "@type": "Person",
    name: "Kyo-Sai Nieves",
    jobTitle: "Psicóloga Clínica",
    url: `${SITE_URL}/about`,
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}${router.asPath === "/" ? "" : router.asPath}`;

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {/* Google Analytics */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Psi. Kyo-Sai Nieves — Psicóloga Clínica. Acompañamiento emocional y psicológico personalizado para adolescentes y adultos en Panamá."
        />
        <meta
          property="og:title"
          content="Psi. Kyo-Sai Nieves | Psicóloga Clínica"
        />
        <meta
          property="og:description"
          content="Acompañamiento emocional y psicológico personalizado para adolescentes y adultos."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:image"
          content={`${SITE_URL}/images/LogoHero.png`}
        />
        <meta property="og:locale" content="es_PA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d9488" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>
      <div
        className={`${inter.variable} font-sans min-h-screen flex flex-col bg-white dark:bg-gray-950`}
      >
        <Navbar />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
        <Toaster />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}
