"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLenisScroll } from "@/components/layout/SmoothScrollProvider";
import { personal } from "@/lib/data/personal";
import { cn } from "@/lib/utils";

const links = [
  { hash: "#about", label: "About" },
  { hash: "#experience", label: "Experience" },
  { hash: "#robotics", label: "Robotics" },
  { hash: "#work", label: "Work" },
  { hash: "#projects", label: "Projects" },
  { hash: "#expertise", label: "Expertise" },
  { hash: "#contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();
  const { scrollTo } = useLenisScroll();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      if (pathname !== "/") {
        setActiveHash("");
        return;
      }

      const marker = window.scrollY + 112;
      let current = "";

      for (const link of links) {
        const section = document.querySelector<HTMLElement>(link.hash);
        if (section && section.offsetTop <= marker) current = link.hash;
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8
      ) {
        current = "#contact";
      }

      setActiveHash(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const onNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    if (pathname !== "/") return;
    event.preventDefault();
    setActiveHash(hash);
    scrollTo(hash);
    history.replaceState(null, "", hash);
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200 ease-signature",
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 font-display text-sm font-medium tracking-tight text-text-primary transition-colors duration-200 ease-signature hover:text-signal"
          onClick={() => setOpen(false)}
        >
          <Image
            src={personal.profileImage}
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-full border border-border object-cover"
            aria-hidden
          />
          Manthan Patel
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                href={`/${link.hash}`}
                onClick={(e) => onNavClick(e, link.hash)}
                aria-current={activeHash === link.hash ? "location" : undefined}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 ease-signature",
                  activeHash === link.hash
                    ? "bg-signal-muted text-signal"
                    : "text-text-secondary hover:text-text-primary",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={personal.resumePath}
              download
              className="inline-flex h-9 items-center rounded-md border border-border bg-surface px-3 text-sm font-medium text-text-primary transition-colors duration-200 ease-signature hover:border-signal/40 hover:text-signal"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-text-primary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                href={`/${link.hash}`}
                aria-current={activeHash === link.hash ? "location" : undefined}
                className={cn(
                  "block rounded-md px-2 py-2.5 text-sm transition-colors duration-200 ease-signature",
                  activeHash === link.hash
                    ? "bg-signal-muted text-signal"
                    : "text-text-secondary hover:bg-surface hover:text-text-primary",
                )}
                onClick={(e) => onNavClick(e, link.hash)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={personal.resumePath}
              download
              className="inline-flex h-10 w-full items-center justify-center rounded-md border border-border bg-surface text-sm font-medium text-text-primary"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
