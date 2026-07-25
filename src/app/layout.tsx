import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
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

const siteUrl = "https://manthanpatel.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
        url: personal.profileImagePath,
        width: 480,
        height: 600,
        alt: `${personal.name} — profile photo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manthan Patel — Senior Mobile & ROS Engineer",
    description:
      "Robotics, real-time systems, and enterprise Flutter — including the Odigo advertising-robot platform.",
    images: [personal.profileImagePath],
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
  image: `${siteUrl}${personal.profileImagePath}`,
  address: {
    "@type": "PostalAddress",
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
