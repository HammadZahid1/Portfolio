"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Clock, Flame, TrendingUp, Users } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const kpis = [
  {
    icon: Users,
    label: "Leads This Month",
    value: "128",
    sub: "+22% vs. last month",
  },
  {
    icon: Clock,
    label: "Avg. Response Time",
    value: "8 sec",
    sub: "industry avg: 47 min",
  },
  {
    icon: Flame,
    label: "Hot Lead Rate",
    value: "34%",
    sub: "qualified automatically",
  },
  {
    icon: TrendingUp,
    label: "Est. Recovered Revenue",
    value: "$86,400",
    sub: "from leads that used to go cold",
  },
];

const weekly = [
  { day: "Mon", leads: 14 },
  { day: "Tue", leads: 19 },
  { day: "Wed", leads: 12 },
  { day: "Thu", leads: 23 },
  { day: "Fri", leads: 17 },
  { day: "Sat", leads: 9 },
  { day: "Sun", leads: 6 },
];
const maxLeads = Math.max(...weekly.map((d) => d.leads));

const breakdown = [
  { label: "Hot", value: 34, color: "bg-accent" },
  { label: "Warm", value: 41, color: "bg-accent-light/60" },
  { label: "Cold", value: 25, color: "bg-surface-2 border border-border" },
];

type Lead = {
  name: string;
  source: string;
  motivation: string;
  timeline: string;
  status: "Hot" | "Warm" | "Cold";
  response: string;
};

const existingLeads: Lead[] = [
  {
    name: "Marcus T.",
    source: "Text",
    motivation: "Inherited property",
    timeline: "30 days",
    status: "Hot",
    response: "6 sec",
  },
  {
    name: "Karen W.",
    source: "Email",
    motivation: "Inherited, out of state owner",
    timeline: "60 days",
    status: "Hot",
    response: "46 sec",
  },
  {
    name: "Ola A.",
    source: "WhatsApp",
    motivation: "Tired landlord, vacant unit",
    timeline: "ASAP",
    status: "Hot",
    response: "5 sec",
  },
  {
    name: "Denise F.",
    source: "Facebook",
    motivation: "Relocating for work",
    timeline: "6 weeks",
    status: "Hot",
    response: "4 sec",
  },
  {
    name: "Priya M.",
    source: "Cold list",
    motivation: "Just curious about value",
    timeline: "Exploring",
    status: "Cold",
    response: "9 sec",
  },
];

const newLeadByChannel: Record<string, Lead> = {
  Text: {
    name: "New Lead: 412 Maple St",
    source: "Text",
    motivation: "Inherited property, water damage",
    timeline: "30 days",
    status: "Hot",
    response: "8 sec",
  },
  Email: {
    name: "New Lead: Karen W.",
    source: "Email",
    motivation: "Inherited, out of state owner",
    timeline: "60 days",
    status: "Hot",
    response: "46 sec",
  },
  WhatsApp: {
    name: "New Lead: Houston rental",
    source: "WhatsApp",
    motivation: "Tired landlord, vacant unit",
    timeline: "ASAP",
    status: "Hot",
    response: "5 sec",
  },
  Facebook: {
    name: "New Lead: 227 Larkspur Dr",
    source: "Facebook",
    motivation: "Relocating for work",
    timeline: "6 weeks",
    status: "Hot",
    response: "4 sec",
  },
};

const statusStyles: Record<Lead["status"], string> = {
  Hot: "bg-accent/15 text-accent border border-border-accent",
  Warm: "bg-accent-light/10 text-accent-light border border-border",
  Cold: "bg-surface-2 text-muted border border-border",
};

export default function DashboardDemo({
  newLeadChannel,
}: {
  newLeadChannel: string | null;
}) {
  const newLead = newLeadChannel ? newLeadByChannel[newLeadChannel] : null;
  const rows = newLead ? [newLead, ...existingLeads] : existingLeads;

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {kpis.map((kpi) => (
          <TiltCard key={kpi.label}>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <kpi.icon size={18} className="mb-3 text-accent" />
              <p className="font-heading text-xl font-semibold sm:text-2xl">
                {kpi.value}
              </p>
              <p className="mt-1 text-xs text-muted">{kpi.label}</p>
              <p className="mt-2 font-mono text-[11px] text-accent/80">
                {kpi.sub}
              </p>
            </div>
          </TiltCard>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-5">
        <div className="rounded-2xl border border-border bg-surface p-6 lg:col-span-3">
          <p className="mb-5 text-sm font-medium">Leads captured, last 7 days</p>
          <div className="flex h-40 items-end gap-3">
            {weekly.map((d) => (
              <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                <div className="relative h-32 w-full">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(d.leads / maxLeads) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute bottom-0 w-full rounded-t-md bg-gradient-to-t from-accent/40 to-accent"
                  />
                </div>
                <p className="font-mono text-[11px] text-muted">{d.day}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 lg:col-span-2">
          <p className="mb-5 text-sm font-medium">Lead quality breakdown</p>
          <div className="flex h-3 w-full overflow-hidden rounded-full">
            {breakdown.map((b) => (
              <div
                key={b.label}
                className={b.color}
                style={{ width: `${b.value}%` }}
              />
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2.5">
            {breakdown.map((b) => (
              <div key={b.label} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${b.color}`} />
                  <span className="text-muted">{b.label}</span>
                </div>
                <span className="font-mono text-xs">{b.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="border-b border-border px-6 py-4">
          <p className="text-sm font-medium">Recent leads</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs text-muted">
                <th className="px-6 py-3 font-normal">Lead</th>
                <th className="px-6 py-3 font-normal">Source</th>
                <th className="px-6 py-3 font-normal">Motivation</th>
                <th className="px-6 py-3 font-normal">Timeline</th>
                <th className="px-6 py-3 font-normal">Response</th>
                <th className="px-6 py-3 font-normal">Status</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence initial={false}>
                {rows.map((lead) => (
                  <motion.tr
                    key={lead.name}
                    initial={lead === newLead ? { opacity: 0, backgroundColor: "rgba(255,106,26,0.12)" } : false}
                    animate={{ opacity: 1, backgroundColor: "rgba(255,106,26,0)" }}
                    transition={{ duration: 1.2 }}
                    className="border-b border-border last:border-0"
                  >
                    <td className="px-6 py-3.5 font-medium">{lead.name}</td>
                    <td className="px-6 py-3.5 text-muted">{lead.source}</td>
                    <td className="px-6 py-3.5 text-muted">{lead.motivation}</td>
                    <td className="px-6 py-3.5 text-muted">{lead.timeline}</td>
                    <td className="px-6 py-3.5 font-mono text-xs text-muted">
                      {lead.response}
                    </td>
                    <td className="px-6 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-1 font-mono text-[11px] ${statusStyles[lead.status]}`}
                      >
                        {lead.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-4 text-center font-mono text-xs text-muted">
        Sample dashboard · your real dashboard reflects your actual leads &amp; numbers
      </p>
    </div>
  );
}
