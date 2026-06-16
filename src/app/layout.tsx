import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const siteUrl = "https://www.lg3digital.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LG3 Digital — Web, Social & AI Services for Small Business",
    template: "%s | LG3 Digital",
  },
  description:
    "LG3 Digital helps small businesses in Wooster, Ohio manage their website, grow their social media presence, build custom AI-powered tools, and train their team to use AI — without the agency overhead.",
  keywords: [
    "small business website management Wooster Ohio",
    "social media management Wooster Ohio",
    "AI tools for small business",
    "web design Wooster Ohio",
    "digital marketing Wayne County Ohio",
    "AI training small business Ohio",
    "website management Northeast Ohio",
    "Claude Code",
  ],
  authors: [{ name: "LG3 Digital", url: siteUrl }],
  creator: "LG3 Digital",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "LG3 Digital",
    title: "LG3 Digital — Web, Social & AI Services for Small Business",
    description:
      "Website management, social media, custom AI tools, and AI training for small businesses in Wooster, Ohio — without the agency overhead.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LG3 Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LG3 Digital — Web, Social & AI Services for Small Business",
    description:
      "Website management, social media, custom AI tools, and AI training for small businesses — without the agency overhead.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
