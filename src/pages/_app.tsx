import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import BookingButton from "@/components/shared/BookingButton";
import options from "@/utils/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const SITE_URL = options.APP.SEO.DEFAULT_URL;
const GA_ID = options.GOOGLE.ANALYTICS.TRACKING_ID;

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Psi. Kyo-Sai Nieves — Psicóloga Clínica",
  description:
    "Psicóloga clínica en Ciudad de Panamá. Psicoterapia online y presencial para adolescentes y adultos. Terapia de ansiedad, autoestima, relaciones y bienestar emocional.",
  url: SITE_URL,
  telephone: "+50764333779",
  email: "psi.kyosainieves@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Consultorios Royal Center, Marbella",
    addressLocality: "Ciudad de Panamá",
    addressRegion: "Panamá",
    addressCountry: "PA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "8.9824",
    longitude: "-79.5285",
  },
  openingHours: "Mo-Fr 08:00-17:00",
  priceRange: "$$",
  image: `${SITE_URL}/images/KyoSaiNieves.jpg`,
  founder: {
    "@type": "Person",
    name: "Kyo-Sai Nieves",
    jobTitle: "Psicóloga Clínica",
    url: `${SITE_URL}/sobre-mi`,
  },
  areaServed: {
    "@type": "City",
    name: "Ciudad de Panamá",
  },
  serviceType: [
    "Psicoterapia Individual",
    "Terapia Online",
    "Evaluaciones Psicológicas",
    "Terapia para Adolescentes",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Psicoterapia",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sesión de Psicoterapia Individual",
          description: "Sesión de 45-50 minutos, online o presencial",
        },
        price: "65.00",
        priceCurrency: "USD",
      },
    ],
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
          content="Psicóloga en Panamá — Psi. Kyo-Sai Nieves. Psicoterapia online y presencial en Ciudad de Panamá. Terapia de ansiedad, autoestima, relaciones y bienestar emocional para adolescentes y adultos."
        />
        <meta
          property="og:title"
          content="Psi. Kyo-Sai Nieves | Psicóloga Clínica en Panamá"
        />
        <meta
          property="og:description"
          content="Psicoterapia online y presencial. Acompañamiento emocional personalizado para adolescentes y adultos."
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
        <meta name="theme-color" content="#cb536c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>
      <div
        className={`${inter.variable} ${playfairDisplay.variable} font-sans min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
        <Toaster />
        <BookingButton />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}
