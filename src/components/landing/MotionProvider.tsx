"use client";

import { MotionConfig } from "framer-motion";

/** prefers-reduced-motion 사용자에게는 transform 애니메이션을 자동으로 끈다. */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
