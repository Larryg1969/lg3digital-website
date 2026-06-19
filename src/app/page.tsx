import React from "react";
import ContactForm from "./ContactForm";

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
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Management", description: "Build, host, and maintain your business website." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management", description: "Consistent posting and brand voice across platforms." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom AI Tools", description: "Booking widgets, inventory trackers, internal dashboards." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Training", description: "Hands-on sessions for your team." } },
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

      {/* Sticky nav — top-level so sticky works past the hero boundary */}
      <header id="site-header" className="sticky top-0 z-50 bg-brand-dark">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-base font-semibold tracking-[-0.02em] text-brand-ink">
            LG3 <span className="text-accent">Digital</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium sm:flex" style={{ color: "oklch(97% 0.01 275 / 55%)" }}>
            <a href="#services" className="transition-colors hover:text-brand-ink">Services</a>
            <a href="#about" className="transition-colors hover:text-brand-ink">About</a>
            <a href="#approach" className="transition-colors hover:text-brand-ink">Our approach</a>
            <a href="#contact" className="transition-colors hover:text-brand-ink">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink transition-[opacity,transform] hover:opacity-85 active:scale-[0.97]"
          >
            Get started
          </a>
        </div>
      </header>

      {/* Hero — dark brand surface */}
      <div className="bg-brand-dark">
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:pb-24 sm:pt-14">
          <p className="hero-animate text-sm font-medium text-brand-ink" style={{ opacity: 0.45, letterSpacing: "0.04em" }}>
            Wooster, Ohio
          </p>

          <h1
            className="hero-animate hero-delay-1 mt-5 max-w-4xl text-balance font-semibold leading-[1.04] tracking-[-0.03em] text-brand-ink"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.25rem)" }}
          >
            Your website, your socials, and AI that actually
            helps&nbsp;—&nbsp;<span className="text-accent">handled.</span>
          </h1>

          <p
            className="hero-animate hero-delay-2 mt-8 max-w-xl leading-8 text-brand-ink"
            style={{ fontSize: "1.0625rem", opacity: 0.65 }}
          >
            LG3 Digital is a one-person shop based in Wooster that does the
            digital work small businesses don&apos;t have time for: keeping
            your site running, your socials active, and your team comfortable
            using AI day to day.
          </p>

          <div className="hero-animate hero-delay-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-[opacity,transform] hover:opacity-85 active:scale-[0.97]"
            >
              Book a free consult
            </a>
            <a
              href="#services"
              className="rounded-full border px-6 py-3 text-sm font-semibold text-brand-ink transition-[colors,transform] active:scale-[0.97]"
              style={{ borderColor: "oklch(97% 0.01 275 / 22%)" }}
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
            <h2
              data-reveal="slide-up"
              className="text-balance font-semibold tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}
            >
              What we take off your plate
            </h2>
            <ul className="mt-12 divide-y divide-line">
              {services.map((service, i) => (
                <li
                  key={service.title}
                  data-reveal="slide-left"
                  style={{ ["--i" as string]: i }}
                  className="grid gap-3 py-8 sm:grid-cols-[1fr_1.4fr] sm:gap-16 sm:py-10"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink">
                    {service.title}
                  </h3>
                  <p className="leading-7 text-muted">{service.body}</p>
                </li>
              ))}
            </ul>
            <div
              data-reveal="slide-up"
              className="mt-14 flex items-center gap-6 border-t border-line pt-10"
            >
              <a
                href="#contact"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-[opacity,transform] hover:opacity-85 active:scale-[0.97]"
              >
                Book a free consult
              </a>
              <span className="text-sm text-muted">No commitment. Reply within a day.</span>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-bg border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <div className="grid gap-10 sm:grid-cols-[auto_1fr] sm:gap-16 sm:items-start">

              <div data-reveal="slide-up" className="flex justify-center sm:justify-start">
                <img
                  src="/Headshot.png"
                  alt="Larry Geraghty, founder of LG3 Digital"
                  className="h-32 w-32 rounded-2xl object-cover sm:h-40 sm:w-40"
                />
              </div>

              <div>
                <div data-reveal="slide-up" style={{ ["--i" as string]: 0 }}>
                  <p className="text-sm font-medium text-accent" style={{ letterSpacing: "0.01em" }}>
                    Who&apos;s behind LG3 Digital
                  </p>
                  <h2
                    className="mt-3 text-balance font-semibold tracking-[-0.025em] text-ink"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
                  >
                    Larry Geraghty, Founder
                  </h2>
                </div>

                <div
                  data-reveal="fade-blur"
                  style={{ ["--i" as string]: 1, fontSize: "1.0625rem" } as React.CSSProperties}
                  className="mt-5 max-w-2xl leading-8 text-muted"
                >
                  <p>
                    For over 20 years I&apos;ve worked in customer support and technology
                    consulting — helping Fortune 100 companies build the systems, workflows,
                    and digital tools that make them run. I&apos;ve seen firsthand what
                    separates businesses that grow from businesses that stall, and most of it
                    comes down to the basics: a website that works, a consistent presence online,
                    and staff who know how to use the tools available to them.
                  </p>
                  <p className="mt-4">
                    Now I&apos;m bringing that same experience to Wooster. Small businesses here
                    deserve the same caliber of digital work that Fortune 100 companies take for
                    granted — without the enterprise price tag or the agency runaround.
                    That&apos;s what LG3 Digital is built to deliver.
                  </p>
                </div>

                <ul
                  data-reveal="slide-up"
                  style={{ ["--i" as string]: 2 }}
                  className="mt-8 flex flex-col gap-3 text-sm font-medium text-ink"
                >
                  {[
                    "Based in Wooster, Ohio — serving Wayne County and beyond",
                    "One point of contact: no account managers, no handoffs",
                    "Reach me directly by email or phone — not a support ticket",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 text-accent" aria-hidden="true">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section id="approach" className="bg-brand-dark">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <div className="grid gap-10 sm:grid-cols-[1fr_1.3fr] sm:gap-20">
              <h2
                data-reveal="slide-up"
                className="text-balance font-semibold tracking-[-0.025em] text-brand-ink"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}
              >
                Built for businesses without an IT department
              </h2>
              <div className="flex flex-col gap-6 text-base leading-8" style={{ color: "oklch(80% 0.015 275)" }}>
                <p data-reveal="fade-blur" style={{ ["--i" as string]: 0 }}>
                  Most small businesses in Wooster and Wayne County can&apos;t
                  justify a full marketing team or an in-house developer — but
                  they still need a website that works, social channels that get
                  attention, and a way to keep up as AI changes how work gets done.
                </p>
                <p data-reveal="fade-blur" style={{ ["--i" as string]: 1 }}>
                  That&apos;s the gap LG3 Digital fills. You get one local person
                  who knows your business, builds the tools, manages the accounts,
                  and explains it all in plain language — not an agency retainer
                  or a confusing dashboard.
                </p>
                <p data-reveal="fade-blur" style={{ ["--i" as string]: 2 }} className="font-semibold text-accent">
                  A one-person shop is a feature, not a compromise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <div className="grid gap-12 sm:grid-cols-[1fr_1.3fr] sm:gap-20">
              <div data-reveal="slide-up">
                <h2
                  className="text-balance font-semibold tracking-[-0.025em] text-ink"
                  style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}
                  data-reveal="slide-up"
                >
                  Let&apos;s talk about your business
                </h2>
                <p className="mt-4 leading-7 text-muted" style={{ fontSize: "1rem" }}>
                  Tell us what you need help with. We&apos;ll reply within a day
                  with some ideas — no obligation.
                </p>
              </div>
              <div data-reveal="slide-up" style={{ ["--i" as string]: 1 }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-dark">
        <div
          className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between"
          style={{ color: "oklch(97% 0.01 275 / 45%)" }}
        >
          <p>© {new Date().getFullYear()} LG3 Digital. Wooster, Ohio.</p>
          <a href="mailto:hello@lg3digital.com" className="transition-colors hover:text-brand-ink">
            hello@lg3digital.com
          </a>
        </div>
      </footer>
    </>
  );
}
