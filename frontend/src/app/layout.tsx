import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Great_Vibes } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import '../styles/globals.css';

/**
 * Tipografia da marca:
 * - Display: Luisha (não disponível no Google Fonts).
 *   Como fallback usamos **Great Vibes** — caligráfica com feel similar.
 *   Para usar Luisha de fato, adicione o arquivo .woff2 em frontend/public/fonts/
 *   e troque por next/font/local apontando para ele.
 * - Corpo: Inter (Google Fonts).
 */
const fontDisplay = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display-fallback',
  display: 'swap',
});

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body-fallback',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ateliê Encantarte — Bordados Artesanais Únicos',
    template: '%s | Ateliê Encantarte',
  },
  description:
    'Bordados artesanais únicos: roupas personalizadas, quadros decorativos e presentes feitos à mão com delicadeza, arte e emoção.',
  openGraph: {
    title: 'Ateliê Encantarte — Bordados Artesanais Únicos',
    description:
      'Bordados artesanais únicos: roupas personalizadas, quadros decorativos e presentes feitos à mão com delicadeza, arte e emoção.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Ateliê Encantarte',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ateliê Encantarte',
    description: 'Bordados artesanais únicos, feitos à mão.',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ateliê Encantarte',
  description: 'Marca de bordados artesanais — roupas, quadros e presentes personalizados.',
  url: 'https://atelieencantarte.com.br',
  sameAs: ['https://instagram.com/atelieencantartebordados'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton variant="floating" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
