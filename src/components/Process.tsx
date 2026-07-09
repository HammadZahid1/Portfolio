"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Map, Cpu, LineChart } from "lucide-react";
import RevealText from "./RevealText";

const steps = [
  {
    icon: Search,
    title: "Discovery Call",
    description:
      "We talk through your business, where time is being lost, and what automating those workflows could look like.",
  },
  {
    icon: Map,
    title: "Automation Audit",
    description:
      "I map your current processes end to end and identify exactly which workflows are worth automating first.",
  },
  {
    icon: Cpu,
    title: "Build & Deploy",
    description:
      "I design and ship the automation system, integrated with your existing tools and tested against real scenarios.",
  },
  {
    icon: LineChart,
    title: "Retainer & Scale",
    description:
      "I stay on monthly to maintain, monitor, and expand the system as your business grows and new needs appear.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.3"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative mx-auto w-full max-w-6xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-2xl"
      >
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">
          Process
        </p>
        <RevealText
          as="h2"
          text="How we get you automated"
          className="font-heading text-3xl font-semibold sm:text-4xl"
        />
      </motion.div>

      <div className="relative">
        {/* connecting line - desktop */}
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-border md:block" />
        <motion.div
          style={{ scaleX: lineScale }}
          className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-accent md:block"
        />

        {/* connecting line - mobile (vertical) */}
        <div className="absolute bottom-0 left-7 top-0 w-px bg-border md:hidden" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute bottom-0 left-7 top-0 w-px origin-top bg-accent md:hidden"
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex items-start gap-5 md:flex-col md:items-start md:gap-0"
            >
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border-accent bg-surface md:mb-6">
                <step.icon size={22} className="text-accent" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent font-mono text-[10px] font-bold text-black">
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="mb-1.5 font-heading text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
