import { About } from "@/components/sections/About";
import { AllProjectsGrid } from "@/components/sections/AllProjectsGrid";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Hero } from "@/components/sections/Hero";
import { RoboticsShowcase } from "@/components/sections/RoboticsShowcase";
import { SignalDivider } from "@/components/ui/SignalPulse";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Experience />
      <SignalDivider />
      <RoboticsShowcase />
      <FeaturedWork />
      <AllProjectsGrid />
      <Expertise />
      <Contact />
    </div>
  );
}
