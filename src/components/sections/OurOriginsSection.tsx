import { useMemo, useState } from "react";

type Milestone = {
  dateLabel: string;
  isoDate: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export default function OurOriginsMinimal() {
  const milestones = useMemo<Milestone[]>(
    () => [
      {
        dateLabel: "Dec 2018",
        isoDate: "2018-12",
        title: "We started with one rule: prove the lot.",
        text:
          "Our first exports showed what buyers really need—repeatable quality, clear documentation, and decisions that stay clean from sample to shipment.",
        image: "/images/Our.jpg",
        alt: "Coffee sacks prepared for export at our facility in Colombia",
      },
      {
        dateLabel: "Mar 2019",
        isoDate: "2019-03",
        title: "Traceability became the standard.",
        text:
          "Lot IDs, handling notes, and buyer-ready paperwork turned great coffee into confident re-orders—shipment after shipment.",
        image: "/images/Our.jpg",
        alt: "Facility interior showing storage and equipment for traceable coffee lots",
      },
      {
        dateLabel: "Jun 2019",
        isoDate: "2019-06",
        title: "Consistency is built by discipline.",
        text:
          "Selection and evaluation routines tightened. The goal stayed simple: the same performance, bag after bag.",
        image: "/images/Our.jpg",
        alt: "Manual coffee sorting line used for defect control and consistency",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const active = milestones[index];

  return (
    <section
      aria-labelledby="origins-min-title"
      className="relative overflow-hidden bg-white"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* soft Percol atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(122,74,42,0.06),transparent_24%),radial-gradient(circle_at_82%_82%,rgba(78,111,58,0.05),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(196,58,47,0.03),transparent_16%)]" />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <header className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-neutral-600">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4E6F3A]" />
            OUR ORIGINS
          </div>

          <h2
            id="origins-min-title"
            className="mt-5 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl"
          >
            Built for repeatability. <br className="hidden sm:block" />
            Refined for export.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
            A few milestones that explain how Percol became a cleaner, more reliable
            export operation—without adding noise to the story.
          </p>
        </header>

        {/* Split layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* Image */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-neutral-50 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <img
                src={active.image}
                alt={active.alt}
                className="h-[clamp(18rem,48vh,30rem)] w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs font-medium tracking-wide text-neutral-500">
              <time dateTime={active.isoDate}>{active.dateLabel}</time>
              <span className="h-1 w-1 rounded-full bg-[#7A4A2A]/30" aria-hidden />
              <span className="text-[#7A4A2A]">Milestone</span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
              {active.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
              {active.text}
            </p>

            {/* quiet supporting line */}
            <div className="mt-6 border-l border-[#4E6F3A]/25 pl-4 text-sm leading-6 text-neutral-500">
              Quality became repeatable when process, paperwork, and buyer expectations started working together.
            </div>

            {/* Milestones */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {milestones.map((m, i) => {
                const isActive = i === index;

                return (
                  <button
                    key={m.isoDate}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={[
                      "rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4A2A]/20",
                      isActive
                        ? "bg-[#7A4A2A] text-white shadow-sm"
                        : "border border-neutral-200 bg-white text-neutral-700 hover:border-[#4E6F3A]/25 hover:bg-[#4E6F3A]/[0.04]",
                    ].join(" ")}
                    aria-current={isActive ? "true" : undefined}
                    aria-label={`Open ${m.dateLabel}: ${m.title}`}
                  >
                    {m.dateLabel}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}