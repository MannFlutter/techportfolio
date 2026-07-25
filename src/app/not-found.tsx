import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-5 py-24 sm:px-8">
      <p className="font-mono text-xs tracking-[0.14em] text-signal uppercase">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-medium tracking-tight text-text-primary">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-text-secondary">
        That route doesn&apos;t exist. Head back to the portfolio home.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-md bg-signal px-5 text-sm font-medium text-primary-foreground transition-opacity duration-200 ease-signature hover:opacity-90"
      >
        Back home
      </Link>
    </div>
  );
}
