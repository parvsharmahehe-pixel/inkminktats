import fs from "node:fs";
import path from "node:path";

// Values used only while generating the Hero source below.
// They mirror the constants imported by src/routes/index.tsx.
const mono = "font-mono text-[0.62rem] uppercase tracking-[0.22em]";
const studio = { city: "Rohini, New Delhi", tagline: "Custom tattoo atelier in Rohini, New Delhi" };

const file = path.resolve("src/routes/index.tsx");
let source = fs.readFileSync(file, "utf8");

source = source.replace(
  'import { useEffect, useMemo, useState } from "react";',
  'import { useEffect, useMemo, useRef, useState } from "react";',
);
source = source.replace('import heroVideo from "@/assets/hero.mp4.asset.json";\n', "");

const start = source.indexOf("function Hero() {");
const end = source.indexOf("function Ticker() {");
if (start === -1 || end === -1 || end <= start) {
  throw new Error("Could not locate Hero function in src/routes/index.tsx");
}

const hero = `function Hero() {
  const heroRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroRef.current;
    if (!video) return;

    // iOS/Safari requires the video to be explicitly muted and inline before
    // attempting autoplay. Retry whenever media becomes ready.
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");

    const forcePlay = () => {
      video.muted = true;
      void video.play().catch(() => {
        // Browser may defer autoplay briefly; readiness events retry it.
      });
    };

    video.addEventListener("loadedmetadata", forcePlay);
    video.addEventListener("loadeddata", forcePlay);
    video.addEventListener("canplay", forcePlay);
    forcePlay();

    return () => {
      video.removeEventListener("loadedmetadata", forcePlay);
      video.removeEventListener("loadeddata", forcePlay);
      video.removeEventListener("canplay", forcePlay);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden border-b border-border">
      {/* film: dominates the right side on desktop, full bleed behind type on mobile */}
      <div className="grain-overlay absolute inset-0 md:left-[38%]">
        <video
          ref={heroRef}
          className="h-full w-full object-cover"
          src="/hero.mp4"
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
        />
        <div className="absolute inset-0 bg-background/55 md:bg-gradient-to-r md:from-background md:via-background/25 md:to-background/40" />
      </div>

      <div className="absolute inset-y-0 left-0 z-20 hidden w-[3.25rem] items-center justify-center border-r border-border/60 md:flex">
        <span className={\`${mono} vertical-label text-ash\`}>
          Rohini, New Delhi / Custom ink only / Est. atelier
        </span>
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-14 pl-5 pr-5 pt-32 md:pb-20 md:pl-[6.5rem] md:pr-10">
        <span className={\`${mono} text-oxblood\`}>[ 001 ] Tattoo atelier</span>
        <h1 className="mt-6 text-[19vw] font-extrabold uppercase leading-[0.78] tracking-[-0.05em] text-bone md:text-[13.5vw]">
          Ink
          <br />
          <span className="inline-block md:translate-x-[0.12em]">Mink</span>
          <br />
          <span className="text-oxblood">Tattooz</span>
        </h1>
        <div className="mt-10 grid max-w-4xl gap-6 border-t border-border/70 pt-6 md:grid-cols-12">
          <p className={\`${mono} text-ash md:col-span-3\`}>Fig. A: {studio.city}</p>
          <p className="text-sm leading-relaxed text-muted-foreground md:col-span-6">
            {studio.tagline}. Designed for one body, drawn once, worn for life.
          </p>
          <div className="flex flex-wrap items-start gap-3 md:col-span-3">
            <a
              href="#book"
              className={\`${mono} bg-oxblood px-6 py-3 text-bone transition-colors hover:bg-crimson\`}
            >
              Book a consult
            </a>
            <a
              href="#work"
              className={\`${mono} border border-bone/25 px-6 py-3 text-bone transition-colors hover:border-oxblood hover:text-oxblood\`}
            >
              Work ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

`;

source = source.slice(0, start) + hero + source.slice(end);
fs.writeFileSync(file, source);
console.log("Applied Ink Mink mobile hero autoplay fix.");
