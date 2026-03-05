import  { useMemo, useState } from "react";

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
      className="bg-white"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Ultra-min header */}
        <header className="max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-neutral-500">OUR ORIGINS</p>
          <h2
            id="origins-min-title"
            className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Built for repeatability.
          </h2>
          <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
            A few milestones that explain how we became export-ready—without the noise.
          </p>
        </header>

        {/* Minimal split: image + story */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Image (no gradients, no chips) */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
              <img
                src={active.image}
                alt={active.alt}
                className="h-[clamp(16rem,45vh,26rem)] w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Text (simple) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs text-neutral-500">
              <time dateTime={active.isoDate} className="font-medium">
                {active.dateLabel}
              </time>
              <span className="h-1 w-1 rounded-full bg-neutral-300" aria-hidden />
              <span className="font-medium">Milestone</span>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
              {active.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">{active.text}</p>

            {/* Minimal controls (not “timeline”, not dots) */}
            <div className="mt-6 flex flex-wrap gap-2">
              {milestones.map((m, i) => {
                const isActive = i === index;
                return (
                  <button
                    key={m.isoDate}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={[
                      "rounded-full px-3 py-1 text-sm transition",
                      isActive
                        ? "bg-neutral-900 text-white"
                        : "border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50",
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