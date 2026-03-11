import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * HeroSlider (fixed)
 * - Autoplay + pause on hover/focus
 * - Keyboard navigation
 * - Swipe (touch)
 * - Dots + arrows
 */

export default function HeroSlider() {
  const slides = useMemo(
    () => [
      { src: "/images/Hero.jpg", alt: "PERCOL green coffee export operations" },
      { src: "/images/hero/Hero_2.jpg", alt: "PERCOL coffee drying process" },
      { src: "/images/hero/Hero_3.jpg", alt: "PERCOL cupping and quality control" },
    ],
    []
  );

  const AUTOPLAY_MS = 6000;

  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // ✅ prefers-reduced-motion (modern + Safari fallback)
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;

    const update = () => setIsReducedMotion(mq.matches);
    update();

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }

    // Safari (older)
    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      setIndex(() => {
        const len = slides.length || 1;
        return (i + len) % len;
      });
    },
    [slides.length]
  );

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // ✅ Autoplay
  useEffect(() => {
    if (isHovering || isReducedMotion || slides.length <= 1) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [isHovering, isReducedMotion, slides.length, AUTOPLAY_MS]);

  // ✅ Keyboard nav
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev]);

  // ✅ Touch swipe
  const touchRef = useRef<{ x: number; y: number; t: number } | null>(null);

  const onTouchStart: React.TouchEventHandler<HTMLElement> = (e) => {
    const touch = e.touches[0];
    if (!touch) return;
    touchRef.current = { x: touch.clientX, y: touch.clientY, t: Date.now() };
  };

  const onTouchEnd: React.TouchEventHandler<HTMLElement> = (e) => {
    const start = touchRef.current;
    const touch = e.changedTouches[0];
    if (!start || !touch) return;

    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    const dt = Date.now() - start.t;

    // ignore vertical scroll gestures
    if (Math.abs(dy) > Math.abs(dx)) return;

    const threshold = 50;
    const isQuick = dt < 650;

    if (Math.abs(dx) > threshold && isQuick) {
      if (dx < 0) next();
      else prev();
    }

    touchRef.current = null;
  };

  return (
    <section
  className="relative w-full overflow-hidden bg-neutral-950"
  aria-roledescription="carousel"
  aria-label="Hero images"
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
  onFocusCapture={() => setIsHovering(true)}
  onBlurCapture={() => setIsHovering(false)}
  onTouchStart={onTouchStart}
  onTouchEnd={onTouchEnd}
  style={{ touchAction: "pan-y" }}
>
  {/* Slides */}
  <div className="relative h-dvh w-full">
    <div
      className="absolute inset-0 flex h-full w-full"
      style={{
        transform: `translate3d(${-index * 100}%, 0, 0)`,
        transition: isReducedMotion ? "none" : "transform 700ms ease",
        willChange: "transform",
      }}
    >
      {slides.map((s, idx) => (
        <div key={s.src} className="relative h-full w-full shrink-0">
          <img
            src={s.src}
            alt={s.alt}
            className="absolute inset-0 h-full w-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
          />
        </div>
      ))}
    </div>

    {/* Brand overlays */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

    {/* Percol color atmosphere */}
    <div className="pointer-events-none absolute -bottom-24 -left-20 h-[26rem] w-[26rem] rounded-full bg-[#7A4A2A]/25 blur-3xl" />
    <div className="pointer-events-none absolute top-16 right-[-5rem] h-[24rem] w-[24rem] rounded-full bg-[#4E6F3A]/20 blur-3xl" />
    <div className="pointer-events-none absolute bottom-12 right-1/4 h-[12rem] w-[12rem] rounded-full bg-[#C43A2F]/12 blur-3xl" />

    {/* Soft vignette */}
    <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-120px_120px_rgba(0,0,0,0.45)]" />

    {/* Controls */}
    <div className="absolute inset-x-0 bottom-6 z-20">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full border transition ${
                  active
                    ? "border-[#4E6F3A] bg-[#4E6F3A]"
                    : "border-white/30 bg-white/10 hover:border-white/60 hover:bg-white/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={active ? "true" : undefined}
              />
            );
          })}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white/90 backdrop-blur-md transition hover:border-[#7A4A2A]/60 hover:bg-[#7A4A2A]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Previous slide"
          >
            <span aria-hidden className="text-lg leading-none">‹</span>
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white/90 backdrop-blur-md transition hover:border-[#7A4A2A]/60 hover:bg-[#7A4A2A]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Next slide"
          >
            <span aria-hidden className="text-lg leading-none">›</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Content */}
  <div className="absolute inset-0 flex items-end">
    <div className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
      <div className="max-w-3xl">
        {/* Trust bar */}
        <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white/95 backdrop-blur-md">
          <span>DIRECT EXPORTER</span>
          <span className="opacity-50">•</span>
          <span className="text-[#4E6F3A]">VERIFIED QA</span>
          <span className="opacity-50">•</span>
          <span>WORLDWIDE SHIPPING</span>
          <span className="opacity-50">•</span>
          <span>RESPONSE ≤ 24H</span>
        </div>

        {/* Headline */}
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Export-ready Colombian
          <span className="block text-white/75">green coffee, built for clarity.</span>
        </h1>

        {/* Subcopy */}
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
          Live lots with traceability, clear MOQs, and buyer-ready QA documentation.
          Move faster from sample approval to shipment.
        </p>

        {/* KPI cards */}
        <div className="mt-7 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Active lots", value: "18" },
            { label: "Available kg", value: "64,350" },
            { label: "MOQ Air", value: "10 kg" },
            { label: "MOQ Sea", value: "700 kg" },
          ].map((k, idx) => (
            <div
              key={k.label}
              className={`rounded-2xl border p-3.5 backdrop-blur-md ${
                idx === 0
                  ? "border-[#4E6F3A]/25 bg-[#4E6F3A]/10"
                  : idx === 1
                    ? "border-[#7A4A2A]/25 bg-[#7A4A2A]/10"
                    : "border-white/10 bg-white/8"
              }`}
            >
              <div className="text-lg font-semibold text-white">{k.value}</div>
              <div className="mt-0.5 text-xs text-white/70">{k.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#request-sample"
            className="inline-flex items-center justify-center rounded-full bg-[#7A4A2A] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(122,74,42,0.28)] transition hover:bg-[#6A3F23]"
          >
            Request Sample
          </a>

          <a
            href="/inventory"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/15"
          >
            View Live Inventory
          </a>

          <div className="text-xs text-white/65 sm:ml-2">
            Samples: 500g / 1kg / 2kg • Courier worldwide
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="mt-10 flex items-center gap-2 text-xs text-white/55">
        <span className="inline-flex h-5 w-3 rounded-full border border-white/25" />
        <span>Scroll</span>
      </div>
    </div>
  </div>

  {/* Bottom fade */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#7A4A2A]/18 via-transparent to-transparent" />
</section>
  );
}