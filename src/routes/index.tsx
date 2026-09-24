import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import { Reveal } from "@/components/Reveal";
import heroVideo from "@/assets/hero.mp4.asset.json";
import heroPoster from "@/assets/hero-frame.jpg";
import { studio, studioImage, services, portfolio, process, faqs, artists, piercing, nails } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: studio.name,
  description: studio.intro,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rohini",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  telephone: studio.phone,
  email: studio.email,
  areaServed: "New Delhi",
  openingHours: "Mo-Sa 11:00-20:00",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INK MINK TATTOOZ | Custom Tattoo Studio in Rohini, Delhi" },
      {
        name: "description",
        content:
          "Custom tattoo and piercing studio in Rohini, New Delhi. Black & grey realism, fine line, mandala, colour and cover-up work, by appointment.",
      },
      { property: "og:title", content: "INK MINK TATTOOZ | Custom Tattoo Studio in Rohini, Delhi" },
      {
        property: "og:description",
        content:
          "Custom tattoos and piercings in Rohini, New Delhi. Sterile, appointment-led studio with bespoke designs.",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Home,
});

const NAV = [
  { label: "Work", href: "#work", n: "01" },
  { label: "Studio", href: "#studio", n: "02" },
  { label: "Services", href: "#services", n: "03" },
  { label: "Process", href: "#process", n: "04" },
  { label: "Visit", href: "#visit", n: "05" },
];

const mono = "font-mono text-[0.62rem] uppercase tracking-[0.22em]";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
          scrolled ? "border-border bg-background/92 backdrop-blur-sm" : "border-transparent"
        }`}
      >
        <div className="flex items-stretch justify-between">
          <a
            href="#top"
            className="flex items-center border-r border-border/60 px-4 py-4 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-bone md:px-6"
          >
            IMT<span className="ml-2 text-oxblood">/</span>DEL
          </a>
          <nav className="hidden flex-1 items-stretch md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`${mono} group flex flex-1 items-end gap-2 border-r border-border/60 px-4 pb-3 pt-6 text-muted-foreground transition-colors hover:bg-oxblood hover:text-bone`}
              >
                <span className="text-oxblood group-hover:text-bone">{n.n}</span>
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#book"
            className={`${mono} hidden items-center bg-oxblood px-8 text-bone transition-colors hover:bg-crimson md:flex`}
          >
            Book →
          </a>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={`${mono} px-5 py-4 text-bone md:hidden`}
          >
            {menuOpen ? "Close" : "Index"}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            {NAV.concat({ label: "Book", href: "#book", n: "06" }).map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-4 border-b border-border/60 px-5 py-4"
              >
                <span className={`${mono} text-oxblood`}>{n.n}</span>
                <span className="text-3xl font-semibold uppercase tracking-tight text-bone">
                  {n.label}
                </span>
              </a>
            ))}
          </div>
        )}
      </header>

      <Hero />
      <Ticker />
      <Work />
      <Studio />
      <Artists />
      <Services />
      <Piercing />
      <Nails />
      <Process />
      <Booking />
      <Faq />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden border-b border-border">
      {/* film: dominates the right side on desktop, full bleed behind type on mobile */}
      <div className="grain-overlay absolute inset-0 md:left-[38%]">
        <video
          className="h-full w-full object-cover"
          src={heroVideo.url}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-background/55 md:bg-gradient-to-r md:from-background md:via-background/25 md:to-background/40" />
      </div>

      <div className="absolute inset-y-0 left-0 z-20 hidden w-[3.25rem] items-center justify-center border-r border-border/60 md:flex">
        <span className={`${mono} vertical-label text-ash`}>
          Rohini, New Delhi / Custom ink only / Est. atelier
        </span>
      </div>

      {/* Brand mark: signature placement, clear of the navigation and hero copy. */}
      <div className="absolute right-5 top-24 z-30 md:right-10 md:top-28">
        <div className="rounded-full bg-black/80 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-[2px]">
          <img
            src="/favicon.ico"
            alt="Ink Mink Tattooz"
            className="h-24 w-24 object-contain md:h-36 md:w-36"
          />
        </div>
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-14 pl-5 pr-5 pt-32 md:pb-20 md:pl-[6.5rem] md:pr-10">
        <span className={`${mono} text-oxblood`}>[ 001 ] Tattoo atelier</span>
        <h1 className="mt-6 text-[19vw] font-extrabold uppercase leading-[0.78] tracking-[-0.05em] text-bone md:text-[13.5vw]">
          Ink
          <br />
          <span className="inline-block md:translate-x-[0.12em]">Mink</span>
          <br />
          <span className="text-oxblood">Tattooz</span>
        </h1>
        <div className="mt-10 grid max-w-4xl gap-6 border-t border-border/70 pt-6 md:grid-cols-12">
          <p className={`${mono} text-ash md:col-span-3`}>Fig. A: {studio.city}</p>
          <p className="text-sm leading-relaxed text-muted-foreground md:col-span-6">
            {studio.tagline}. Designed for one body, drawn once, worn for life.
          </p>
          <div className="flex flex-wrap items-start gap-3 md:col-span-3">
            <a
              href="#book"
              className={`${mono} bg-oxblood px-6 py-3 text-bone transition-colors hover:bg-crimson`}
            >
              Book a consult
            </a>
            <a
              href="#work"
              className={`${mono} border border-bone/25 px-6 py-3 text-bone transition-colors hover:border-oxblood hover:text-oxblood`}
            >
              Work ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const words = ["Black & Grey", "Fine Line", "Mandala", "Neo-Traditional", "Cover-Ups", "Piercings"];
  return (
    <div className="overflow-hidden border-b border-border bg-oxblood py-2.5">
      <div className="flex w-max animate-[ticker_34s_linear_infinite] gap-10 whitespace-nowrap pr-10">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className={`${mono} text-bone/90`}>
            {w} <span className="ml-10 text-bone/40">/</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-33.33%)}}`}</style>
    </div>
  );
}

