import React, { useMemo, useState, type JSX } from "react";
import {
  MapPinned,
  Droplets,
  Wind,
  Cpu,
  Radio,
  Activity,
  ShieldCheck,
  Clock3,
} from "lucide-react";

/* =========================
   TYPES
========================= */
type Farm = {
  id: string;
  name: string;
  area: string;
  producer: string;
  coordinates: {
    top: string;
    left: string;
  };
  lot: {
    harvest: string;
    process: string;
    moisture: string;
    drying: string;
  };
};

/* =========================
   MOCK DATA
========================= */
const farms: Farm[] = [
  {
    id: "1",
    name: "Finca El Paraíso",
    area: "Popayán, Cauca",
    producer: "Juan Pérez",
    coordinates: {
      top: "42%",
      left: "34%",
    },
    lot: {
      harvest: "Jan 2026",
      process: "Washed",
      moisture: "10.5%",
      drying: "Solar drying beds",
    },
  },
  {
    id: "2",
    name: "Finca La Esperanza",
    area: "Timbío, Cauca",
    producer: "Carlos Gómez",
    coordinates: {
      top: "55%",
      left: "58%",
    },
    lot: {
      harvest: "Feb 2026",
      process: "Washed",
      moisture: "10.8%",
      drying: "Mechanical + sun",
    },
  },
  {
    id: "3",
    name: "Finca La Loma",
    area: "Caldono, Cauca",
    producer: "María Velasco",
    coordinates: {
      top: "30%",
      left: "62%",
    },
    lot: {
      harvest: "Mar 2026",
      process: "Natural",
      moisture: "10.3%",
      drying: "Raised beds",
    },
  },
];

