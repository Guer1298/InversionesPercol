export default function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image (FULL SCREEN) */}
      <div className="relative h-dvh w-full">
        <img
          src="/public/images/Hero.jpg"
          alt="PERCOL green coffee export operations"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
        <div className="pointer-events-none absolute -bottom-32 -left-28 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            {/* Micro trust bar */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/95 backdrop-blur">
              <span>DIRECT EXPORTER</span>
              <span className="opacity-60">•</span>
              <span>VERIFIED QA</span>
              <span className="opacity-60">•</span>
              <span>WORLDWIDE SHIPPING</span>
              <span className="opacity-60">•</span>
              <span>RESPONSE ≤ 24H</span>
            </div>

            {/* Headline */}
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Export-ready Colombian green coffee.
              <span className="block text-white/80">Built for buyers who need proof.</span>
            </h1>

            {/* Subcopy */}
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
              Live lots with traceability, clear MOQs (Air/Sea), and downloadable QA documentation. Evaluate faster.
              Ship with clarity.
            </p>

            {/* KPI cards */}
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

            {/* CTAs */}
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

              <div className="text-xs text-white/70 sm:ml-2">
                Samples: 500g / 1kg / 2kg • Courier worldwide
              </div>
            </div>
          </div>

          {/* Scroll cue (opcional, pro) */}
          <div className="mt-10 flex items-center gap-2 text-xs text-white/60">
            <span className="inline-block h-5 w-3 rounded-full border border-white/30" />
            <span>Scroll</span>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/25 to-transparent" />
    </section>
  );
}