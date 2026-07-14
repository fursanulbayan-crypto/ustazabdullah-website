import type { Metadata } from "next";
import { Fraunces, Public_Sans, Amiri, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { site } from "@/lib/data";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const body = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const arabic = Amiri({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "Islamic scholar Lagos", "Chief Imam Nigeria", "Islamic Studies educator",
    "Arabic language teacher", "Al-Mafaazat Training Centre", "Islamic education research",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  alternates: { canonical: site.url },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: ["Chief Imam", "Islamic Studies Educator", "Educational Researcher"],
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  sameAs: [
    "https://linkedin.com/in/abdulahi-olayinka-abubakar-441a73322",
    "https://github.com/fursanulbayan-crypto",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} ${arabic.variable} ${mono.variable}`}>
        <ThemeProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-emerald-900 focus:px-4 focus:py-2 focus:text-beige-100">
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
