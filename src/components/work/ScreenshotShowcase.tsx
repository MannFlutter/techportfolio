import Image from "next/image";

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
        <li
          key={src}
          className="overflow-hidden rounded-lg border border-border bg-surface"
        >
          <div className="relative aspect-[9/19] w-full bg-background">
            <Image
              src={src}
              alt={`${projectTitle} screenshot ${index + 1}`}
              fill
              className="object-contain object-top"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