function SectionMark({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-8 flex items-center gap-4 border-b border-border pb-3">
      <span className={`${mono} text-oxblood`}>[ {n} ]</span>
      <span className={`${mono} text-ash`}>{label}</span>
    </div>
  );
}

function Work() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(portfolio.map((p) => p.category)))],
    [],
  );
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = portfolio.filter((p) => active === "All" || p.category === active);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => ((i ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") setLightbox((i) => ((i ?? 0) - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, items.length]);

  // broken-grid placement: column span, offset and scale vary per index
  const layouts = [
    "md:col-span-5 md:col-start-1",
    "md:col-span-4 md:col-start-7 md:mt-28",
    "md:col-span-6 md:col-start-6 md:-mt-16",
    "md:col-span-4 md:col-start-2 md:mt-10",
    "md:col-span-5 md:col-start-8 md:-mt-24",
    "md:col-span-4 md:col-start-3 md:mt-16",
  ];

  return (
    <section id="work" className="px-5 py-20 md:px-10 md:py-32">
      <Reveal>
        <SectionMark n="002" label="Selected work / archive" />
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="text-[15vw] font-extrabold uppercase leading-[0.8] tracking-[-0.05em] text-bone md:text-[9vw]">
            Arch<span className="text-oxblood">i</span>ve
          </h2>
          <div className="flex flex-wrap gap-x-5 gap-y-2 md:pb-4">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setActive(c);
                  setLightbox(null);
                }}
                className={`${mono} border px-3 py-1.5 transition-colors ${
                  active === c
                    ? "border-oxblood bg-oxblood text-bone"
                    : "border-border text-ash hover:border-bone hover:text-bone"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-6 md:gap-y-0">
        {items.map((item, i) => (
          <Reveal
            key={item.alt}
            delay={(i % 3) * 80}
            className={layouts[i % layouts.length] ?? "md:col-span-4"}
          >
            <button onClick={() => setLightbox(i)} className="group block w-full text-left">
              <div className="grain-overlay relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={`w-full object-cover grayscale-[0.35] transition-all duration-[1400ms] ease-out group-hover:scale-[1.04] group-hover:grayscale-0 ${
                    item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                />
                <span className="absolute inset-0 z-[2] bg-oxblood/0 transition-colors duration-500 group-hover:bg-oxblood/20" />
              </div>
              <div className="mt-3 flex items-baseline justify-between border-t border-border pt-2">
                <span className={`${mono} text-ash`}>
                  {String(i + 1).padStart(2, "0")} / {item.category}
                </span>
                <span className={`${mono} text-oxblood opacity-0 transition-opacity group-hover:opacity-100`}>
                  View
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {lightbox !== null && items[lightbox] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/97 p-4"
          onClick={() => setLightbox(null)}
        >
          <button aria-label="Close" className={`${mono} absolute right-5 top-5 text-bone hover:text-oxblood`}>
            Close ✕
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => ((i ?? 0) - 1 + items.length) % items.length);
            }}
            className={`${mono} absolute left-4 text-bone/70 hover:text-oxblood md:left-10`}
          >
            ← Prev
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[86svh]">
            <img
              src={items[lightbox].src}
              alt={items[lightbox].alt}
              className="max-h-[76svh] w-auto object-contain"
            />
            <figcaption className={`${mono} mt-4 flex justify-between border-t border-border pt-2 text-ash`}>
              <span>{items[lightbox].category}</span>
              <span>{items[lightbox].alt}</span>
            </figcaption>
          </figure>
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => ((i ?? 0) + 1) % items.length);
            }}
            className={`${mono} absolute right-4 text-bone/70 hover:text-oxblood md:right-10`}
          >
            Next →
          </button>
        </div>
      )}
    </section>
  );
}

