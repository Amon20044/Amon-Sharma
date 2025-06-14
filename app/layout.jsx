import { Montserrat } from "next/font/google";
import './globals.css';
import localFont from 'next/font/local';

const brogi = localFont({
  src: [
    { path: '../public/fonts/BrogiFREE.woff2', weight: 'normal', style: 'normal' },
    { path: '../public/fonts/BrogiFREE.woff', weight: 'normal', style: 'normal' },
    { path: '../public/fonts/BrogiFREE.ttf', weight: 'normal', style: 'normal' },
  ],
  variable: '--brogi',
  display: 'swap',
});

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Amon Sharma - Full Stack Developer & UI/UX Designer",
    template: "%s | Amon Sharma Portfolio"
  },
  description: "Amon Sharma is a passionate Full Stack Developer and UI/UX Designer specializing in modern web technologies. Explore my portfolio featuring innovative projects in React, Next.js, and creative design solutions.",
  keywords: [
    "Amon Sharma",
    "Full Stack Developer",
    "UI/UX Designer",
    "React Developer",
    "Next.js",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Web Design",
    "Mobile App Development",
    "Graphic Design"
  ],
  authors: [{ name: "Amon Sharma" }],
  creator: "Amon Sharma",
  publisher: "Amon Sharma",
  metadataBase: new URL(process.env.SITE_URL || 'https://amon-sharma.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.SITE_URL || 'https://amon-sharma.vercel.app',
    siteName: 'Amon Sharma Portfolio',
    title: 'Amon Sharma - Full Stack Developer & UI/UX Designer',
    description: 'Amon Sharma is a passionate Full Stack Developer and UI/UX Designer specializing in modern web technologies. Explore my portfolio featuring innovative projects in React, Next.js, and creative design solutions.',
    images: [
      {
        url: '/assets/amon.jpeg',
        width: 1200,
        height: 630,
        alt: 'Amon Sharma - Full Stack Developer & UI/UX Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amon Sharma - Full Stack Developer & UI/UX Designer',
    description: 'Amon Sharma is a passionate Full Stack Developer and UI/UX Designer specializing in modern web technologies.',
    images: ['/assets/amon.jpeg'],
    creator: '@amon_sharma', // Replace with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION, // Add this to your environment variables
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Amon Sharma',
    jobTitle: 'Full Stack Developer & UI/UX Designer',
    description: 'Passionate Full Stack Developer and UI/UX Designer specializing in modern web technologies.',
    url: process.env.SITE_URL || 'https://amon-sharma.vercel.app',
    image: '/assets/amon.jpeg',
    sameAs: [
      // Add your actual social media links here
      'https://linkedin.com/in/amon-sharma',
      'https://github.com/amon-sharma',
      'https://twitter.com/amon_sharma',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'UI/UX Design',
      'Web Development',
      'Frontend Development',
      'Backend Development',
      'Graphic Design'
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Your University/College', // Replace with actual education
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN', // Adjust based on your location
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={process.env.SITE_URL || 'https://amon-sharma.vercel.app'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/assets/amon.jpeg" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}