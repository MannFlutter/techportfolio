import type { Transition, Variants } from "framer-motion";

export const signatureEase: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

export const microTransition: Transition = {
  duration: 0.2,
  ease: signatureEase,
};

export const revealTransition: Transition = {
  duration: 0.55,
  ease: signatureEase,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: revealTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};
