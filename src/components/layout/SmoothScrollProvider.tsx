"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Lenis from "lenis";

type ScrollToOptions = {
  offset?: number;
  immediate?: boolean;
  onComplete?: () => void;
};

type LenisContextValue = {
  lenis: Lenis | null;
  scrollTo: (target: string | HTMLElement, options?: ScrollToOptions) => void;
};

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollTo: (target, options) => {
    if (typeof target === "string") {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
    options?.onComplete?.();
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

  const scrollTo = useCallback(
    (target: string | HTMLElement, options?: ScrollToOptions) => {
      // Default 0: Lenis already honors CSS scroll-margin (scroll-mt-*).
      const offset = options?.offset ?? 0;
      if (lenis) {
        lenis.scrollTo(target, {
          offset,
          immediate: options?.immediate,
          onComplete: options?.onComplete,
        });
        return;
      }
      const el =
        typeof target === "string" ? document.querySelector(target) : target;
      el?.scrollIntoView({
        behavior: options?.immediate ? "instant" : "smooth",
        block: "start",
      });
      if (options?.immediate) {
        options.onComplete?.();
      } else {
        window.setTimeout(() => options?.onComplete?.(), 400);
      }
    },
    [lenis],
  );

  return (
    <LenisContext.Provider value={{ lenis, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
}
