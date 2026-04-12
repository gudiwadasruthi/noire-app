import type { TargetAndTransition, Transition, Variants } from "framer-motion";

export const headingEase: Transition = {
  duration: 0.95,
  ease: [0.22, 1, 0.36, 1],
};

export const headingBlurFadeUp: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(14px)",
    y: 28,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: headingEase,
  },
};

export const taglineFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: 1.05,
      ease: "easeOut",
    },
  },
};

export const wordRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

export const wordRevealItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const goldGlow =
  "0 0 24px rgba(201, 148, 58, 0.45), 0 0 48px rgba(201, 148, 58, 0.22), 0 0 72px rgba(201, 148, 58, 0.08)";

export const ctaHover: Variants = {
  rest: {
    scale: 1,
    boxShadow: "0 0 0 rgba(201, 148, 58, 0)",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    scale: 1.035,
    boxShadow: goldGlow,
    transition: {
      type: "spring",
      stiffness: 380,
      damping: 26,
      mass: 0.85,
    },
  },
  tap: {
    scale: 0.985,
    transition: { duration: 0.18, ease: "easeOut" },
  },
};

export const statCardHover: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 0 0 rgba(0,0,0,0)",
    borderTopColor: "rgb(201, 148, 58)",
  },
  hover: {
    y: -6,
    boxShadow: "0 0 32px rgba(201, 148, 58, 0.45), 0 16px 40px -12px rgba(0,0,0,0.5)",
    borderTopColor: "rgb(240, 208, 96)",
    transition: { duration: 0.22, ease: "easeOut" },
  },
};

export type ParticleSpec = {
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  drift: number;
};

/** Fixed positions for stable SSR / hydration */
export const goldParticles: ParticleSpec[] = [
  { left: "8%", top: "72%", size: 3, duration: 9, delay: 0, drift: 100 },
  { left: "18%", top: "88%", size: 2, duration: 11, delay: 1.2, drift: 120 },
  { left: "28%", top: "65%", size: 4, duration: 8, delay: 0.4, drift: 90 },
  { left: "42%", top: "78%", size: 2, duration: 10, delay: 2.1, drift: 110 },
  { left: "55%", top: "92%", size: 3, duration: 9.5, delay: 0.8, drift: 95 },
  { left: "68%", top: "70%", size: 2, duration: 12, delay: 1.5, drift: 130 },
  { left: "78%", top: "85%", size: 4, duration: 8.5, delay: 0.2, drift: 105 },
  { left: "88%", top: "68%", size: 3, duration: 10, delay: 2.8, drift: 115 },
  { left: "12%", top: "48%", size: 2, duration: 11, delay: 3.2, drift: 100 },
  { left: "35%", top: "38%", size: 3, duration: 9, delay: 1.8, drift: 88 },
  { left: "62%", top: "42%", size: 2, duration: 10.5, delay: 2.4, drift: 102 },
  { left: "82%", top: "35%", size: 3, duration: 9.2, delay: 0.6, drift: 96 },
  { left: "50%", top: "58%", size: 2, duration: 11.5, delay: 4, drift: 118 },
  { left: "22%", top: "22%", size: 2, duration: 12, delay: 1.1, drift: 125 },
  { left: "72%", top: "18%", size: 3, duration: 10, delay: 3.5, drift: 108 },
];

export function goldParticleMotion(p: ParticleSpec): {
  animate: TargetAndTransition;
  transition: Transition;
} {
  return {
    animate: {
      y: [0, -p.drift],
      opacity: [0.55, 0],
    },
    transition: {
      duration: p.duration,
      repeat: Infinity,
      ease: "linear",
      delay: p.delay,
    },
  };
}
