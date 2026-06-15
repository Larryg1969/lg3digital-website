const services = [
  {
    title: "Website management",
    body: "We build, host, and keep your site updated — new pages, fresh copy, fixed bugs — so it never goes stale.",
  },
  {
    title: "Social media presence",
    body: "Consistent posting, content planning, and brand voice across the platforms your customers actually use.",
  },
  {
    title: "Custom tools with Claude Code",
    body: "Booking widgets, inventory trackers, internal dashboards — small pieces of software built fast, just for how you work.",
  },
  {
    title: "AI training for your team",
    body: "Hands-on sessions that show your staff how to use AI for the parts of the job that eat the most time.",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-lg font-semibold tracking-[-0.02em]">
            LG3 <span className="text-brand">Digital</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-muted sm:flex">
            <a href="#services" className="hover:text-ink transition-colors">Services</a>
            <a href="#approach" className="hover:text-ink transition-colors">How we work</a>
            <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand/90"
          >
            Get started
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="max-w-3xl">
            <h1 className="text-balance font-display text-5xl font-semibold tracking-[-0.03em] leading-[1.05] sm:text-6xl">
              Your website, your socials, and AI that actually helps —{" "}
              <span className="text-brand">handled.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              LG3 Digital is a one-person shop that does the digital work
              small businesses don&apos;t have time for: keeping your site
              running, your socials active, and your team comfortable using
              AI day to day.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand/90"
              >
                Book a free consult
              </a>
              <a
                href="#services"
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface"
              >
                See what we do
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
              What we take off your plate
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="bg-surface p-8">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-muted leading-7">{service.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section id="approach" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <div className="grid gap-12 sm:grid-cols-[1fr_1.2fr] sm:gap-20">
              <h2 className="font-display text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
                Built for businesses without an IT department
              </h2>
              <div className="flex flex-col gap-8 text-lg leading-8 text-muted">
                <p>
                  Most small businesses can&apos;t justify a full marketing
                  team or an in-house developer — but they still need a
                  website that works, social channels that get attention, and
                  a way to keep up as AI changes how work gets done.
                </p>
                <p>
                  That&apos;s the gap LG3 Digital fills. You get one person
                  who knows your business, builds the tools, manages the
                  accounts, and explains it all in plain language — not an
                  agency retainer or a confusing dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <div className="grid gap-12 sm:grid-cols-[1fr_1.2fr] sm:gap-20">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
                  Let&apos;s talk about your business
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted">
                  Tell us a bit about what you need help with. We&apos;ll
                  reply within a day with some ideas — no obligation.
                </p>
              </div>
              <form className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium">
                    Name
                    <input
                      type="text"
                      name="name"
                      required
                      className="rounded-lg border border-line bg-bg px-4 py-3 text-base text-ink outline-none transition-colors focus:border-brand"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium">
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      className="rounded-lg border border-line bg-bg px-4 py-3 text-base text-ink outline-none transition-colors focus:border-brand"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm font-medium">
                  How can we help?
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="rounded-lg border border-line bg-bg px-4 py-3 text-base text-ink outline-none transition-colors focus:border-brand"
                  />
                </label>
                <button
                  type="submit"
                  className="self-start rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand/90"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LG3 Digital. All rights reserved.</p>
          <a href="mailto:hello@lg3digital.com" className="hover:text-ink transition-colors">
            hello@lg3digital.com
          </a>
        </div>
      </footer>
    </>
  );
}
