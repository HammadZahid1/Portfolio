"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import ChatThreadDemo from "@/components/demo/ChatThreadDemo";
import EmailDemo from "@/components/demo/EmailDemo";
import { chatChannels } from "@/components/demo/channels";

const tabs = [
  {
    id: "text",
    label: "Text",
    blurb:
      "A seller texts your number after seeing a bandit sign or a mailer. This is usually the fastest-moving lead you'll get, and the one most likely to go cold if nobody answers in the first few minutes.",
  },
  {
    id: "email",
    label: "Email",
    blurb:
      "Someone fills out a form on your website or finds you through a Google search at midnight. Emails feel less urgent, so they're the easiest ones to let sit in an inbox for two days, which is usually two days too long.",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    blurb:
      "Common with out-of-state owners, landlords, and international sellers who default to WhatsApp over texting. If you're not watching that inbox constantly, these leads quietly slip through.",
  },
  {
    id: "facebook",
    label: "Facebook",
    blurb:
      "Your Facebook or Instagram lead ad gets a form fill, and now there's a five-minute window before that person moves on with their day and stops thinking about selling.",
  },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function ChannelShowcase({
  onAnyComplete,
}: {
  onAnyComplete?: (channelLabel: string) => void;
}) {
  const [active, setActive] = useState<TabId>("text");
  const activeTab = tabs.find((t) => t.id === active)!;
  const activeChatChannel = chatChannels.find((c) => c.id === active);

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
              active === tab.id
                ? "border-border-accent bg-accent text-black"
                : "border-border text-muted hover:border-border-accent hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
        >
          <p className="mx-auto mb-8 max-w-xl text-center text-sm leading-relaxed text-muted">
            {activeTab.blurb}
          </p>

          {active === "email" ? (
            <EmailDemo onComplete={() => onAnyComplete?.("Email")} />
          ) : activeChatChannel ? (
            <ChatThreadDemo
              channel={activeChatChannel}
              onComplete={() => onAnyComplete?.(activeChatChannel.label)}
            />
          ) : null}
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex items-center justify-center gap-2 font-mono text-xs text-muted">
        <Mail size={13} />
        Every one of these channels lands in the exact same dashboard below
      </div>
    </div>
  );
}
