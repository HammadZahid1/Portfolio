"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, CheckCircle2, type LucideIcon } from "lucide-react";

export type ChatMessage = {
  sender: "lead" | "ai";
  text: string;
};

export type ChatChannel = {
  id: string;
  label: string;
  icon: LucideIcon;
  leadName: string;
  statusLabel: string;
  script: ChatMessage[];
  qualifiedTitle: string;
  qualifiedNote: string;
  responseTime: string;
  footerNote: string;
  aiBubbleClassName: string;
  accentClassName: string;
};

const TYPING_DELAY = 1100;
const READ_DELAY = 900;

export default function ChatThreadDemo({
  channel,
  onComplete,
}: {
  channel: ChatChannel;
  onComplete?: () => void;
}) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [qualified, setQualified] = useState(false);
  const [runId, setRunId] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setVisibleCount(0);
    setTyping(false);
    setQualified(false);

    let elapsed = 600;
    channel.script.forEach((msg, i) => {
      if (msg.sender === "ai") {
        timers.current.push(setTimeout(() => setTyping(true), elapsed));
        elapsed += TYPING_DELAY;
        timers.current.push(
          setTimeout(() => {
            setTyping(false);
            setVisibleCount(i + 1);
          }, elapsed)
        );
        elapsed += READ_DELAY;
      } else {
        timers.current.push(setTimeout(() => setVisibleCount(i + 1), elapsed));
        elapsed += READ_DELAY;
      }
    });

    timers.current.push(
      setTimeout(() => {
        setQualified(true);
        onComplete?.();
      }, elapsed + 400)
    );

    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runId, channel.id]);

  const Icon = channel.icon;

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-3xl border border-border-accent bg-gradient-to-b from-surface to-surface-2 shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full ${channel.accentClassName}`}
            >
              <Icon size={16} />
            </div>
            <div>
              <p className="text-sm font-medium">{channel.leadName}</p>
              <p className="font-mono text-xs text-muted">
                {typing ? "responding…" : channel.statusLabel}
              </p>
            </div>
          </div>
          <button
            onClick={() => setRunId((r) => r + 1)}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-border-accent hover:text-accent"
          >
            <RotateCcw size={12} />
            Replay
          </button>
        </div>

        <div className="flex h-[420px] flex-col gap-3 overflow-y-auto px-5 py-5">
          <AnimatePresence initial={false}>
            {channel.script.slice(0, visibleCount).map((msg, i) => (
              <motion.div
                key={`${channel.id}-${runId}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${
                  msg.sender === "ai" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.sender === "ai"
                      ? channel.aiBubbleClassName
                      : "bg-surface-2 text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {typing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-end"
            >
              <div className="flex items-center gap-1 rounded-2xl bg-accent/20 px-4 py-3">
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: d * 0.15,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                  />
                ))}
              </div>
            </motion.div>
          )}

          <AnimatePresence>
            {qualified && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="mt-1 flex items-start gap-2.5 rounded-2xl border border-border-accent bg-accent/10 px-4 py-3"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {channel.qualifiedTitle}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {channel.qualifiedNote}
                  </p>
                  <p className="mt-1 font-mono text-xs text-accent">
                    Response time: {channel.responseTime} → routed to dashboard ↓
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <p className="mt-4 text-center font-mono text-xs text-muted">
        {channel.footerNote}
      </p>
    </div>
  );
}
