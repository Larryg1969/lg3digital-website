const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LG3 Digital",
  url: "https://www.lg3digital.com",
  email: "hello@lg3digital.com",
  description:
    "LG3 Digital helps small businesses in Wooster, Ohio manage their website, grow their social media presence, build custom AI-powered tools, and train their team to use AI.",
  "@id": "https://www.lg3digital.com/#business",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wooster",
    addressRegion: "OH",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Wooster", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "County", name: "Wayne County", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Orrville", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Millersburg", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "State", name: "Ohio" },
  ],
  priceRange: "$$",
  serviceType: ["Website Management", "Social Media Management", "Custom AI Tools", "AI Training"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Management",
          description: "Build, host, and maintain your business website — new pages, fresh copy, fixed bugs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Management",
          description: "Consistent posting, content planning, and brand voice across the platforms your customers use.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom AI Tools",
          description: "Booking widgets, inventory trackers, internal dashboards — built fast with Claude Code.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Training",
          description: "Hands-on sessions that show your team how to use AI for the parts of the job that take the most time.",
        },
      },
    ],
  },
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dark hero — header is embedded so it drapes over the brand-dark surface */}
      <div className="bg-brand-dark">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-base font-semibold tracking-[-0.02em] text-brand-ink">
            LG3 <span className="text-accent">Digital</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-brand-ink/60 sm:flex">
            <a href="#services" className="hover:text-brand-ink transition-colors">Services</a>
            <a href="#approach" className="hover:text-brand-ink transition-colors">How we work</a>
            <a href="#contact" className="hover:text-brand-ink transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-accent/85"
          >
            Get started
          </a>
        </header>

        <section className="mx-auto max-w-6xl px-6 pt-12 pb-24 sm:pt-16 sm:pb-32">
          <p className="hero-animate text-sm font-medium tracking-wide text-brand-ink/50 uppercase">
            Wooster, Ohio
          </p>
          <h1
            className="hero-animate hero-animate-delay-1 mt-6 text-balance font-semibold tracking-[-0.03em] leading-[1.04] text-brand-ink"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.25rem)" }}
          >
            Your website, your socials,
            <br />
            and AI that actually helps —{" "}
            <span className="text-accent">handled.</span>
          </h1>
          <p className="hero-animate hero-animate-delay-2 mt-8 max-w-xl text-lg leading-8 text-brand-ink/65">
            LG3 Digital is a one-person shop based in Wooster that does the
            digital work small businesses don&apos;t have time for: keeping
            your site running, your socials active, and your team comfortable
            using AI day to day.
          </p>
          <div className="hero-animate hero-animate-delay-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent/85"
            >
              Book a free consult
            </a>
            <a
              href="#services"
              className="rounded-full border border-brand-ink/20 px-6 py-3 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-ink/40"
            >
              See what we do
            </a>
          </div>
        </section>
      </div>

      <main className="flex-1">
        {/* Services */}
        <section id="services" className="bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <h2 className="text-balance font-semibold tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}>
              What we take off your plate
            </h2>
            <ul className="mt-12 divide-y divide-line">
              {services.map((service) => (
                <li key={service.title} className="grid gap-3 py-8 sm:grid-cols-[1fr_1.4fr] sm:gap-12 sm:py-10">
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{service.title}</h3>
                  <p className="text-muted leading-7">{service.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How we work */}
        <section id="approach" className="border-t border-line bg-brand-dark">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <div className="grid gap-10 sm:grid-cols-[1fr_1.3fr] sm:gap-20">
              <h2
                className="text-balance font-semibold tracking-[-0.025em] text-brand-ink"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}
              >
                Built for businesses without an IT department
              </h2>
              <div className="flex flex-col gap-6 text-base leading-8 text-brand-ink/65">
                <p>
                  Most small businesses in Wooster and Wayne County can&apos;t
                  justify a full marketing team or an in-house developer —
                  but they still need a website that works, social channels
                  that get attention, and a way to keep up as AI changes how
                  work gets done.
                </p>
                <p>
                  That&apos;s the gap LG3 Digital fills. You get one local
                  person who knows your business, builds the tools, manages
                  the accounts, and explains it all in plain language — not
                  an agency retainer or a confusing dashboard.
                </p>
                <p className="font-semibold text-accent">
                  A one-person shop is a feature, not a compromise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <div className="grid gap-12 sm:grid-cols-[1fr_1.3fr] sm:gap-20">
              <div>
                <h2
                  className="text-balance font-semibold tracking-[-0.025em] text-ink"
                  style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}
                >
                  Let&apos;s talk about your business
                </h2>
                <p className="mt-4 text-base leading-7 text-muted">
                  Tell us what you need help with. We&apos;ll reply within a
                  day with some ideas — no obligation.
                </p>
              </div>
              <form className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium text-ink">
                    Name
                    <input
                      type="text"
                      name="name"
                      required
                      className="rounded-lg border border-line bg-bg px-4 py-3 text-base text-ink outline-none transition-colors focus:border-brand"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-ink">
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      className="rounded-lg border border-line bg-bg px-4 py-3 text-base text-ink outline-none transition-colors focus:border-brand"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm font-medium text-ink">
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

      <footer className="border-t border-line bg-brand-dark">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-brand-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LG3 Digital. Wooster, Ohio.</p>
          <a href="mailto:hello@lg3digital.com" className="hover:text-brand-ink transition-colors">
            hello@lg3digital.com
          </a>
        </div>
      </footer>
    </>
  );
}
