import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { withBasePath } from "@/lib/basePath";
import { personal } from "@/lib/data/personal";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/** Public production URL (GitHub Pages project site). */
const siteUrl = "https://mannflutter.github.io/techportfolio";

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default: "Manthan Patel — Senior Mobile & ROS Engineer",
    template: "%s · Manthan Patel",
  },
  description:
    "Senior Mobile & ROS Engineer building production robotics, real-time, and enterprise systems in Flutter — including the Odigo advertising-robot platform, live in India and Dubai.",
  keywords: [
    "Flutter",
    "Senior Mobile & ROS Engineer",
    "ROS",
    "ROS 2",
    "Robotics",
    "Odigo",
    "Real-time systems",
    "Mobile development",
    "Manthan Patel",
  ],
  authors: [{ name: personal.fullName, url: siteUrl }],
  creator: personal.name,
  applicationName: "Manthan Patel Portfolio",
  icons: {
    icon: [
      { url: withBasePath("/favicon.ico"), sizes: "any" },
      {
        url: withBasePath("/favicon-16x16.png"),
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: withBasePath("/favicon-32x32.png"),
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: withBasePath("/android-chrome-192x192.png"),
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: withBasePath("/android-chrome-512x512.png"),
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: [{ url: withBasePath("/favicon.ico") }],
    apple: [
      {
        url: withBasePath("/apple-touch-icon.png"),
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: withBasePath("/site.webmanifest"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Manthan Patel",
    title: "Manthan Patel — Senior Mobile & ROS Engineer",
    description:
      "Robotics, real-time systems, and enterprise Flutter — including the Odigo advertising-robot platform live in India and Dubai.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manthan Patel — Senior Mobile & ROS Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manthan Patel — Senior Mobile & ROS Engineer",
    description:
      "Robotics, real-time systems, and enterprise Flutter — including the Odigo advertising-robot platform.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.fullName,
  alternateName: personal.name,
  jobTitle: personal.title,
  description: personal.heroSubhead,
  email: `mailto:${personal.email}`,
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  sameAs: [personal.githubUrl, personal.linkedinUrl],
  knowsAbout: [
    "Flutter",
    "Dart",
    "ROS",
    "ROS 2",
    "Real-time systems",
    "Robotics operator interfaces",
    "Mobile architecture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${inter.variable} ${jetbrains.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SmoothScrollProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
