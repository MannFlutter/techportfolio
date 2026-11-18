import { readdirSync } from "node:fs";
import { join } from "node:path";
import { About } from "@/components/sections/About";
import { AllProjectsGrid } from "@/components/sections/AllProjectsGrid";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { FeaturedStudies } from "@/components/sections/FeaturedStudies";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Hero } from "@/components/sections/Hero";
import { OdigoEtihadRail } from "@/components/sections/OdigoEtihadRail";
import { RoboticsShowcase } from "@/components/sections/RoboticsShowcase";
import { SignalDivider } from "@/components/ui/SignalPulse";

function getThreeDScreenshots(): string[] {
  const directory = join(process.cwd(), "public", "screenshots", "3d");

  try {
    return readdirSync(directory, { withFileTypes: true })
      .filter((entry) => entry.isFile() && /\.webp$/i.test(entry.name))
      .map((entry) => entry.name)
      .sort((first, second) => first.localeCompare(second, "en", { numeric: true }))
      .map((name) => `/screenshots/3d/${encodeURIComponent(name)}`);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Experience />
      <SignalDivider />
      <RoboticsShowcase />
      <OdigoEtihadRail />
      <FeaturedStudies />
      <FeaturedWork />
      <AllProjectsGrid threeDScreenshots={getThreeDScreenshots()} />
      <Expertise />
      <Education />
      <Contact />
    </div>
  );
}
