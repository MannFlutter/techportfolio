import { withBasePath } from "@/lib/basePath";

export const education = {
  institution: "Gujarat Technological University",
  degree: "Bachelor of Computer Application",
  duration: "2014 – 2017",
  cgpa: "6.5 / 10.00",
} as const;

export const personal = {
  name: "Manthan Patel",
  fullName: "Manthan H Patel",
  title: "Senior Mobile & ROS Engineer",
  email: "mannpatel270@gmail.com",
  phone: "+91 8401187756",
  location: "Gujarat, India",
  availability:
    "Senior Flutter Engineer • Mobile Architecture • Product Engineering",
  experienceLabel: "5+ years",
  projectsDeliveredLabel: "25+",
  githubUrl: "https://github.com/MannFlutter",
  linkedinUrl: "https://www.linkedin.com/in/manthan-patel-953639212",
  /** Public asset — must include basePath (raw <a> / unoptimized Image). */
  resumePath: withBasePath("/resume/Manthan-Resume.pdf"),
  /** Public asset — must include basePath (unoptimized next/image). */
  profileImage: withBasePath("/images/profile.jpg"),
  /** Unprefixed — for absolute metadata URLs resolved against metadataBase. */
  profileImagePath: "/images/profile.jpg",
  heroEyebrow:
    "Gujarat, India · Senior Flutter Engineer • Mobile Architecture • Product Engineering",
  heroHeadline:
    "Senior Mobile & ROS Engineer — building production robotics, real-time, and enterprise systems in Flutter.",
  heroSubhead:
    "5+ years shipping production Flutter systems — from enterprise and fintech to the Odigo advertising-robot platform, live across malls in India and Dubai.",
  aboutHeading: "Software that talks to hardware.",
  about: [
    "I build the software layer where mobile apps meet hardware and real-time systems — ROS-driven robots, connected devices, and low-latency operator interfaces that run in production, not demos.",
    "I design clean, modular Flutter architectures with offline-first strategies and performance as a first-class concern — profiling, render optimization, and reliability under real-world network conditions. I use AI coding tools and structured prompting to move faster without cutting corners on quality.",
    "I enjoy taking ownership beyond writing code—from mentoring engineers and reviewing architecture to ensuring every release is stable, maintainable, and ready for real-world production environments.",
  ],
} as const;

export type HeroStat = {
  label: string;
  value: string;
  /** Carries the signal-pulse motif — only the genuinely "live" stat. */
  live?: boolean;
};

export const heroStats: HeroStat[] = [
  { label: "experience", value: "5+ yrs" },
  { label: "shipped apps", value: "25+" },
  { label: "live robot deployments", value: "100+", live: true },
  { label: "countries", value: "2" },
];
