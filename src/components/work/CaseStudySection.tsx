type CaseStudySectionProps = {
  title: string;
  children: React.ReactNode;
};

export function CaseStudySection({ title, children }: CaseStudySectionProps) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:px-8 md:grid-cols-[200px_1fr] md:gap-12 md:py-16">
        <h2 className="font-mono text-xs tracking-[0.14em] text-signal uppercase">
          {title}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
