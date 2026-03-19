import React, { useCallback, useEffect, useMemo, useRef, useState, type JSX } from "react";

type Slide = {
  src: string;
  alt: string;
};

export default function Hero(): JSX.Element {
  const slides: Slide[] = useMemo(
    () => [
      { src: "/images/Hero.jpg", alt: "Coffee farm in Cauca" },
      { src: "/images/hero/Hero_2.jpg", alt: "Coffee processing" },
      { src: "/images/hero/Hero_3.jpg", alt: "Quality control and cupping" },
    ],
    []
  );

  const AUTOPLAY_MS = 6000;

  const [index, setIndex] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  // prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setIsReducedMotion(mq.matches);
    update();

    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // autoplay
  useEffect(() => {
    if (isHovering || isReducedMotion) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [isHovering, isReducedMotion, next]);

  // swipe
  const touchRef = useRef<{ x: number; t: number } | null>(null);

  const onTouchStart: React.TouchEventHandler = (e) => {
    const touch = e.touches[0];
    touchRef.current = { x: touch.clientX, t: Date.now() };
  };

  const onTouchEnd: React.TouchEventHandler = (e) => {
    const start = touchRef.current;
    const touch = e.changedTouches[0];
    if (!start) return;

    const dx = touch.clientX - start.x;
    const dt = Date.now() - start.t;

    if (Math.abs(dx) > 50 && dt < 600) {
      dx < 0 ? next() : prev();
    }
  };

  return (
    <section
      className="relative h-dvh w-full overflow-hidden bg-neutral-950"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* SLIDER */}
      <div
        className="absolute inset-0 flex"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: isReducedMotion ? "none" : "transform 700ms ease",
        }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative w-full flex-shrink-0">
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      {/* HERO CONTENT */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl">

            {/* TRUST BAR */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] tracking-[0.14em] text-white/90 backdrop-blur-md">
              <span>COLOMBIA</span>
              <span className="opacity-50">•</span>
              <span className="text-[#4E6F3A]">TRACEABLE</span>
              <span className="opacity-50">•</span>
              <span>EXPORT READY</span>
            </div>

            {/* HEADLINE */}
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
              Colombian coffee
              <span className="block text-white/70">
                backed by data, not assumptions
              </span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
              We export consistency and traceability from Cauca.
              Every lot is documented, measurable, and ready for global buyers.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">

              <a
                href="/catalog"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
              >
                View Catalog
              </a>

              <a
                href="#request-samples"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Request Samples
              </a>
            </div>

            {/* TRUST LINE */}
            <p className="mt-4 text-xs text-white/60">
              Direct export from Cauca • Transparent lots • Response within 24h
            </p>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}