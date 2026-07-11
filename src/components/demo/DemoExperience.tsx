"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  PhoneMissed,
  LayoutGrid,
  Hourglass,
  Zap,
  Users,
  Building2,
  Landmark,
  CalendarCheck,
  Settings2,
  Rocket,
  LineChart,
} from "lucide-react";
import RevealText from "@/components/RevealText";
import ChannelShowcase from "@/components/demo/ChannelShowcase";
import DashboardDemo from "@/components/demo/DashboardDemo";

const painPoints = [
  {
    icon: PhoneMissed,
    title: "Missed calls at the worst times",
    body: "A seller reaches out while you're at a closing, on a job site, or asleep. By the time you call back, they've already talked to the next investor on their list.",
  },
  {
    icon: LayoutGrid,
    title: "Leads scattered across four apps",
    body: "Text messages, a Facebook inbox, WhatsApp, and email all filling up at once. Checking all of them constantly isn't a job, it's a full time distraction from actually closing deals.",
  },
  {
    icon: Hourglass,
    title: "Hours lost to manual follow-up",
    body: "Typing the same qualifying questions over and over, copying details into a spreadsheet, chasing people who went quiet. That's time you could spend on the deals that are actually ready to move.",
  },
  {
    icon: Zap,
    title: "Speed decides who wins the deal",
    body: "Studies on lead response consistently show the first business to respond wins the majority of the time. If you're answering in hours instead of seconds, you're losing deals you never even knew you had.",
  },
];

const stats = [
  {
    value: "8 sec",
    label: "Typical AI response time",
    detail: "compared to an industry average of about 47 minutes",
  },
  {
    value: "24/7",
    label: "Always answering",
    detail: "nights, weekends, and while you're on another call",
  },
  {
    value: "4",
    label: "Channels covered",
    detail: "text, email, WhatsApp, and Facebook, all in one place",
  },
  {
    value: "0",
    label: "Leads falling through the cracks",
    detail: "every conversation is logged, qualified, and tracked automatically",
  },
];

const useCases = [
  {
    icon: Building2,
    title: "Wholesalers and investors",
    body: "Running ads on Facebook, sending cold texts, and cold calling all at once. This catches every reply the moment it comes in, across every channel you're running.",
  },
  {
    icon: Users,
    title: "Small acquisitions teams",
    body: "A handful of people trying to cover inbound leads, follow-up, and closing at the same time. This handles the first response and qualification so your team only steps in for real conversations.",
  },
  {
    icon: Landmark,
    title: "Agents and brokerages",
    body: "High lead volume from listings, referrals, and paid ads. Every inquiry gets an instant, on-brand response instead of sitting in an inbox until someone has a free minute.",
  },
];

const processSteps = [
  {
    icon: CalendarCheck,
    title: "A short discovery call",
    body: "We talk through how leads actually reach you today, what a good lead looks like for your business, and what you want the AI to ask and say.",
  },
  {
    icon: Settings2,
    title: "Your channels get connected",
    body: "Text, email, WhatsApp, and Facebook are wired into one system, using your existing numbers and accounts wherever possible.",
  },
  {
    icon: Rocket,
    title: "Live in about a week",
    body: "The system launches with your actual qualifying questions and your actual tone, not a generic script. You watch the first real leads come through.",
  },
  {
    icon: LineChart,
    title: "Maintained and improved monthly",
    body: "Once it's running, it's monitored and tuned on an ongoing retainer, so it keeps getting better as you send it more volume.",
  },
];

