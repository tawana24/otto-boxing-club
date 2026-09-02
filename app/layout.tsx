import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { club, siteUrl } from "@/lib/config";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${club.name} — ${club.tagline}`,
  description:
    "Zimbabwe's boxing nucleus at Gate 3, Borrowdale Racecourse, Harare. Home to ABU, WBF and national champions. Development pipeline, professional training & management, and on-demand fitness & wellness.",
  alternates: {
    canonical: "/",
  },
  verification: {
    // Google Search Console — HTML-tag (meta) verification method.
    google: "zLLJCwWk_KqvibBRhbhfqhFhcqGGyJL3IHqulaHpTkc",
  },
  openGraph: {
    title: `${club.name} — ${club.tagline}`,
    description:
      "Zimbabwe's most decorated boxing stable. ABU, WBF and national champions under one roof.",
    images: ["/team.jpg"],
    locale: "en_ZW",
    type: "website",
  },
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${inter.variable}`}>
      <body className="bg-black font-sans text-bone antialiased">
        {children}
      </body>
    </html>
  );
}
