

export default function CTASection() {
  return (
    <section
      id="request-sample"
      aria-labelledby="cta-request-sample"
      className="relative isolate overflow-hidden rounded-3xl border border-neutral-200 bg-white"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* subtle, premium texture (minimal but high-impact) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(16,185,129,0.08),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(245,158,11,0.07),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white" />
      </div>

      <div className="p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left: message */}
          <div className="lg:col-span-7">
            {/* small trust label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-[11px] font-semibold tracking-wide text-neutral-700 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
              SAMPLES • FAST REPLY
              <span className="opacity-40">•</span>
              ≤ 24h
            </div>

            <h2
              id="cta-request-sample"
              className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl"
            >
              Request a sample that matches your buying workflow.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
              Tell us your target profile, volume, and destination. We’ll respond with available lots, QC notes,
              and shipping options—so approvals stay clean from sample to shipment.
            </p>

            {/* micro form (no backend needed; UX value) */}
            <div className="mt-6 grid gap-3 sm:grid-cols-12">
              <label className="sm:col-span-4">
                <span className="text-xs font-semibold text-neutral-700">Target profile</span>
                <input
                  type="text"
                  placeholder="e.g., clean, floral, high density"
                  className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
                />
              </label>

              <label className="sm:col-span-4">
                <span className="text-xs font-semibold text-neutral-700">Volume</span>
                <input
                  type="text"
                  placeholder="e.g., 10–20 bags"
                  className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
                />
              </label>

              <label className="sm:col-span-4">
                <span className="text-xs font-semibold text-neutral-700">Destination</span>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20"
              >
                Request samples
              </a>

              <a
                href="/inventory"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10"
              >
                View inventory
              </a>

              <div className="text-xs text-neutral-500 sm:ml-auto">
                Include: roast style • screen size • moisture target (optional)
              </div>
            </div>
          </div>

          {/* Right: “proof” card */}
          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-neutral-900">Sample kit</div>
                  <p className="mt-1 text-sm leading-6 text-neutral-600">
                    Everything you need to evaluate quickly—without back-and-forth.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-center">
                  <div className="text-[11px] font-semibold tracking-wide text-neutral-500">REPLY</div>
                  <div className="text-sm font-semibold text-neutral-900">≤ 24h</div>
                </div>
              </div>

              <div className="mt-5 grid gap-2">
                {[
                  { k: "Sizes", v: "500g / 1kg / 2kg" },
                  { k: "Shipping", v: "Worldwide courier options" },
                  { k: "Included", v: "Lot ID + QC notes + docs" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3"
                  >
                    <span className="text-xs font-semibold text-neutral-600">{x.k}</span>
                    <span className="text-sm font-semibold text-neutral-900">{x.v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-neutral-200 bg-white px-4 py-3">
                <div className="text-xs font-semibold text-neutral-700">What to send us</div>
                <p className="mt-1 text-xs leading-5 text-neutral-600">
                  Profile goals, volume, destination, and timeline. If you have them: roast approach, water style,
                  and your QC requirements.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}