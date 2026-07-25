import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

type ScreenshotShowcaseProps = {
  screenshots: string[];
  projectTitle: string;
};

export function ScreenshotShowcase({
  screenshots,
  projectTitle,
}: ScreenshotShowcaseProps) {
  if (screenshots.length === 0) return null;

  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {screenshots.map((src, index) => (
        <li key={src} className="group">
          <div className="rounded-[1.6rem] border border-border bg-[#0f0f12] p-1.5 shadow-[0_22px_50px_-30px_rgba(0,0,0,0.95)] transition-transform duration-200 ease-signature group-hover:-translate-y-1">
            <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[1.25rem] bg-background ring-1 ring-white/5 ring-inset">
              <Image
                src={withBasePath(src)}
                alt={`${projectTitle} screenshot ${index + 1}`}
                fill
                className="object-contain object-top"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
