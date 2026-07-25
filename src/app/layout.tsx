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
    default: "Manthan Patel — Senior Flutter Engineer",
    template: "%s · Manthan Patel",
  },
  description:
    "Senior Flutter Engineer specializing in robotics, real-time systems, and enterprise mobile. Production systems including the Odigo advertising-robot platform.",
  keywords: [
    "Flutter",
    "Senior Flutter Engineer",
    "Robotics",
    "ROS",
    "Odigo",
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
    title: "Manthan Patel — Senior Flutter Engineer",
    description:
      "Robotics, real-time systems, and enterprise Flutter — including the Odigo advertising-robot platform live in India and Dubai.",
    images: [
      {
        url: personal.profileImage,
        width: 480,
        height: 600,
        alt: `${personal.name} — profile photo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manthan Patel — Senior Flutter Engineer",
    description:
      "Robotics, real-time systems, and enterprise Flutter — including the Odigo advertising-robot platform.",
    images: [personal.profileImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
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
      className={`${interTight.variable} ${inter.variable} ${jetbrains.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-text-primary">
        <SmoothScrollProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
