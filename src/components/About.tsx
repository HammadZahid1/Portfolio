"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { User } from "lucide-react";
import RevealText from "./RevealText";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.04]);
  const glow = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.15, 0.45, 0.15]
  );

  const paragraphs = [
    "I'm an AI Engineer who builds automation systems that actually run your business. Not demos, not prototypes, production systems that save real hours every week.",
    "My core focus is AI Automation for businesses: mapping out manual, repetitive workflows and replacing them with intelligent systems that handle sales follow-ups, support tickets, reporting, and internal operations. Then staying on as a monthly retainer to maintain and improve them.",
    "Underneath that, I bring a deeper engineering background: AI & ML projects, CAD modelling, and robotics simulation with Webots & Gazebo. That range means I don't just wire up no-code tools. I understand systems at the level of how they're actually engineered.",
    "If your business is bottlenecked by manual work, that's exactly the problem I solve.",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative mx-auto w-full max-w-6xl px-6 py-28"
    >
      <div className="grid grid-cols-1 gap-16 md:grid-cols-[300px_1fr]">
        <div className="relative hidden md:block">
          <div className="sticky top-28">
            <motion.div
              style={{ scale }}
              className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-border-accent bg-surface"
            >
              <motion.div
                style={{ opacity: glow }}
                className="pointer-events-none absolute -inset-6 rounded-3xl bg-accent blur-3xl"
              />
              {!imgError ? (
                <img
                  src="/me.jpeg"
                  alt="Hammad Zahid"
                  onError={() => setImgError(true)}
                  loading="lazy"
                  className="relative z-10 h-full w-full object-cover"
                />
              ) : (
                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-surface to-surface-2 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border-accent bg-background/60">
                    <User size={36} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-heading text-lg text-foreground">
                      Hammad Zahid
                    </p>
                    <p className="mt-1 px-8 font-mono text-xs text-muted">
                      drop your photo at /public/me.jpeg
                    </p>
                  </div>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-1 ring-inset ring-white/5" />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8">
          <div>
            <p className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">
              About Me
            </p>
            <RevealText
              as="h2"
              text="Engineer first. Automator by focus."
              className="font-heading text-3xl font-semibold sm:text-4xl"
            />
          </div>

          {/* mobile photo */}
          <div className="relative mx-auto block aspect-square w-full max-w-[260px] overflow-hidden rounded-2xl border border-border-accent bg-surface md:hidden">
            {!imgError ? (
              <img
                src="/me.jpeg"
                alt="Hammad Zahid"
                onError={() => setImgError(true)}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface to-surface-2">
                <User size={32} className="text-accent" />
                <p className="font-mono text-xs text-muted">
                  drop your photo at /public/me.jpeg
                </p>
              </div>
            )}
          </div>

          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="text-base leading-relaxed text-muted sm:text-lg"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
