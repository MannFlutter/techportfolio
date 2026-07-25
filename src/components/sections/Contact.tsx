"use client";

import { useState } from "react";
import { FileDown, Mail, Phone, Send } from "lucide-react";
import { personal } from "@/lib/data/personal";
import { RevealText } from "@/components/ui/RevealText";
import { cn } from "@/lib/utils";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1-.004-4.125 2.062 2.062 0 0 1 .004 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const channels = [
  {
    href: `mailto:${personal.email}`,
    label: personal.email,
    ariaLabel: "Email",
    icon: Mail,
  },
  {
    href: `tel:${personal.phone.replace(/\s+/g, "")}`,
    label: personal.phone,
    ariaLabel: "Phone",
    icon: Phone,
  },
  {
    href: personal.linkedinUrl,
    label: "linkedin.com/in/manthan-patel",
    ariaLabel: "LinkedIn",
    icon: LinkedInIcon,
    external: true,
  },
] as const;

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name.trim() || "a visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setName("");
    setEmail("");
    setMessage("");
    setStatus("opened");
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <RevealText
            as="h2"
            id="contact-heading"
            className="font-display text-3xl font-medium tracking-tight text-text-primary sm:text-4xl"
          >
            Get in touch
          </RevealText>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Working on a Flutter product, robotics interface, or real-time
            mobile system? Reach out — based in {personal.location}.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-border bg-surface">
          <div className="grid lg:grid-cols-2">
            {/* Left: channels */}
            <div className="flex flex-col border-b border-border p-6 sm:p-8 lg:border-r lg:border-b-0">
              <p className="font-mono text-[11px] leading-relaxed tracking-[0.08em] text-signal">
                {personal.availability}
              </p>

              <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-text-primary sm:text-2xl">
                Tell me about the product you want to ship.
              </h3>

              <ul className="mt-8 space-y-4">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <li key={channel.ariaLabel}>
                      <a
                        href={channel.href}
                        aria-label={channel.ariaLabel}
                        target={
                          "external" in channel && channel.external
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          "external" in channel && channel.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-center gap-3 text-sm text-text-secondary transition-colors duration-200 ease-signature hover:text-text-primary"
                      >
                        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-signal transition-colors duration-200 ease-signature group-hover:border-signal/40">
                          <Icon className="size-4" />
                        </span>
                        <span className="truncate">{channel.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <a
                href={personal.resumePath}
                download
                className="mt-auto inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium text-text-primary transition-colors duration-200 ease-signature hover:border-signal/40 hover:text-signal sm:w-auto sm:self-start lg:mt-10"
              >
                <FileDown className="size-4" aria-hidden />
                Download Resume
              </a>
            </div>

            {/* Right: form */}
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-5 p-6 sm:p-8"
              noValidate
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="font-mono text-[10px] tracking-[0.14em] text-text-secondary uppercase"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="font-mono text-[10px] tracking-[0.14em] text-text-secondary uppercase"
                >
                  Your email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className={inputClassName}
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="contact-message"
                  className="font-mono text-[10px] tracking-[0.14em] text-text-secondary uppercase"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What are you building, and how can I help?"
                  className={cn(inputClassName, "min-h-[140px] resize-y")}
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-signal px-5 text-sm font-medium text-primary-foreground transition-opacity duration-200 ease-signature hover:opacity-90"
              >
                <Send className="size-4" aria-hidden />
                Send message
              </button>

              {status === "opened" ? (
                <p className="text-xs text-text-secondary" role="status">
                  Your email client should open with the message ready to send.
                </p>
              ) : (
                <p className="text-xs text-text-secondary">
                  Submitting opens your email app addressed to{" "}
                  {personal.email}.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClassName =
  "mt-2 w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-text-primary outline-none transition-[border-color,box-shadow] duration-200 ease-signature placeholder:text-text-secondary/60 focus:border-signal/50 focus:ring-2 focus:ring-signal/20";
