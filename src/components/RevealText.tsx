"use client";

import { useEffect, useState, ElementType } from "react";
import { motion } from "framer-motion";

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
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  if (isTouch) {
    return (
      <Tag className={className}>
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay }}
          className="inline-block"
        >
          {text}
        </motion.span>
      </Tag>
    );
  }

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
          <span
            key={i}
            className={`inline-block overflow-hidden ${
              i < words.length - 1 ? "mr-[0.28em]" : ""
            }`}
          >
            <motion.span variants={wordVariant} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
