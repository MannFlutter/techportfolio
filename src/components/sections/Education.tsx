import { education } from "@/lib/data/personal";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-20 border-b border-border bg-surface/25"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <h2 id="education-heading" className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
          Education &amp; languages
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-5">
            <h3 className="font-display text-lg font-medium">{education.degree}</h3>
            <p className="mt-2 text-sm text-text-secondary">{education.duration}</p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5">
            <h3 className="font-display text-lg font-medium">Languages</h3>
            <ul className="mt-2 space-y-1 text-sm text-text-secondary">
              {education.languages.map(({ name, level }) => (
                <li key={name}>{name} ({level})</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
