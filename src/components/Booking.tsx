"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import LeadForm from "./LeadForm";
import RevealText from "./RevealText";

const CAL_URL = "https://cal.com/hammad-zahid/business-automation-consultation";

export default function Booking() {
  return (
    <section id="booking" className="relative mx-auto w-full max-w-3xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">
          Let's Talk
        </p>
        <RevealText
          as="h2"
          text="Book a free automation call"
          className="font-heading text-3xl font-semibold sm:text-4xl"
        />
        <p className="mx-auto mt-4 max-w-xl text-base text-muted">
          Share a few details about your business, then grab a time that
          works for you. No pressure, no sales script. Just a real
          conversation about what's eating your team's time.
        </p>
      </motion.div>

      <LeadForm />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-8 flex flex-col items-center gap-4 rounded-3xl border border-border-accent bg-gradient-to-br from-surface to-surface-2 p-8 text-center sm:p-10"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border-accent bg-background/60">
          <Calendar size={22} className="text-accent" />
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold">
            Ready to pick a time?
          </h3>
          <p className="mt-1 text-sm text-muted">
            Once you've submitted your details, grab a slot directly on my
            calendar.
          </p>
        </div>
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-black transition-colors hover:bg-accent-light glow-accent"
        >
          Book on My Calendar
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </motion.div>
    </section>
  );
}
