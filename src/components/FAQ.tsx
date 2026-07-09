"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import RevealText from "./RevealText";

const faqs = [
  {
    question: "What exactly does 'AI Automation' mean for my business?",
    answer:
      "It means taking the repetitive, manual work your team does, like lead follow-up, data entry, support replies, and reporting, and replacing it with a system that does it automatically, accurately, and around the clock. I design the workflow, connect it to your existing tools, and hand you back the hours.",
  },
  {
    question: "How long does an automation project take?",
    answer:
      "Most projects go from discovery call to live system in 1-3 weeks, depending on complexity. Simple workflow automations can ship in days; systems involving custom AI models or multiple integrations take longer. You'll get a clear timeline after the audit.",
  },
  {
    question: "Do I need to be technical to work with you?",
    answer:
      "Not at all. I handle the entire technical build. Your job is just to explain how your business currently works, and I translate that into an automated system and explain everything in plain language along the way.",
  },
  {
    question: "What's included in the monthly retainer?",
    answer:
      "Ongoing monitoring and maintenance of your automation systems, fixes if something breaks (APIs change, tools update), and continuous improvements as your business needs evolve. Think of it as having automation infrastructure that's always being looked after.",
  },
  {
    question: "Can you work with the tools I already use?",
    answer:
      "Yes, I build around your existing stack (CRM, email, spreadsheets, Slack, etc.) rather than forcing you onto new software. If a tool needs replacing to unlock better automation, I'll tell you clearly why, but that's the exception, not the default.",
  },
  {
    question: "Do you only do automation, or can you help with AI/ML too?",
    answer:
      "Automation is my main focus and where most client work happens, but I also take on standalone AI and ML projects, CAD modelling, and robotics simulation work (Webots & Gazebo). Just reach out with what you need.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative mx-auto w-full max-w-4xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 max-w-2xl"
      >
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">
          FAQ
        </p>
        <RevealText
          as="h2"
          text="Frequently asked questions"
          className="font-heading text-3xl font-semibold sm:text-4xl"
        />
      </motion.div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={`overflow-hidden rounded-2xl border bg-surface transition-colors ${
                isOpen ? "border-border-accent" : "border-border"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-foreground">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-accent text-accent"
                >
                  <Plus size={15} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
