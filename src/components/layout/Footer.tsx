import Link from "next/link";

const social = [
  {
    href: "https://github.com/MannFlutter",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/manthan-patel-953639212",
    label: "LinkedIn",
  },
  {
    href: "mailto:mannpatel270@gmail.com",
    label: "Email",
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="space-y-1">
          <p className="font-display text-sm font-medium text-text-primary">
            Manthan Patel
          </p>
          <p className="text-sm text-text-secondary">
            Senior Flutter Engineer · Gujarat, India
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-5">
          {social.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  item.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="text-sm text-text-secondary transition-colors duration-200 ease-signature hover:text-signal"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/#work"
              className="text-sm text-text-secondary transition-colors duration-200 ease-signature hover:text-signal"
            >
              Work
            </Link>
          </li>
        </ul>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-4 font-mono text-xs text-text-secondary sm:px-8">
          © {year} Manthan Patel. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
