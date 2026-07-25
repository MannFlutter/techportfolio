import { gsap } from "gsap";

export const SIGNATURE_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export const DURATION = {
  micro: 0.2,
  reveal: 0.55,
  transition: 0.75,
} as const;

export const STAGGER = {
  tight: 0.04,
  base: 0.06,
  loose: 0.08,
} as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Call once on the client before GSAP timelines. Respects reduced motion. */
export function configureGsap() {
  gsap.config({ nullTargetWarn: false });
  gsap.defaults({
    ease: "power3.out",
    duration: prefersReducedMotion() ? 0 : DURATION.reveal,
  });
}
