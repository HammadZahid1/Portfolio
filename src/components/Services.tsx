"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Bot,
  BrainCircuit,
  Box,
  Orbit,
  ArrowUpRight,
  MessageSquareText,
  BarChart3,
  PlayCircle,
} from "lucide-react";
import RevealText from "./RevealText";
import TiltCard from "./TiltCard";

const secondaryServices = [
  {
    icon: MessageSquareText,
    title: "Chatbots & Virtual Assistants",
    description:
      "Custom AI chatbots and virtual assistants that handle customer questions, qualify leads, and book meetings automatically.",
  },
  {
    icon: BrainCircuit,
    title: "AI & ML Projects",
    description:
      "Custom AI tools, predictive models, and data-driven systems: from copilots to forecasting, built and deployed end to end.",
  },
  {
    icon: BarChart3,
    title: "Data & Reporting Dashboards",
    description:
      "Automated dashboards that pull data from your tools and turn it into reports you can actually act on.",
  },
  {
    icon: Bot,
    title: "Custom AI Integrations",
    description:
      "Connecting AI models into your existing software so your team gets AI-powered features without switching tools.",
  },
  {
    icon: Box,
    title: "CAD Modelling",
    description:
      "Precision 3D modelling and product design for engineering, prototyping, and manufacturing use cases.",
  },
  {
    icon: Orbit,
    title: "Webots & Gazebo",
    description:
      "Robotics simulation and testing environments: model, simulate, and validate robotic systems before deployment.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto w-full max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 max-w-2xl"
      >
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">
          Services
        </p>
        <RevealText
          as="h2"
          text="What I can build for you"
          className="font-heading text-3xl font-semibold sm:text-4xl"
        />
      </motion.div>

      {/* Flagship: Automation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="group relative mb-8 overflow-hidden rounded-3xl border border-border-accent bg-gradient-to-br from-surface to-surface-2 p-10 sm:p-14"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
        <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border-accent bg-background/60">
              <Workflow size={26} className="text-accent" />
            </div>
            <div className="mb-2 flex items-center gap-3">
              <h3 className="font-heading text-2xl font-semibold sm:text-3xl">
                AI Automation
              </h3>
              <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs font-medium text-black">
                CORE FOCUS
              </span>
            </div>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              I map your business's manual, repetitive workflows and replace
              them with intelligent automated systems: sales follow-up,
              lead qualification, customer support, internal reporting, and
              more. Delivered as a build, then maintained and improved on a
              monthly retainer as your operations scale.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-3 self-start">
            <a
              href="#booking"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-black transition-colors hover:bg-accent-light"
            >
              Automate My Business
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </a>
            <a
              href="/demo"
              className="group/btn2 inline-flex items-center gap-2 rounded-full border border-border-accent px-6 py-3 font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <PlayCircle size={16} />
              See a Live Demo
            </a>
          </div>
        </div>
      </motion.div>

      {/* Secondary services grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {secondaryServices.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <TiltCard className="overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-border-accent">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/10" />
              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/60 transition-colors group-hover:border-border-accent">
                  <service.icon size={22} className="text-accent" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