function Studio() {
  return (
    <section id="studio" className="border-t border-border px-5 py-20 md:px-10 md:py-32">
      <Reveal>
        <SectionMark n="003" label="The room" />
      </Reveal>
      <div className="relative grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <div className="grain-overlay relative">
            <img
              src={studioImage}
              alt="Inside the INK MINK TATTOOZ studio in Rohini"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover grayscale-[0.4]"
            />
          </div>
        </Reveal>
        <div className="md:col-span-6 md:col-start-6 md:-mt-24 md:bg-background md:pl-10 md:pt-10">
          <Reveal>
            <h2 className="text-[13vw] font-extrabold uppercase leading-[0.82] tracking-[-0.05em] text-bone md:text-[6.5vw]">
              Quiet room,
              <br />
              <span className="text-oxblood">loud detail.</span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-relaxed text-muted-foreground">{studio.intro}</p>
          </Reveal>
          <Reveal delay={120}>
            <dl className="mt-10 grid grid-cols-2 border-t border-border">
              {[
                ["Single-use", "Needles & tubes, every session"],
                ["Custom only", "No flash copies of other artists"],
                ["Private booth", "One client at a time"],
                ["Free touch-up", "Within the healing window"],
              ].map(([t, c], i) => (
                <div
                  key={t}
                  className={`border-b border-border py-6 ${i % 2 === 0 ? "pr-5 md:border-r" : "pl-5"}`}
                >
                  <dt className="text-xl font-semibold uppercase tracking-tight text-bone">{t}</dt>
                  <dd className={`${mono} mt-2 leading-relaxed text-ash`}>{c}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Artists() {
  return (
    <section id="artists" className="border-t border-border px-5 py-20 md:px-10 md:py-32">
      <Reveal>
        <SectionMark n="004" label="Resident artists" />
      </Reveal>
      <div className="border-t border-border">
        {artists.map((a, i) => (
          <Reveal key={a.name} delay={i * 60}>
            <div className="group grid grid-cols-1 gap-2 border-b border-border py-8 transition-colors hover:bg-oxblood md:grid-cols-12 md:items-baseline md:gap-8 md:px-3">
              <span className={`${mono} text-oxblood group-hover:text-bone md:col-span-1`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-4xl font-extrabold uppercase tracking-[-0.04em] text-bone md:col-span-7 md:text-7xl">
                {a.name}
              </h3>
              <p className={`${mono} text-muted-foreground group-hover:text-bone md:col-span-4`}>
                {a.experience}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border px-5 py-20 md:px-10 md:py-32">
      <Reveal>
        <SectionMark n="005" label="Disciplines" />
      </Reveal>
      <div className="border-t border-border">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 50}>
            <div className="group grid grid-cols-1 gap-2 border-b border-border py-6 transition-colors hover:bg-oxblood md:grid-cols-12 md:items-baseline md:gap-8 md:px-3">
              <span className={`${mono} text-oxblood group-hover:text-bone md:col-span-1`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-3xl font-semibold uppercase tracking-[-0.04em] text-bone md:col-span-5 md:text-5xl">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-bone md:col-span-6">
                {s.copy}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Piercing() {
  return (
    <section id="piercing" className="border-t border-border px-5 py-20 md:px-10 md:py-32">
      <Reveal>
        <SectionMark n="006" label="Piercing price list" />
        <h2 className="max-w-3xl text-[11vw] font-extrabold uppercase leading-[0.84] tracking-[-0.05em] text-bone md:text-[5.5vw]">
          Pier<span className="text-oxblood">cings.</span>
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <h3 className={`${mono} mb-4 text-oxblood`}>Ear piercings</h3>
          <dl className="border-t border-border">
            {piercing.ear.map(([name, price]) => (
              <div
                key={name}
                className="group flex items-baseline justify-between gap-6 border-b border-border py-3.5 transition-colors hover:bg-oxblood md:px-3"
              >
                <dt className="text-lg font-semibold uppercase tracking-tight text-bone">{name}</dt>
                <dd className={`${mono} text-muted-foreground group-hover:text-bone`}>{price}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={120} className="md:col-span-4 md:col-start-9 md:mt-16">
          <h3 className={`${mono} mb-4 text-oxblood`}>Belly button piercing</h3>
          <div className="flex items-baseline justify-between gap-6 border-y border-border py-5 md:px-3">
            <span className="text-lg font-semibold uppercase tracking-tight text-bone">
              {piercing.belly.name}
            </span>
            <span className={`${mono} text-muted-foreground`}>{piercing.belly.price}</span>
          </div>
          <ul className="mt-8 space-y-3">
            {piercing.notes.map((n) => (
              <li key={n} className={`${mono} flex gap-3 text-ash`}>
                <span className="text-oxblood">/</span> {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Nails() {
  return (
    <section id="nails" className="border-t border-border px-5 py-20 md:px-10 md:py-32">
      <Reveal>
        <SectionMark n="007" label="Ink Mink Nail / price list" />
        <h2 className="max-w-3xl text-[11vw] font-extrabold uppercase leading-[0.84] tracking-[-0.05em] text-bone md:text-[5.5vw]">
          Nail<span className="text-oxblood">s.</span>
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-x-10">
        {nails.groups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 60}>
            <h3 className={`${mono} mb-4 text-oxblood`}>{g.title}</h3>
            <dl className="border-t border-border">
              {g.rows.map(([name, price]) => (
                <div
                  key={name}
                  className="group flex items-baseline justify-between gap-6 border-b border-border py-3 transition-colors hover:bg-oxblood md:px-3"
                >
                  <dt className="text-base font-semibold uppercase tracking-tight text-bone">{name}</dt>
                  <dd className={`${mono} text-right text-muted-foreground group-hover:text-bone`}>
                    {price}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-border pt-6">
          {nails.offers.map((o) => (
            <li key={o} className={`${mono} flex gap-3 text-ash`}>
              <span className="text-oxblood">/</span> {o}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="border-t border-border px-5 py-20 md:px-10 md:py-32">
      <Reveal>
        <SectionMark n="008" label="Method" />
        <h2 className="max-w-3xl text-[11vw] font-extrabold uppercase leading-[0.84] tracking-[-0.05em] text-bone md:text-[5.5vw]">
          Four steps from idea to <span className="text-oxblood">healed ink.</span>
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p, i) => (
          <Reveal key={p.n} delay={i * 90}>
            <div className="h-full bg-background p-6 transition-colors hover:bg-charcoal">
              <span className="text-6xl font-extrabold tracking-[-0.06em] text-oxblood">{p.n}</span>
              <h3 className={`${mono} mt-5 text-bone`}>{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Booking() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    style: "Black & Grey",
    placement: "",
    idea: "",
  });

  const waLink = `https://wa.me/${studio.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hi INK MINK TATTOOZ, I'd like to book.\nName: ${form.name}\nContact: ${form.contact}\nStyle: ${form.style}\nPlacement: ${form.placement}\nIdea: ${form.idea}`,
  )}`;

  const field =
    "w-full border-b border-border bg-transparent py-3 font-mono text-sm text-bone outline-none transition-colors placeholder:text-ash focus:border-oxblood";

  return (
    <section id="book" className="border-t border-border px-5 py-20 md:px-10 md:py-32">
      <Reveal>
        <SectionMark n="009" label="Enquiry" />
      </Reveal>
      <div className="grid gap-12 md:grid-cols-12 md:gap-x-6">
        <Reveal className="md:col-span-5">
          <h2 className="text-[13vw] font-extrabold uppercase leading-[0.82] tracking-[-0.05em] text-bone md:text-[6vw]">
            Tell us
            <br />
            the <span className="text-oxblood">idea.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Send your concept, placement and rough size. We reply with availability, an honest
            quote and the advance needed to hold your slot.
          </p>
          <div className={`${mono} mt-10 space-y-2`}>
            <p>
              <span className="text-ash">Call </span>
              <a href={`tel:${studio.phone}`} className="text-bone hover:text-oxblood">
                {studio.phone}
              </a>
            </p>
            <p>
              <span className="text-ash">Email </span>
              <a href={`mailto:${studio.email}`} className="text-bone hover:text-oxblood">
                {studio.email}
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-6 md:col-start-7 md:mt-20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              window.open(waLink, "_blank", "noopener");
            }}
            className="grid gap-7 sm:grid-cols-2"
          >
            <input
              required
              className={field}
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              className={field}
              placeholder="Phone or email"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
            />
            <select
              className={`${field} appearance-none`}
              value={form.style}
              onChange={(e) => setForm({ ...form, style: e.target.value })}
            >
              {services.map((s) => (
                <option key={s.title} className="bg-charcoal">
                  {s.title}
                </option>
              ))}
            </select>
            <input
              className={field}
              placeholder="Placement (e.g. forearm)"
              value={form.placement}
              onChange={(e) => setForm({ ...form, placement: e.target.value })}
            />
            <textarea
              required
              rows={4}
              className={`${field} sm:col-span-2 resize-none`}
              placeholder="Describe your idea, size and any reference"
              value={form.idea}
              onChange={(e) => setForm({ ...form, idea: e.target.value })}
            />
            <div className="sm:col-span-2 flex flex-wrap items-center gap-5">
              <button
                type="submit"
                className={`${mono} bg-oxblood px-8 py-3.5 text-bone transition-colors hover:bg-crimson`}
              >
                Send enquiry →
              </button>
              {sent && (
                <p className={`${mono} text-muted-foreground`}>
                  Opening WhatsApp. Press send there.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-border px-5 py-20 md:px-10 md:py-32">
      <Reveal>
        <SectionMark n="010" label="Questions" />
      </Reveal>
      <div className="grid gap-8 md:grid-cols-12 md:gap-x-6">
        <Reveal className="md:col-span-4">
          <h2 className="text-[12vw] font-extrabold uppercase leading-[0.82] tracking-[-0.05em] text-bone md:text-[4.5vw]">
            Before
            <br />
            you <span className="text-oxblood">sit.</span>
          </h2>
        </Reveal>
        <div className="md:col-span-7 md:col-start-6">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <div className="border-b border-border">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-5 text-left"
                >
                  <span className="flex gap-4">
                    <span className={`${mono} mt-1.5 text-oxblood`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl font-medium uppercase tracking-[-0.03em] text-bone md:text-2xl">
                      {f.q}
                    </span>
                  </span>
                  <span className={`${mono} text-oxblood`}>{open === i ? "−" : "+"}</span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${
                    open === i ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden pl-9 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="visit" className="border-t border-border">
      <div className="grid md:grid-cols-12">
        <div className="px-5 py-16 md:col-span-6 md:px-10 md:py-24">
          <SectionMark n="011" label="Visit" />
          <h2 className="text-[13vw] font-extrabold uppercase leading-[0.82] tracking-[-0.05em] text-bone md:text-[5vw]">
            Rohini,
            <br />
            <span className="text-oxblood">New Delhi</span>
          </h2>
          <p className={`${mono} mt-6 text-muted-foreground`}>{studio.address}</p>
          <dl className="mt-8 md:max-w-md">
            {studio.hours.map((h) => (
              <div key={h.day} className="flex justify-between border-b border-border py-3">
                <dt className={`${mono} text-ash`}>{h.day}</dt>
                <dd className={`${mono} text-bone`}>{h.time}</dd>
              </div>
            ))}
          </dl>
          <div className={`${mono} mt-10 flex flex-wrap gap-6`}>
            <a href={studio.instagram} target="_blank" rel="noopener" className="text-bone hover:text-oxblood">
              Instagram ↗
            </a>
            <a href={`tel:${studio.phone}`} className="text-bone hover:text-oxblood">
              Call
            </a>
            <a href="#book" className="text-oxblood">
              Book
            </a>
          </div>
          <p className={`${mono} mt-16 text-ash`}>
            © {new Date().getFullYear()} {studio.name}. All rights reserved.
          </p>
          <a href="https://www.instagram.com/vinceandco.in/" target="_blank" rel="noopener noreferrer" className={`${mono} mt-3 text-ash/70 transition-opacity hover:opacity-70`}>Designed &amp; Developed by Vince &amp; Co</a>
        </div>
        <div className="min-h-[340px] border-t border-border md:col-span-6 md:border-l md:border-t-0">
          <iframe
            title="Map to INK MINK TATTOOZ, Rohini"
            src={studio.mapEmbed}
            loading="lazy"
            className="h-full min-h-[340px] w-full grayscale contrast-125 invert-[0.92] hue-rotate-180"
          />
        </div>
      </div>
    </footer>
  );
}
