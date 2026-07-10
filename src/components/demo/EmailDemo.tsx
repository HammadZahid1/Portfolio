"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, RotateCcw, CheckCircle2 } from "lucide-react";

type EmailMessage = {
  sender: "lead" | "ai";
  from: string;
  subject: string;
  body: string;
  time: string;
};

const thread: EmailMessage[] = [
  {
    sender: "lead",
    from: "Karen Whitfield <karen.whitfield82@gmail.com>",
    subject: "Question about buying my house",
    body: "Hi there, I found your website through a Google search. I inherited a property last year and I'm not sure what to do with it. Do you buy homes as-is? It needs some work.",
    time: "2:14 PM",
  },
  {
    sender: "ai",
    from: "Acquisitions Team <hello@yourcompany.com>",
    subject: "Re: Question about buying my house",
    body: "Hi Karen, thanks so much for reaching out, and sorry to hear about the loss that led to this. Yes, we buy homes exactly as they are, no repairs needed on your end. To put together a fair offer, could you tell me a bit about the property's condition and roughly when you'd like to have this wrapped up? Happy to jump on a quick call too if that's easier.",
    time: "2:15 PM",
  },
  {
    sender: "lead",
    from: "Karen Whitfield <karen.whitfield82@gmail.com>",
    subject: "Re: Question about buying my house",
    body: "It's a 3 bed 2 bath, roof is maybe 15 years old, needs some paint and the kitchen is dated. I'd like to sell within the next couple months, it's just been sitting empty and it's stressful to manage from out of state.",
    time: "2:22 PM",
  },
  {
    sender: "ai",
    from: "Acquisitions Team <hello@yourcompany.com>",
    subject: "Re: Question about buying my house",
    body: "That's really helpful, thank you. Out of state and vacant for a while, got it, that's exactly the kind of situation we specialize in helping with. I've flagged this as a priority and looped in our acquisitions lead, who will call you within the hour to walk through next steps. Talk soon, Karen.",
    time: "2:22 PM",
  },
];

const TYPING_DELAY = 1300;
const READ_DELAY = 1000;

export default function EmailDemo({ onComplete }: { onComplete?: () => void }) {
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
    thread.forEach((msg, i) => {
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
  }, [runId]);

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="overflow-hidden rounded-3xl border border-border-accent bg-gradient-to-b from-surface to-surface-2 shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Mail size={16} />
            </div>
            <div>
              <p className="text-sm font-medium">Inbox: Website Inquiries</p>
              <p className="font-mono text-xs text-muted">
                {typing ? "drafting reply…" : "auto-responder active"}
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

        <div className="flex max-h-[460px] flex-col gap-3 overflow-y-auto px-5 py-5">
          <AnimatePresence initial={false}>
            {thread.slice(0, visibleCount).map((msg, i) => (
              <motion.div
                key={`${runId}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl border px-4 py-3 text-sm leading-relaxed ${
                  msg.sender === "ai"
                    ? "border-border-accent bg-accent/10"
                    : "border-border bg-surface-2"
                }`}
              >
                <div className="mb-1.5 flex items-center justify-between gap-3">
                  <p className="truncate text-xs font-medium text-foreground">
                    {msg.from}
                  </p>
                  <p className="shrink-0 font-mono text-[11px] text-muted">
                    {msg.time}
                  </p>
                </div>
                <p className="mb-1 text-xs font-medium text-muted">
                  {msg.subject}
                </p>
                <p className="text-foreground/90">{msg.body}</p>
              </motion.div>
            ))}
          </AnimatePresence>

          {typing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 rounded-2xl border border-border-accent bg-accent/10 px-4 py-3"
            >
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: d * 0.15 }}
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                />
              ))}
              <span className="font-mono text-xs text-muted">
                writing a reply…
              </span>
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
                    Lead qualified: HOT
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    Inherited, vacant, out of state owner
                  </p>
                  <p className="mt-1 font-mono text-xs text-accent">
                    Response time: 46 seconds → routed to dashboard ↓
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <p className="mt-4 text-center font-mono text-xs text-muted">
        Sample email thread · shows how a form fill or cold email gets a fast, human reply
      </p>
    </div>
  );
}
