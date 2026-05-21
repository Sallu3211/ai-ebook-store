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
    default: "AI Lead Generation Strategy — The Ultimate Ebook",
    template: "%s | LeadGenPro",
  },
  description:
    "Discover the proven AI-powered strategies that top marketers use to generate high-quality leads at scale. Download your copy and transform your business today.",
  keywords: [
    "AI lead generation",
    "lead generation ebook",
    "AI marketing strategies",
    "digital marketing",
    "AI tools for business",
    "lead gen automation",
  ],
  authors: [{ name: "LeadGenPro" }],
  creator: "LeadGenPro",
  publisher: "LeadGenPro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aiproducts.online",
    siteName: "LeadGenPro",
    title: "AI Lead Generation Strategy — The Ultimate Ebook",
    description:
      "Discover the proven AI-powered strategies that top marketers use to generate high-quality leads at scale.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Lead Generation Strategy Ebook",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lead Generation Strategy — The Ultimate Ebook",
    description:
      "Discover the proven AI-powered strategies that top marketers use to generate high-quality leads at scale.",
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
