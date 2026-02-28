type Spec = { label: string; value: string };

const specs: Spec[] = [
  { label: "Location", value: "Popayán, Colombia" },
  { label: "Process", value: "Parchment removal + sorting" },
  { label: "Quality", value: "Export-grade QC (ICO aligned)" },
];

const bullets = [
  "Controlled threshing to protect bean integrity.",
  "Manual/visual selection for defects and consistency.",
  "Batch traceability supported by documentation.",
  "Infrastructure prepared for export requirements.",
];

export default function ThresherDonBlasSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="text-xs font-semibold tracking-wide text-neutral-500">
            STAGE 4 • PROCESS EQUIPMENT
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Thresher Machine — Don Blas
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-neutral-600">
            Parchment removal and selection under controlled conditions for export-ready lots.
          </p>
        </div>

        {/* Content */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* Images */}
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-12">
              {/* Main image */}
              <div className="sm:col-span-12">
                <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
                  <img
                    src="/public/images/Donblas.png"
                    alt="Don Blas thresher facility"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  {/* subtle bottom gradient for readability if you add labels */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Secondary images */}
              <div className="sm:col-span-6">
                <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
                  <img
                    src="/public/images/image copy.png"
                    alt="Coffee sacks and lot handling"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
                  <img
                    src="/public/images/image.png"
                    alt="Manual sorting line"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Proof card */}
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-neutral-900">Operational proof</div>
              <p className="mt-2 text-xs leading-5 text-neutral-600">
                Minimal, verifiable claims for importers.
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

              <a
                href="#request-sample"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Request Sample
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}