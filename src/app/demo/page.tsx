import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import Footer from "@/components/Footer";
import DemoExperience from "@/components/demo/DemoExperience";

export const metadata: Metadata = {
  title: "Live Demo: AI Lead Response System | Hammad Zahid",
  description:
    "See exactly how the AI automation system works: instant lead response, automatic qualification, and a real-time dashboard.",
};

export default function DemoPage() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} />
            Back to portfolio
          </Link>
          <a
            href="/#booking"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-accent-light"
          >
            <Calendar size={15} />
            Book a Call
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <DemoExperience />
      </main>
      <Footer />
    </>
  );
}
