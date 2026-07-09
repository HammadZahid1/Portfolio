"use client";

import { motion } from "framer-motion";
import { ElementType } from "react";

const container = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay },
  }),
};

const wordVariant = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function RevealText({
  text,
  as = "h2",
  className = "",
  delay = 0,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  const Tag = as;

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={container}
        custom={delay}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span variants={wordVariant} className="inline-block">
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
