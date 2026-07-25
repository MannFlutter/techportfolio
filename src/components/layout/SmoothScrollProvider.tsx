"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";

type LenisContextValue = {
  lenis: Lenis | null;
  scrollTo: (target: string | HTMLElement, options?: { offset?: number }) => void;
};

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollTo: (target) => {
    if (typeof target === "string") {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  },
});

export function useLenisScroll() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenis(instance);

    let frame = 0;
    const raf = (time: number) => {
      instance.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        instance.destroy();
        cancelAnimationFrame(frame);
        setLenis(null);
      }
    };
    media.addEventListener("change", onChange);

    return () => {
      media.removeEventListener("change", onChange);
      cancelAnimationFrame(frame);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  const scrollTo: LenisContextValue["scrollTo"] = (target, options) => {
    const offset = options?.offset ?? -80;
    if (lenis) {
      lenis.scrollTo(target, { offset });
      return;
    }
    const el =
      typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <LenisContext.Provider value={{ lenis, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
}
