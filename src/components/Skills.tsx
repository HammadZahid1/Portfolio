"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Zap,
  Webhook,
  GitBranch,
  Code2,
  Bot,
  BrainCircuit,
  Database,
  Eye,
  Box,
  Orbit,
  Cable,
} from "lucide-react";
import RevealText from "./RevealText";

const skillGroups = [
  {
    category: "Automation & Integration",
    highlight: true,
    skills: [
      { icon: Workflow, name: "n8n" },
      { icon: Zap, name: "Zapier & Make" },
      { icon: Webhook, name: "Webhooks & Custom Triggers" },
      { icon: GitBranch, name: "API Integrations" },
    ],
  },
  {
    category: "AI & Machine Learning",
    highlight: false,
    skills: [
      { icon: Code2, name: "Python" },
      { icon: Bot, name: "LangChain & LLM APIs" },
      { icon: BrainCircuit, name: "Machine Learning" },
      { icon: Eye, name: "Computer Vision" },
      { icon: Database, name: "SQL & Data Pipelines" },
    ],
  },
  {
    category: "Engineering & Robotics",
    highlight: false,
    skills: [
      { icon: Box, name: "CAD (SolidWorks & Fusion 360)" },
      { icon: Orbit, name: "Webots & Gazebo" },
      { icon: Cable, name: "ROS" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto w-full max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 max-w-2xl"
      >
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">
          Toolkit
        </p>
        <RevealText
          as="h2"
          text="Tools & technologies"
          className="font-heading text-3xl font-semibold sm:text-4xl"
        />
      </motion.div>

      <div className="flex flex-col gap-10">
        {skillGroups.map((group, gi) => (
          <div key={group.category}>
            <div className="mb-5 flex items-center gap-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                {group.category}
              </h3>
              {group.highlight && (
                <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-[10px] font-medium text-black">
                  CORE FOCUS
                </span>
              )}
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {group.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: gi * 0.05 + i * 0.04 }}
                  className={`group flex flex-col items-center gap-3 rounded-2xl border px-5 py-8 text-center transition-colors ${
                    group.highlight
                      ? "border-border-accent bg-surface hover:bg-surface-2"
                      : "border-border bg-surface hover:border-border-accent"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border bg-background/60 transition-colors ${
                      group.highlight
                        ? "border-border-accent"
                        : "border-border group-hover:border-border-accent"
                    }`}
                  >
                    <skill.icon size={20} className="text-accent" />
                  </div>
                  <span className="text-sm font-medium text-muted transition-colors group-hover:text-foreground">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
