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
    default: "Amon Sharma - Full-Stack Engineer | Software Developer | AI/ML Enthusiast",
    template: "%s | Amon Sharma Portfolio"
  },
  description: "Amon Sharma is a Full-Stack Engineer from IIIT Vadodara specializing in scalable cloud architectures, AI/ML integration, and modern web technologies. Experience in building event-reactive systems, 3D web experiences, real-time applications with Next.js, Docker, PostgreSQL, and Gemini AI.",
  keywords: [
    "Amon Sharma",
    "Full Stack Developer",
    "Full-Stack Engineer",
    "Software Engineer",
    "IIIT Vadodara",
    "React Developer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "C++",
    "PostgreSQL",
    "Supabase",
    "MongoDB",
    "Docker",
    "Nginx",
    "Google Cloud",
    "GitHub Actions",
    "FastAPI",
    "Express.js",
    "Node.js",
    "Socket.IO",
    "Langchain",
    "Gemini AI",
    "Vercel AI SDK",
    "N8N",
    "Three.js",
    "WebGL",
    "React Native",
    "Redux",
    "React Query",
    "GSAP",
    "Event-Driven Architecture",
    "CQRS",
    "Microservices",
    "Cloud Architecture",
    "AI/ML Integration",
    "Real-time Systems",
    "3D Web Development",
    "Mobile App Development"
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
    title: 'Amon Sharma - Full-Stack Engineer | Software Developer | AI/ML Enthusiast',
    description: 'Amon Sharma is a Full-Stack Engineer from IIIT Vadodara specializing in scalable cloud architectures, AI/ML integration, and modern web technologies. Experience in building event-reactive systems, 3D web experiences, and real-time applications.',
    images: [
      {
        url: '/assets/amon.png',
        width: 1200,
        height: 630,
        alt: 'Amon Sharma - Full-Stack Engineer | Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amon Sharma - Full-Stack Engineer | Software Developer',
    description: 'Full-Stack Engineer from IIIT Vadodara specializing in cloud architectures, AI/ML integration, and scalable web applications.',
    images: ['/assets/amon.png'],
    creator: '@amon_sharma',
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
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Amon Sharma',
    jobTitle: 'Full-Stack Engineer & Software Developer',
    description: 'Full-Stack Engineer from IIIT Vadodara specializing in scalable cloud architectures, AI/ML integration, event-reactive systems, and modern web technologies.',
    url: process.env.SITE_URL || 'https://amon-sharma.vercel.app',
    image: '/assets/amon.png',
    sameAs: [
      'https://linkedin.com/in/amonsharma007',
      'https://github.com/Amon20044',
    ],
    knowsAbout: [
      'Next.js',
      'React.js',
      'TypeScript',
      'JavaScript',
      'Python',
      'C++',
      'PostgreSQL',
      'Supabase',
      'MongoDB',
      'Docker',
      'Nginx',
      'Google Cloud',
      'GitHub Actions',
      'FastAPI',
      'Express.js',
      'Node.js',
      'Socket.IO',
      'Langchain',
      'Gemini AI',
      'Vercel AI SDK',
      'N8N',
      'Three.js',
      'WebGL',
      'React Native',
      'Redux',
      'React Query',
      'GSAP',
      'Event-Driven Architecture',
      'CQRS',
      'Microservices',
      'Cloud Architecture',
      'AI/ML Integration',
      'Real-time Systems'
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Indian Institute of Information Technology Vadodara',
      alternateName: 'IIIT Vadodara',
      url: 'https://iiitvadodara.ac.in',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
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