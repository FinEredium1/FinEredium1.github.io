import type { Metadata } from 'next';
import './globals.css';

const siteTitle = 'Fardin Ahmed | Software & AI Engineer';
const siteDescription = 'Computer Science student at Georgia Tech with Agentic AI, network automation, C++ backend, and full-stack engineering experience at Cisco and SAIC.';

export const metadata: Metadata = {
  metadataBase: new URL('https://fineredium1.github.io'),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: [{ url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://fineredium1.github.io',
    siteName: 'Fardin Ahmed',
    images: [{ url: '/og.png', width: 1536, height: 864, alt: 'Fardin Ahmed - AI Systems, Software Engineering, Machine Learning' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
