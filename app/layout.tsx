import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "GEO - Optimización de Experiencia Generativa | Visibilidad en IA",
  description:
    "Domina el futuro del descubrimiento digital con GEO. Optimización para ChatGPT, Perplexity y motores de IA. Aumenta tu visibilidad empresarial en respuestas generadas por inteligencia artificial.",
  keywords:
    "GEO, Generative Experience Optimization, SEO vs GEO, optimización IA, ChatGPT SEO, Perplexity optimization, visibilidad IA, marketing IA, búsqueda generativa",
  authors: [{ name: "GEO Strategy Pro" }],
  creator: "GEO Strategy Pro",
  publisher: "GEO Strategy Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title:
      "GEO - Optimización de Experiencia Generativa | Transforma tu Visibilidad Digital",
    description:
      "Descubre cómo GEO está revolucionando el marketing digital. Optimiza tu presencia en ChatGPT, Perplexity y motores de búsqueda IA. ROI comprobado del 40% en visibilidad.",
    siteName: "GEO Strategy Pro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GEO - Optimización de Experiencia Generativa",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO - El Futuro del Descubrimiento Digital está Aquí",
    description:
      "La búsqueda tradicional pierde 50% de mercado para 2028. Descubre cómo GEO posiciona tu marca en respuestas de IA.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon/favicon.svg",
    shortcut: "/favicon/favicon.svg",
    apple: "/favicon/favicon.svg",
    other: {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon/favicon.svg",
    },
  },
  category: "technology",
};

// Datos estructurados para GEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GEO Strategy Pro",
  description:
    "Expertos en Optimización de Experiencia Generativa (GEO) para visibilidad en motores de IA",
  logo: "/favicon/favicon.svg",
  sameAs: [
    "https://twitter.com/geostrategy",
    "https://linkedin.com/company/geostrategy",
  ],
  knowsAbout: [
    "Generative Experience Optimization",
    "GEO",
    "AI Search Optimization",
    "ChatGPT Optimization",
    "Perplexity Optimization",
    "Gemini Optimization",
    "Claude Optimization",
    "Bard Optimization",
  ],
  offers: {
    "@type": "Service",
    name: "GEO Consulting",
    description: "Optimización profesional para visibilidad en motores de IA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' className='dark'>
      <head>
        <link rel='icon' href='/favicon/favicon.svg' type='image/svg+xml' />
        <link rel='alternate icon' href='/favicon/favicon.svg' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
