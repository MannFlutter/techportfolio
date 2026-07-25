import type { MetadataRoute } from "next";
import { caseStudySlugs } from "@/lib/data/projects";

export const dynamic = "force-static";

const siteUrl = "https://manthanpatel.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = caseStudySlugs.map((slug) => ({
    url: `${siteUrl}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies,
  ];
}
