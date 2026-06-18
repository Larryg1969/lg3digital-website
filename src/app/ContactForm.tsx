"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? "success" : "error");
    if (res.ok) form.reset();
  }

  const inputClass =
    "rounded-lg border border-line bg-bg px-4 py-3 text-base text-ink outline-none transition-[border-color,box-shadow] placeholder:text-muted focus:border-brand focus:shadow-[0_0_0_3px_oklch(46%_0.16_275_/_15%)]";

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-ink">
          Name
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-ink">
          Email
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-ink">
        How can we help?
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell us about your business and what you need..."
          className={inputClass}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-ink transition-[opacity,transform] hover:opacity-90 active:scale-[0.97] disabled:opacity-50 sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status === "success" && (
          <p className="status-message text-sm font-medium" style={{ color: "oklch(55% 0.15 145)" }}>
            Message sent — we&apos;ll be in touch soon!
          </p>
        )}
        {status === "error" && (
          <p className="status-message text-sm font-medium" style={{ color: "oklch(55% 0.18 25)" }}>
            Something went wrong. Email us at hello@lg3digital.com.
          </p>
        )}
      </div>
    </form>
  );
}