/* =========================
   MAIN PAGE
========================= */
export default function TraceabilityPage(): JSX.Element {
  const [selected, setSelected] = useState<Farm>(farms[0]);

  const metrics = useMemo(
    () => [
      {
        label: "Linked farm",
        value: selected.name,
        icon: <MapPinned size={18} />,
      },
      {
        label: "Moisture",
        value: selected.lot.moisture,
        icon: <Droplets size={18} />,
      },
      {
        label: "Drying",
        value: selected.lot.drying,
        icon: <Wind size={18} />,
      },
      {
        label: "Harvest",
        value: selected.lot.harvest,
        icon: <Clock3 size={18} />,
      },
    ],
    [selected]
  );

  return (
    <main className="bg-white">
      {/* =========================
         PAGE HEADER
      ========================= */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Traceability
          </p>

          <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Traceability that reduces uncertainty before the first shipment
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Every lot is connected to a real farm, a real producer, and a
            visible process. This is how Percol turns origin into something
            buyers can verify, not just trust.
          </p>
        </div>
      </section>

      <MapSection selected={selected} setSelected={setSelected} />

      <LotDataSection farm={selected} metrics={metrics} />

      <TechnologySection />

      <DashboardSection />
    </main>
  );
}

/* =========================
   4.1 MAP
========================= */
function MapSection({
  selected,
  setSelected,
}: {
  selected: Farm;
  setSelected: (farm: Farm) => void;
}) {
  return (
    <section className="border-b border-neutral-200 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            4.1 Farm map
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Farm-level visibility in Cauca
          </h2>
          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Select a farm to review lot-level data, process records, and
            traceability details.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Map */}
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 sm:min-h-[440px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(229,229,229,0.9))]" />

            {/* Subtle fake topography */}
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:28px_28px]" />

            {farms.map((farm) => {
              const isActive = selected.id === farm.id;

              return (
                <button
                  key={farm.id}
                  onClick={() => setSelected(farm)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 transition ${
                    isActive ? "z-20" : "z-10"
                  }`}
                  style={{
                    top: farm.coordinates.top,
                    left: farm.coordinates.left,
                  }}
                  aria-label={`Select ${farm.name}`}
                >
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium shadow-sm transition sm:text-sm ${
                      isActive
                        ? "border-neutral-900 bg-neutral-900 text-white"
                        : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-300"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isActive ? "bg-white" : "bg-emerald-600"
                      }`}
                    />
                    {farm.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Summary panel */}
          <aside className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Selected farm
            </p>

            <h3 className="mt-3 text-xl font-semibold tracking-tight text-neutral-900">
              {selected.name}
            </h3>

            <p className="mt-1 text-sm text-neutral-500">{selected.area}</p>

            <div className="mt-6 grid gap-4">
              <MiniInfo label="Producer" value={selected.producer} />
              <MiniInfo label="Harvest" value={selected.lot.harvest} />
              <MiniInfo label="Process" value={selected.lot.process} />
              <MiniInfo label="Moisture" value={selected.lot.moisture} />
            </div>

            <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
              <p className="text-sm leading-6 text-neutral-600">
                This farm is connected to traceable lot records, process data,
                and consistency controls used to support export decisions.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* =========================
   4.2 LOT DATA
========================= */
function LotDataSection({
  farm,
  metrics,
}: {
  farm: Farm;
  metrics: { label: string; value: string; icon: React.ReactNode }[];
}) {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            4.2 Lot data
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            The data behind the selected lot
          </h2>
          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Lot-level visibility helps buyers understand how the coffee was
            processed, controlled, and prepared for export.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <DataCard
              key={metric.label}
              title={metric.label}
              value={metric.value}
              icon={metric.icon}
            />
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Info label="Farm" value={farm.name} />
            <Info label="Producer" value={farm.producer} />
            <Info label="Drying method" value={farm.lot.drying} />
            <Info label="Region" value={farm.area} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   4.3 TECHNOLOGY
========================= */
function TechnologySection() {
  const tech = [
    {
      icon: <Cpu size={18} />,
      title: "Sensors",
      desc: "Moisture, temperature, and environmental monitoring at key stages.",
    },
    {
      icon: <Radio size={18} />,
      title: "Real-time data",
      desc: "Continuous capture of process signals across drying and handling.",
    },
    {
      icon: <Activity size={18} />,
      title: "Process monitoring",
      desc: "Operational checkpoints designed to reduce variability lot by lot.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "IoT visibility",
      desc: "Connected records that link farm activity with export-ready documentation.",
    },
  ];

  return (
    <section className="border-b border-neutral-200 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            4.3 Technology
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Technology that supports consistency
          </h2>
          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Traceability becomes useful when data is visible, structured, and
            connected to operational decisions.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {tech.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-neutral-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-800">
                {item.icon}
              </div>

              <h3 className="mt-5 text-base font-semibold tracking-tight text-neutral-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   4.4 DASHBOARD
========================= */
function DashboardSection() {
  const charts = [
    {
      title: "Moisture trend",
      subtitle: "Lot moisture stays within the target range.",
    },
    {
      title: "Process timeline",
      subtitle: "Harvest, drying, validation, and readiness checkpoints.",
    },
    {
      title: "Lot stability",
      subtitle: "Low variation across quality control observations.",
    },
    {
      title: "Quality checkpoints",
      subtitle: "Key control moments before export release.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            4.4 Dashboard
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Simple visuals. Lower uncertainty.
          </h2>
          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Buyers do not need more noise. They need visible indicators that the
            lot is stable, controlled, and ready.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {charts.map((chart, index) => (
            <ChartBlock
              key={chart.title}
              title={chart.title}
              subtitle={chart.subtitle}
              variant={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   COMPONENTS
========================= */
function DataCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
          {title}
        </p>
        <div className="text-neutral-500">{icon}</div>
      </div>
      <p className="mt-4 text-lg font-semibold tracking-tight text-neutral-900">
        {value}
      </p>
    </article>
  );
}



function MiniInfo({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-xs uppercase tracking-[0.12em] text-neutral-400">
        {label}
      </span>
      <p className="mt-1 text-sm font-medium text-neutral-900">{value}</p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-sm text-neutral-500">{label}</span>
      <p className="mt-1 text-sm font-medium text-neutral-900">{value}</p>
    </div>
  );
}

function ChartBlock({
  title,
  subtitle,
  variant,
}: {
  title: string;
  subtitle: string;
  variant: number;
}) {
  return (
    <article className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6">
      <h3 className="text-base font-semibold tracking-tight text-neutral-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{subtitle}</p>

      <div className="mt-5 rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
        <div className="flex h-36 items-end gap-2">
          {[40, 65, 58, 72, 68, 84].map((height, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-md ${
                variant % 2 === 0 ? "bg-neutral-900" : "bg-neutral-400"
              }`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}