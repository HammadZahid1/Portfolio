"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import NodeGraphBackground from "./NodeGraphBackground";
import MagneticButton from "./MagneticButton";

const ROLES = [
  "business operations.",
  "sales & lead follow-up.",
  "customer support.",
  "reporting & data entry.",
];

function useTypewriter(words: string[], speed = 55, pause = 1400) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && display.length < current.length) {
      timeout = setTimeout(
        () => setDisplay(current.slice(0, display.length + 1)),
        speed
      );
    } else if (!deleting && display.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(
        () => setDisplay(current.slice(0, display.length - 1)),
        speed / 2
      );
    } else if (deleting && display.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, wordIndex, words, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,106,26,0.10),transparent_60%)]" />
      <NodeGraphBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 font-mono text-sm tracking-widest text-accent uppercase"
        >
          AI Automation Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl font-heading text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl"
        >
          I build AI systems that{" "}
          <span className="text-gradient-accent">automate</span> your
          business.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 h-8 max-w-2xl font-mono text-lg text-muted sm:text-xl"
        >
          Automating{" "}
          <span className="text-foreground">{typed}</span>
          <span className="animate-pulse text-accent">_</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base text-muted sm:text-lg"
        >
          I'm Hammad Zahid. I design and build end-to-end automation systems
          for businesses, then stick around on a monthly retainer to keep
          them running, improving, and scaling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            href="#booking"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-black transition-colors hover:bg-accent-light glow-accent"
          >
            <Calendar size={18} />
            Book a Free Call
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </MagneticButton>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-medium text-foreground transition-colors hover:border-border-accent hover:text-accent-light"
          >
            View Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-wider text-muted"
        >
          <span>Automation</span>
          <span className="text-border">/</span>
          <span>AI Projects</span>
          <span className="text-border">/</span>
          <span>ML Projects</span>
          <span className="text-border">/</span>
          <span>CAD Modelling</span>
          <span className="text-border">/</span>
          <span>Webots & Gazebo</span>
        </motion.div>
      </div>
    </section>
  );
}
