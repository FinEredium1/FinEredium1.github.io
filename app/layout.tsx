import type { Metadata } from 'next';
import { Manrope, Space_Mono } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });
const spaceMono = Space_Mono({ variable: '--font-space-mono', weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://fineredium1.github.io'),
  title: 'Fardin Ahmed - Software Engineer & AI Systems Builder',
  description: 'Portfolio of Fardin Ahmed, a Georgia Tech computer science student building reliable AI agents, systems software, and secure products.',
  openGraph: {
    title: 'Fardin Ahmed - Software Engineer & AI Systems Builder',
    description: 'AI systems, software engineering, and machine learning projects built for the real world.',
    url: 'https://fineredium1.github.io',
    siteName: 'Fardin Ahmed',
    images: [{ url: '/og.png', width: 1536, height: 864, alt: 'Fardin Ahmed - AI Systems, Software Engineering, Machine Learning' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fardin Ahmed - Software Engineer & AI Systems Builder',
    description: 'AI systems, software engineering, and machine learning projects built for the real world.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceMono.variable}`}>{children}</body>
    </html>
  );
}