export default function DemoExperience({
  headingLevel = "h1",
  bookingHref = "/#booking",
}: {
  headingLevel?: "h1" | "h2";
  bookingHref?: string;
}) {
  const [newLeadChannel, setNewLeadChannel] = useState<string | null>(null);
  const ctaHeadingLevel = headingLevel === "h1" ? "h2" : "h3";
  const sectionHeadingLevel = headingLevel === "h1" ? "h2" : "h3";

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-20 max-w-2xl text-center"
      >
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">
          Live Preview
        </p>
        <RevealText
          as={headingLevel}
          text="This is what your automation actually looks like"
          className="font-heading text-3xl font-semibold sm:text-4xl"
        />
        <p className="mx-auto mt-4 max-w-xl text-base text-muted">
          Real estate leads don't come from one place. They text you, email
          you, message you on WhatsApp, or fill out a Facebook ad. This walks
          through what happens on every one of those channels, and where it
          all ends up.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <RevealText
          as={sectionHeadingLevel}
          text="The problem isn't a lack of leads"
          className="mb-3 text-center font-heading text-2xl font-semibold sm:text-3xl"
        />
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted sm:text-base">
          Most real estate businesses aren't short on leads, they're short on
          the time to respond to all of them fast enough, on every channel,
          every single day.
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/60">
                <point.icon size={20} className="text-accent" />
              </div>
              <h3 className="mb-2 font-heading text-base font-semibold">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <RevealText
          as={sectionHeadingLevel}
          text="One system, watching every channel"
          className="mb-3 font-heading text-2xl font-semibold sm:text-3xl"
        />
        <p className="mx-auto max-w-2xl text-sm text-muted sm:text-base">
          Pick a channel below and watch a real conversation play out, start
          to finish. Same speed, same qualifying questions, same handoff,
          no matter where the lead comes from.
        </p>
      </motion.div>

      <div className="mb-4 text-center">
        <p className="font-mono text-xs text-muted">
          Step 1: a lead reaches out
        </p>
      </div>
      <ChannelShowcase onAnyComplete={(label) => setNewLeadChannel(label)} />

      <div className="my-14 flex justify-center">
        <ArrowDown size={20} className="text-accent" />
      </div>

      <div className="mb-8 text-center">
        <p className="font-mono text-xs text-muted">
          Step 2: it shows up in one dashboard
        </p>
      </div>
      <DashboardDemo newLeadChannel={newLeadChannel} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mt-24 mb-24"
      >
        <RevealText
          as={sectionHeadingLevel}
          text="What this actually changes"
          className="mb-10 text-center font-heading text-2xl font-semibold sm:text-3xl"
        />
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-surface p-6 text-center"
            >
              <p className="font-heading text-2xl font-semibold text-accent sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium">{stat.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center font-mono text-xs text-muted">
          Figures shown are typical ranges used for illustration, your actual
          numbers depend on your lead volume and how the system is configured
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <RevealText
          as={sectionHeadingLevel}
          text="Built for real estate, not generic business"
          className="mb-10 text-center font-heading text-2xl font-semibold sm:text-3xl"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="rounded-2xl border border-border bg-surface p-7"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/60">
                <useCase.icon size={20} className="text-accent" />
              </div>
              <h3 className="mb-2 font-heading text-base font-semibold">
                {useCase.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {useCase.body}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <RevealText
          as={sectionHeadingLevel}
          text="How we'd actually set this up for you"
          className="mb-10 text-center font-heading text-2xl font-semibold sm:text-3xl"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border bg-surface p-6"
            >
              <p className="mb-4 font-mono text-xs text-accent">
                Step {i + 1}
              </p>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/60">
                <step.icon size={20} className="text-accent" />
              </div>
              <h3 className="mb-2 font-heading text-base font-semibold">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-5 rounded-3xl border border-border-accent bg-gradient-to-br from-surface to-surface-2 p-10 text-center sm:p-14"
      >
        {(() => {
          const CtaHeading = ctaHeadingLevel;
          return (
            <CtaHeading className="font-heading text-2xl font-semibold sm:text-3xl">
              Want this running for your business?
            </CtaHeading>
          );
        })()}
        <p className="max-w-lg text-sm text-muted sm:text-base">
          I build this exact system for real estate investors, teams, and
          brokerages. Instant response across every channel your leads
          actually use, and a dashboard that shows you exactly what it's
          doing for you.
        </p>
        <a
          href={bookingHref}
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-black transition-colors hover:bg-accent-light glow-accent"
        >
          Book a Free Automation Call
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </motion.div>
    </div>
  );
}
