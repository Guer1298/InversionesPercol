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
      className="relative w-full overflow-hidden"
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

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
        <div className="pointer-events-none absolute -bottom-32 -left-28 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />

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
                        ? "bg-white/90 border-white/70"
                        : "bg-white/15 border-white/35 hover:bg-white/35"
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white/90 backdrop-blur hover:bg-black/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Previous slide"
              >
                <span aria-hidden className="text-lg leading-none">‹</span>
              </button>
              <button
                type="button"
                onClick={next}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white/90 backdrop-blur hover:bg-black/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
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
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/95 backdrop-blur">
              <span>DIRECT EXPORTER</span>
              <span className="opacity-60">•</span>
              <span>VERIFIED QA</span>
              <span className="opacity-60">•</span>
              <span>WORLDWIDE SHIPPING</span>
              <span className="opacity-60">•</span>
              <span>RESPONSE ≤ 24H</span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Export-ready Colombian green coffee.
              <span className="block text-white/80">Built for buyers who need proof.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
              Live lots with traceability, clear MOQs (Air/Sea), and downloadable QA documentation. Evaluate faster.
              Ship with clarity.
            </p>

            <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "Active lots", value: "18" },
                { label: "Available kg", value: "64,350" },
                { label: "MOQ Air", value: "10 kg" },
                { label: "MOQ Sea", value: "700 kg" },
              ].map((k) => (
                <div key={k.label} className="rounded-xl border border-white/15 bg-black/25 p-3 backdrop-blur">
                  <div className="text-lg font-semibold text-white">{k.value}</div>
                  <div className="mt-0.5 text-xs text-white/70">{k.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#request-sample"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-100"
              >
                Request Sample
              </a>

              <a
                href="/inventory"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
              >
                View Live Inventory
              </a>

              <div className="text-xs text-white/70 sm:ml-2">Samples: 500g / 1kg / 2kg • Courier worldwide</div>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-2 text-xs text-white/60">
            <span className="inline-block h-5 w-3 rounded-full border border-white/30" />
            <span>Scroll</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/25 to-transparent" />
    </section>
  );
}