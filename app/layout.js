import { Montserrat } from "next/font/google";
import './globals.css';
import localFont from 'next/font/local';

const brogi = localFont({
  src: [
    { path: './fonts/BrogiFREE.woff2', weight: 'normal', style: 'normal' },
    { path: './fonts/BrogiFREE.woff', weight: 'normal', style: 'normal' },
    { path: './fonts/BrogiFREE.ttf', weight: 'normal', style: 'normal' },
  ],
  variable: '--brogi',
  display: 'swap',
});

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Amon Sharma Portfolio",
  description: "Amon Sharma Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
