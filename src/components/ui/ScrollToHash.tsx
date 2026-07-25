"use client";

import { useLenisScroll } from "@/components/layout/SmoothScrollProvider";
import { cn } from "@/lib/utils";

type ScrollToHashProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/** In-page hash link that works with Lenis smooth scroll. */
export function ScrollToHash({ href, children, className }: ScrollToHashProps) {
  const { scrollTo } = useLenisScroll();

  return (
    <a
      href={href}
      className={cn(className)}
      onClick={(event) => {
        if (!href.startsWith("#")) return;
        event.preventDefault();
        scrollTo(href);
        history.replaceState(null, "", href);
      }}
    >
      {children}
    </a>
  );
}
