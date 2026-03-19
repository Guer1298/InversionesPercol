import type { JSX } from "react";
import {
  Ship,
  FileCheck,
  PackageCheck,
  Clock3,
  ArrowRight,
  ShieldCheck,
  MapPinned,
} from "lucide-react";

/* =========================
   MAIN PAGE
========================= */
export default function LogisticsPage(): JSX.Element {
  return (
    <main className="bg-white">
      <PageHeader />
      <ExportSection />
      <PackagingSection />
      <TimingSection />
      <ProcessSection />
      <FinalLogisticsCTA />
    </main>
  );
}

/* =========================
   PAGE HEADER
========================= */
function PageHeader() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          Logistics
        </p>

        <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Logistics built to reduce friction from lot selection to delivery
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
          Percol structures export operations with clarity, packaging control,
          and predictable timelines so buyers can move forward with fewer
          unknowns and better visibility.
        </p>
      </div>
    </section>
  );
}

/* =========================
   7.1 EXPORTACIÓN
========================= */
function ExportSection() {
  return (
    <section className="border-b border-neutral-200 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            7.1 Export structure
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Export clarity from the start
          </h2>

          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Operational clarity reduces delays, misalignment, and costly
            assumptions. That is why Percol structures every shipment with clear
            terms, routing visibility, and documentation discipline.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <InfoBlock
            icon={<FileCheck size={18} />}
            title="Incoterms"
            content="FOB and CIF structures available depending on buyer requirements and shipment logic."
          />

          <InfoBlock
            icon={<MapPinned size={18} />}
            title="Ports"
            content="Buenaventura is the primary Pacific export port, with alternative routing when needed."
          />

          <InfoBlock
            icon={<ShieldCheck size={18} />}
            title="Export conditions"
            content="Standardized documentation, pre-shipment quality verification, and release controls."
          />
        </div>
      </div>
    </section>
  );
}

/* =========================
   7.2 EMPAQUE
========================= */
function PackagingSection() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        {/* Visual */}
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200">
          <img
            src="/images/logistics/grainpro.jpg"
            alt="GrainPro coffee packaging protecting specialty green coffee"
            className="h-72 w-full object-cover sm:h-80 lg:h-[420px]"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            7.2 Packaging
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Packaging designed to preserve cup quality
          </h2>

          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Coffee quality does not end at the farm. It must be protected
            through storage, handling, and shipment with systems that reduce
            exposure to humidity, oxygen, and contamination.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <MiniCard
              label="GrainPro"
              value="Hermetic barrier against moisture and oxygen"
            />
            <MiniCard
              label="Protection"
              value="Double-layer system with GrainPro and jute bags"
            />
            <MiniCard
              label="Standard"
              value="Export-grade packing aligned with specialty requirements"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   7.3 TIEMPOS
========================= */
function TimingSection() {
  return (
    <section className="border-b border-neutral-200 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            7.3 Timelines
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Predictable timelines support better planning
          </h2>

          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Buyers do not just need coffee shipped. They need visibility into
            preparation time, export coordination, and route timing.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <TimelineBlock
            icon={<PackageCheck size={18} />}
            title="Preparation"
            value="3–5 days"
            desc="Lot preparation, quality control, and documentation readiness."
          />

          <TimelineBlock
            icon={<Ship size={18} />}
            title="Export lead time"
            value="5–10 days"
            desc="Coordination, port handling, and export release processes."
          />

          <TimelineBlock
            icon={<Clock3 size={18} />}
            title="Shipping"
            value="15–30 days"
            desc="Transit window depending on destination, route, and logistics structure."
          />
        </div>
      </div>
    </section>
  );
}

/* =========================
   7.4 PROCESO LOGÍSTICO
========================= */
function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "Order",
      desc: "Buyer confirms the selected lot, commercial terms, and shipment structure.",
    },
    {
      id: "02",
      title: "Preparation",
      desc: "Percol validates quality, prepares packaging, and finalizes export documentation.",
    },
    {
      id: "03",
      title: "Shipment",
      desc: "The lot moves through export handling and international transport coordination.",
    },
    {
      id: "04",
      title: "Delivery",
      desc: "Coffee arrives with a clear operational trail from origin to final destination.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            7.4 Process
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            From order to delivery, with less friction
          </h2>

          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            A structured process creates operational clarity and reduces the
            uncertainty that often slows down cross-border coffee purchasing.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.id}
              className="group relative rounded-3xl border border-neutral-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.14em] text-neutral-400">
                  {step.id}
                </span>

                {index < steps.length - 1 && (
                  <span className="hidden xl:inline-flex text-neutral-300">
                    <ArrowRight size={18} />
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-base font-semibold tracking-tight text-neutral-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {step.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   CTA
========================= */
function FinalLogisticsCTA() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          Need a clearer path from lot selection to shipment?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
          Percol helps buyers evaluate coffee, understand logistics conditions,
          and move forward with more operational certainty.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Request samples
          </a>

          <a
            href="/catalog"
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-900"
          >
            View catalog
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================
   COMPONENTS
========================= */
function InfoBlock({
  icon,
  title,
  content,
}: {
  icon: JSX.Element;
  title: string;
  content: string;
}) {
  return (
    <article className="rounded-3xl border border-neutral-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-800">
        {icon}
      </div>

      <h3 className="mt-5 text-base font-semibold tracking-tight text-neutral-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-neutral-600">{content}</p>
    </article>
  );
}

function TimelineBlock({
  icon,
  title,
  value,
  desc,
}: {
  icon: JSX.Element;
  title: string;
  value: string;
  desc: string;
}) {
  return (
    <article className="rounded-3xl border border-neutral-200 bg-white p-5 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-800">
        {icon}
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
        {title}
      </p>

      <p className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
        {value}
      </p>

      <p className="mt-3 text-sm leading-6 text-neutral-600">{desc}</p>
    </article>
  );
}

function MiniCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium leading-6 text-neutral-900">
        {value}
      </p>
    </div>
  );
}