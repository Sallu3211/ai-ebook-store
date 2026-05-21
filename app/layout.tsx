import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiproducts.online"),
  title: {
    default: "TrendingAI — Premium AI Tools, Ebooks & Templates",
    template: "%s | TrendingAI",
  },
  description:
    "Your AI unfair advantage. Browse premium AI tools, ebooks, and templates built by practitioners for real results. Instant digital download. 30-day guarantee.",
  keywords: [
    "AI products",
    "AI ebooks",
    "AI templates",
    "AI tools",
    "AI marketing",
    "digital downloads",
    "AI prompt templates",
    "trending AI",
  ],
  authors: [{ name: "TrendingAI" }],
  creator: "TrendingAI",
  publisher: "TrendingAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aiproducts.online",
    siteName: "TrendingAI",
    title: "TrendingAI — Premium AI Tools, Ebooks & Templates",
    description:
      "Your AI unfair advantage. Premium AI tools, ebooks, and templates built for real results. Instant download.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TrendingAI — Premium AI Products Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrendingAI — Premium AI Tools, Ebooks & Templates",
    description:
      "Your AI unfair advantage. Premium AI tools, ebooks, and templates built for real results.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
