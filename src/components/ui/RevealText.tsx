"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  reducedMotionVariants,
  revealTransition,
} from "@/lib/animations/motionVariants";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import { cn } from "@/lib/utils";

type RevealTextProps = {
  children: React.ReactNode;
  as?: "p" | "h1" | "h2" | "h3" | "span" | "div";
  className?: string;
  delay?: number;
  id?: string;
};

export function RevealText({
  children,
  as = "p",
  className,
  delay = 0,
  id,
}: RevealTextProps) {
  const reduceMotion = useReducedMotion();
  const mounted = useHasMounted();
  const animate = !reduceMotion && mounted;
  const variants = animate ? fadeUp : reducedMotionVariants;
  const transition = {
    ...revealTransition,
    delay: animate ? delay : 0,
  };

  const shared = {
    id,
    className: cn(className),
    initial: animate ? ("hidden" as const) : false,
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.35 },
    variants,
    transition,
  };

  switch (as) {
    case "h1":
      return <motion.h1 {...shared}>{children}</motion.h1>;
    case "h2":
      return <motion.h2 {...shared}>{children}</motion.h2>;
    case "h3":
      return <motion.h3 {...shared}>{children}</motion.h3>;
    case "span":
      return <motion.span {...shared}>{children}</motion.span>;
    case "div":
      return <motion.div {...shared}>{children}</motion.div>;
    default:
      return <motion.p {...shared}>{children}</motion.p>;
  }
}
