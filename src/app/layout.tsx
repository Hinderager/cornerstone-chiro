import type { Metadata } from "next";
import { Montserrat, Merriweather, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chiropractor in Minot | CornerStone Chiropractic",
  description: "CornerStone Chiropractic offers the highest standard of patient care in Minot, ND. Since 2000, our team of dedicated professionals has been caring for patients with integrity, devotion, and compassion.",
  keywords: "chiropractor, chiropractic, Minot, ND, back pain, neck pain, wellness",
  openGraph: {
    title: "Chiropractor in Minot | CornerStone Chiropractic",
    description: "Achieve optimal health with premium chiropractic care at CornerStone Chiropractic in Minot, ND.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://portal.sked.life" />
      </head>
      <body
        className={`${montserrat.variable} ${merriweather.variable} ${roboto.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
