type Spec = { label: string; value: string };

const specs: Spec[] = [
  { label: "Bag type", value: "Natural jute export bags" },
  { label: "Net weight", value: "70 kg (standard)" }, // ajusta si aplica
  { label: "Marking", value: "Lot / origin / variety / crop year" },
  { label: "Traceability", value: "Each bag linked to QA documentation" },
];

const bullets = [
  "Export-ready packaging for container shipment and warehouse handling.",
  "Clear printed identification for lots, origin, and profile consistency.",
  "Supports importer workflows: receiving, storage, sampling, and QC.",
];

export default function ExportBagsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="text-xs font-semibold tracking-wide text-neutral-500">
            PACKAGING • EXPORT HANDLING
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Green coffee bags for export
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-neutral-600">
            Standardized labeling and durable packaging designed for professional import logistics.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* Image grid */}
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-12">
              {/* Main */}
              <div className="sm:col-span-12">
                <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
                  <img
                    src="/images/Sacospercol.png"
                    alt="Export green coffee bag with printed markings"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* 3 small */}
              {["02", "03", "04"].map((n) => (
                <div key={n} className="sm:col-span-4">
                  <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
                    <img
                      src={`/images/packaging/bags/${n}.jpg`}
                      alt={`Green coffee bag detail ${n}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Proof card */}
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-neutral-900">Packaging proof</div>
              <p className="mt-2 text-xs leading-5 text-neutral-600">
                Clear labeling and handling standards to reduce receiving friction for importers.
              </p>

              <div className="mt-4 grid gap-2">
                {bullets.map((b) => (
                  <div key={b} className="flex gap-3 text-sm text-neutral-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-2">
                {specs.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3"
                  >
                    <div className="text-xs text-neutral-500">{s.label}</div>
                    <div className="mt-1 text-sm font-semibold text-neutral-900">{s.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-2">
                <a
                  href="/documentation"
                  className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
                >
                  View QA Documentation
                </a>
                <a
                  href="#request-sample"
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                >
                  Request Sample
                </a>
              </div>

              <div className="mt-3 text-xs text-neutral-500">
                Optional: add “GrainPro available” if you use inner liners.
              </div>
            </div>
          </aside>
        </div>

        {/* Minimal footer note */}
        <div className="mt-6 text-xs text-neutral-500">
          *Photos show real export packaging used for green coffee shipments (example lots and printed profiles).
        </div>
      </div>
    </section>
  );
}