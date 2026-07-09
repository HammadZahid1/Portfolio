"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const FORM_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = "4353e910-29ba-43c0-b6fa-8fbb7d15a618";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New lead from portfolio site");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-border bg-surface p-8 sm:p-10"
    >
      <h3 className="mb-2 font-heading text-2xl font-semibold">
        Tell me about your business
      </h3>
      <p className="mb-8 text-sm text-muted">
        Fill this out before booking so I can prep for our call and give you
        useful ideas from the start.
      </p>

      {status === "success" ? (
        <div className="flex flex-col items-center gap-4 py-10 text-center">
          <CheckCircle2 size={40} className="text-accent" />
          <div>
            <p className="font-heading text-lg font-semibold">
              Got it, thank you!
            </p>
            <p className="mt-1 text-sm text-muted">
              I'll review your details and follow up shortly. Feel free to
              book a call below too.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Full Name" name="name" placeholder="John Doe" required />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="john@company.com"
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field
              label="Business Name"
              name="business_name"
              placeholder="Acme Inc."
              required
            />
            <Field
              label="Industry"
              name="industry"
              placeholder="e.g. E-commerce, Real Estate"
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field
              label="Team Size"
              name="team_size"
              placeholder="e.g. 1-10, 10-50"
            />
            <Field
              label="Monthly Budget (optional)"
              name="budget"
              placeholder="e.g. $500-$2000/mo"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              What's your biggest bottleneck right now?
            </label>
            <textarea
              name="pain_point"
              rows={4}
              required
              placeholder="e.g. We're manually following up with leads and losing track of them..."
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-border-accent"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-black transition-colors hover:bg-accent-light disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Submit Details"}
            <Send
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong, please try again or email me directly.
            </p>
          )}
        </form>
      )}
    </motion.div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-border-accent"
      />
    </div>
  );
}
