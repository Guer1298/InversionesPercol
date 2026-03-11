import { useEffect, useMemo, useRef, useState } from "react";

type Milestone = {
  dateLabel: string;
  isoDate: string;
  year: string;
  tag: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function Dot({ active }: { active: boolean }) {
  return (
    <span
      className={[
        "h-2.5 w-2.5 rounded-full border transition-all duration-200",
        active
          ? "border-[#7A4A2A] bg-[#7A4A2A] shadow-[0_0_0_4px_rgba(122,74,42,0.10)]"
          : "border-neutral-300 bg-white group-hover:border-[#4E6F3A]/40",
      ].join(" ")}
      aria-hidden
    />
  );
}

export default function DonBlasTimelineUX() {
  const milestones = useMemo<Milestone[]>(
    () => [
      {
        dateLabel: "Dec 2018",
        isoDate: "2018-12",
        year: "2018",
        tag: "Origin",
        title: "Don Blas starts with one rule: prove every lot.",
        text:
          "In Popayán, Colombia, Don Blas is built as the checkpoint between farms and export. The goal is simple: turn great parchment into buyer-ready certainty—through controlled milling, disciplined selection, and documentation you can file.",
        image: "/images/gallery/Donblas.png",
        alt: "Export-ready coffee sacks at Don Blas milling facility in Popayán, Colombia",
      },
      {
        dateLabel: "Mar 2019",
        isoDate: "2019-03",
        year: "2019",
        tag: "Buyers",
        title: "International buyers arrive—and traceability becomes non-negotiable.",
        text:
          "Early overseas partners wanted more than a great cup: they needed repeatable profiles, clean paperwork, and lots that match the sample. Don Blas answers with lot IDs, handling notes, and a workflow designed for faster approvals.",
        image: "/images/gallery/blas2.jpg",
        alt: "Interior view of Don Blas facility with storage and equipment for traceable green coffee lots",
      },
      {
        dateLabel: "Jun 2019",
        isoDate: "2019-06",
        year: "2019",
        tag: "Selection",
        title: "Manual selection turns quality into consistency.",
        text:
          "Under inspection light, hands and eyes remove what machines miss. This is where good coffee becomes an export lot that performs the same—bag after bag, shipment after shipment.",
        image: "/images/gallery/blas3.jpg",
        alt: "Manual sorting line at Don Blas for defect control and uniform green coffee",
      },
      {
        dateLabel: "Apr 2020",
        isoDate: "2020-04",
        year: "2020",
        tag: "Process",
        title: "Controlled milling protects density and reduces breakage.",
        text:
          "Process discipline is quality insurance. Don Blas strengthens milling control to protect bean integrity—keeping density stable and supporting cleaner, more consistent roasting performance.",
        image: "/images/gallery/blas4.jpg",
        alt: "Controlled milling equipment at Don Blas used to protect green coffee bean integrity",
      },
      {
        dateLabel: "Jul 2021",
        isoDate: "2021-07",
        year: "2021",
        tag: "Scale",
        title: "More demand. Same discipline.",
        text:
          "Growth only matters if consistency holds. Don Blas scales fundamentals—selection, traceability, and export structure—so what’s approved in sample is what arrives at origin ports.",
        image: "/images/gallery/blas5.jpg",
        alt: "Green coffee beans staged during processing at Don Blas to ensure uniform export lots",
      },
      {
        dateLabel: "Sep 2023",
        isoDate: "2023-09",
        year: "2023",
        tag: "Today",
        title: "A trusted checkpoint for Colombian green coffee exports.",
        text:
          "Today, Don Blas operates as the reliability layer for international buyers: controlled milling, manual defect control, and buyer-ready documentation—so decisions stay clean from sample to shipment.",
        image: "/images/gallery/blas6.jpg",
        alt: "Stacked coffee sacks with lot markings supporting traceable Colombian green coffee exports",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const active = milestones[index];

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const within = sectionRef.current?.contains(document.activeElement);
      if (!within) return;

      if (e.key === "ArrowLeft") setIndex((v) => clamp(v - 1, 0, milestones.length - 1));
      if (e.key === "ArrowRight") setIndex((v) => clamp(v + 1, 0, milestones.length - 1));
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [milestones.length]);

  const railRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const rail = railRef.current;
    const el = itemRefs.current[index];
    if (!rail || !el) return;

    const overflowing = rail.scrollWidth > rail.clientWidth + 8;
    if (!overflowing) return;

    const target = el.offsetLeft - rail.clientWidth / 2 + el.clientWidth / 2;
    rail.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [index]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
      aria-labelledby="donblas-timeline-title"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* Percol atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(78,111,58,0.06),transparent_34%),radial-gradient(circle_at_82%_82%,rgba(122,74,42,0.06),transparent_32%),radial-gradient(circle_at_55%_100%,rgba(196,58,47,0.03),transparent_18%)]" />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <header className="max-w-3xl">
          <div className="inline-flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[#7A4A2A]/15 bg-[#7A4A2A]/[0.06] px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-[#7A4A2A]">
              DON BLAS
            </span>
            <span className="text-[11px] font-semibold tracking-[0.14em] text-neutral-500">
              MILLING • SELECTION • TRACEABILITY
            </span>
          </div>

          <h2
            id="donblas-timeline-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl"
          >
            Don Blas is where export confidence begins.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            A visual timeline for buyers: controlled milling, manual defect control, and documentation
            designed to keep approvals clear from sample to shipment.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Lot IDs", "Defect control", "Export workflow", "Buyer-ready docs"].map((x, i) => (
              <span
                key={x}
                className={[
                  "rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide backdrop-blur",
                  i === 0
                    ? "border border-[#4E6F3A]/15 bg-[#4E6F3A]/[0.06] text-[#4E6F3A]"
                    : i === 1
                      ? "border border-[#7A4A2A]/15 bg-[#7A4A2A]/[0.06] text-[#7A4A2A]"
                      : i === 2
                        ? "border border-[#C43A2F]/10 bg-[#C43A2F]/[0.05] text-[#8E2F29]"
                        : "border border-neutral-200 bg-white/70 text-neutral-700",
                ].join(" ")}
              >
                {x}
              </span>
            ))}
          </div>
        </header>

        {/* Main */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* Image */}
          <figure className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-950 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <img
              src={active.image}
              alt={active.alt}
              className="h-[clamp(18rem,52vh,30rem)] w-full object-cover"
              loading="eager"
              decoding="async"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/18 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />

            <figcaption className="absolute left-4 top-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/90 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4E6F3A]" aria-hidden />
                {active.tag}
                <span className="opacity-60">•</span>
                <time dateTime={active.isoDate}>{active.year}</time>
              </div>
            </figcaption>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="max-w-xl">
                <div className="text-xs font-semibold tracking-wide text-white/70">
                  <time dateTime={active.isoDate}>{active.dateLabel}</time>
                </div>
                <div className="mt-1 text-lg font-semibold text-white">
                  {active.title}
                </div>
              </div>
            </div>
          </figure>

          {/* Text card */}
          <div className="flex flex-col justify-between rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] sm:p-8">
            <div>
              <div className="text-xs font-semibold tracking-[0.14em] text-neutral-500">
                THE STORY
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
                {active.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
                {active.text}
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {[
                  { k: "Location", v: "Popayán", tone: "green" },
                  { k: "Stage", v: "Milling + selection", tone: "brown" },
                  { k: "Buyer outcome", v: "Faster approval", tone: "red" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className={[
                      "rounded-2xl px-4 py-3",
                      x.tone === "green"
                        ? "border border-[#4E6F3A]/12 bg-[#4E6F3A]/[0.05]"
                        : x.tone === "brown"
                          ? "border border-[#7A4A2A]/12 bg-[#7A4A2A]/[0.05]"
                          : "border border-[#C43A2F]/10 bg-[#C43A2F]/[0.04]",
                    ].join(" ")}
                  >
                    <div className="text-[11px] font-semibold tracking-wide text-neutral-500">
                      {x.k}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-neutral-900">
                      {x.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 grid gap-2 sm:flex sm:items-center">
              <a
                href="#request-sample"
                className="inline-flex items-center justify-center rounded-full bg-[#7A4A2A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6A3F23] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4A2A]/20"
              >
                Request a sample
              </a>
              <a
                href="#download-qa"
                className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:border-[#4E6F3A]/20 hover:bg-[#4E6F3A]/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4A2A]/20"
              >
                Download QA checklist
              </a>
              <span className="text-xs text-neutral-500 sm:ml-1">
                500g / 1kg / 2kg • Worldwide courier
              </span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold tracking-[0.14em] text-neutral-500">
              TIMELINE
            </div>
            <div className="text-xs text-neutral-500 sm:hidden">
              Swipe →
            </div>
          </div>

          <div className="relative mt-4">
            <div className="pointer-events-none absolute left-0 right-0 top-[14px] hidden h-[2px] bg-neutral-200 sm:block" />

            <div
              ref={railRef}
              className="flex gap-6 overflow-x-auto pb-2 sm:overflow-visible sm:justify-between [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
              aria-label="Don Blas story milestones"
            >
              {milestones.map((m, idx) => {
                const isActive = idx === index;

                return (
                  <button
                    key={`${m.isoDate}-${idx}`}
                    ref={(el) => {
                      itemRefs.current[idx] = el;
                    }}
                    onClick={() => setIndex(idx)}
                    className={[
                      "group shrink-0 snap-center",
                      "flex flex-col items-center text-center",
                      "rounded-2xl px-2 py-1 transition",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4A2A]/20",
                    ].join(" ")}
                    aria-current={isActive ? "true" : undefined}
                    aria-label={`Open ${m.dateLabel}: ${m.title}`}
                  >
                    <Dot active={isActive} />
                    <span
                      className={[
                        "mt-3 text-sm transition",
                        isActive
                          ? "font-semibold text-neutral-900"
                          : "text-neutral-400 group-hover:text-[#7A4A2A]",
                      ].join(" ")}
                    >
                      {m.dateLabel}
                    </span>

                    <span
                      className={[
                        "mt-1 hidden text-[11px] font-semibold tracking-wide sm:block",
                        isActive ? "text-[#7A4A2A]" : "text-neutral-500",
                      ].join(" ")}
                    >
                      {m.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-3 text-xs text-neutral-500">
            Click a milestone to update the image and story. Use arrow keys while focused inside this section.
          </p>
        </div>
      </div>
    </section>
  );
}