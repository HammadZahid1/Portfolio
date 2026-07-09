import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a href="#" className="font-heading text-lg font-semibold">
            Hammad<span className="text-accent">.</span>
          </a>
          <p className="mt-2 max-w-xs text-sm text-muted">
            AI Automation Engineer, helping businesses run on autopilot.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <a
            href="mailto:ask.hammadzahid@gmail.com"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            ask.hammadzahid@gmail.com
          </a>
          <div className="flex items-center gap-4">
            <SocialLink href="mailto:ask.hammadzahid@gmail.com" label="Email">
              <Mail size={18} />
            </SocialLink>
          </div>
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Hammad Zahid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
