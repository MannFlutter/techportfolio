import { withBasePath } from "@/lib/basePath";
import { odigoScaleSummary } from "./deployments";
import { experienceTotals } from "./experience";

export const education = {
  degree: "BCA",
  // TODO(manthan): Confirm the institution exactly as printed on the degree certificate (Gujarat University or Gujarat Technological University).
  duration: "2014–2017",
  languages: [
    { name: "English", level: "professional" },
    { name: "Hindi", level: "native" },
    { name: "Gujarati", level: "native" },
  ],
} as const;

export const personal = {
  name: "Manthan Patel",
  fullName: "Manthan H Patel",
  title: "Senior Mobile & Robotics Software Engineer",
  email: "mannpatel270@gmail.com",
  phone: "+91 8401187756",
  location: "Ahmedabad, Gujarat, India",
  experienceLabel: experienceTotals.yearsLabel,
  projectsDeliveredLabel: experienceTotals.shippedAppsLabel,
  githubUrl: "https://github.com/MannFlutter",
  linkedinUrl: "https://www.linkedin.com/in/manthan-patel-953639212",
  /** Public asset — must include basePath (raw <a> / unoptimized Image). */
  resumePath: withBasePath("/resume/Manthan-Resume.pdf"),
  /** Public asset — must include basePath (unoptimized next/image). */
  profileImage: withBasePath("/images/profile.jpg"),
  /** Unprefixed — for absolute metadata URLs resolved against metadataBase. */
  profileImagePath: "/images/profile.jpg",
  heroEyebrow: "Flutter · ROS · Real-Time Systems · Robot Operator Interfaces",
  heroSubhead: `${experienceTotals.yearsLabel} building production Flutter systems across robotics, enterprise, and fintech, including the Odigo platform with ${odigoScaleSummary}.`,
  aboutHeading: "Software that talks to hardware.",
  about: [
    "I build the software layer where mobile apps meet hardware and real-time systems — ROS-driven robots, connected devices, and low-latency operator interfaces that run in production, not demos.",
    "I design clean, modular Flutter architectures with offline-first strategies and performance as a first-class concern — profiling, render optimization, and reliability under real-world network conditions. I use AI coding tools and structured prompting to move faster without cutting corners on quality. I also work on 3D avatars and vehicle models, including a real-time 3D doctor integrated into the Sccore Diagnostic Hub patient interface.",
    "I enjoy taking ownership beyond writing code—from mentoring engineers and reviewing architecture to ensuring every release is stable, maintainable, and ready for real-world production environments.",
  ],
} as const;

export type HeroStat = {
  label: string;
  value: string;
  detail?: string;
  /** Carries the signal-pulse motif — only the genuinely "live" stat. */
  live?: boolean;
};

export const heroStats: HeroStat[] = [
  { label: "experience", value: personal.experienceLabel },
  { label: "shipped apps", value: personal.projectsDeliveredLabel },
  { label: "live robot deployments", value: experienceTotals.robotDeploymentsLabel, live: true },
  { label: "countries", value: experienceTotals.countriesLabel, detail: "India & UAE (Dubai)" },
];
