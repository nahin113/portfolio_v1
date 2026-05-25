import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Nahin Ahmed — Full-Stack Developer',
  description: 'CSE student at BUBT building real-world MERN stack applications.',
  openGraph: {
    title: 'Nahin Ahmed — Full-Stack Developer',
    description: 'CSE student at BUBT building real-world MERN stack applications.',
    url: 'https://nahinahmed.vercel.app',
    siteName: 'Nahin Ahmed Portfolio',
    images: [
      {
        url: 'https://nahinahmed.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nahin Ahmed — Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nahin Ahmed — Full-Stack Developer',
    description: 'CSE student at BUBT building real-world MERN stack applications.',
  },
};

import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light bg-white" style={{ colorScheme: 'light' }}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
        />
      </head>
      <body className={`${inter.variable} font-body-md text-body-md antialiased`}>
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
