"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** 초 단위 지연 — 리스트/그리드의 stagger 용 */
  delay?: number;
  /** 시작 y 오프셋(px) */
  y?: number;
  id?: string;
};

/**
 * 스크롤 진입 시 fade-in-up 으로 나타나는 래퍼.
 * 섹션 컴포넌트는 서버 컴포넌트로 유지하고, 애니메이션 경계만 이 클라이언트 컴포넌트에 둔다.
 */
export default function Reveal({ children, className, delay = 0, y = 24, id }: RevealProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
