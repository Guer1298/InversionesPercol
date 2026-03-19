import type { JSX } from "react";

type Metric = {
  id: string;
  label: string;
  value: string;
  description: string;
  trend?: string;
  trendDirection?: "up" | "down" | "neutral";
};

const metrics: Metric[] = [
  {
    id: "variation",
    label: "Cup variation",
    value: "< 2%",
    description: "Across harvests and lots",
    trend: "Stable",
    trendDirection: "neutral",
  },
  {
    id: "delivery",
    label: "Delivery compliance",
    value: "98%",
    description: "On-time shipments",
    trend: "+2.1%",
    trendDirection: "up",
  },
  {
    id: "score",
    label: "Average score",
    value: "86.7",
    description: "SCA verified",
    trend: "+0.4",
    trendDirection: "up",
  },
  {
    id: "leadtime",
    label: "Lead time",
    value: "18 days",
    description: "Average export cycle",
    trend: "-3 days",
    trendDirection: "down",
  },
];

export default function PercolMetrics(): JSX.Element {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Performance
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
            Performance, measured
          </h2>

          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            We operate with data, not assumptions. Every metric reflects real
            export performance, consistency, and operational reliability.
          </p>
        </div>

        {/* Metrics Grid → SIEMPRE 2x2 */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">

          {metrics.map((metric) => {
            const trendColor =
              metric.trendDirection === "up"
                ? "text-emerald-600"
                : metric.trendDirection === "down"
                ? "text-red-600"
                : "text-neutral-500";

            return (
              <article
                key={metric.id}
                className="group flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
              >
                {/* Label */}
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                  {metric.label}
                </p>

                {/* Value */}
                <div className="mt-4 flex items-end justify-between">
                  <p className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    {metric.value}
                  </p>

                  {metric.trend && (
                    <span
                      className={`text-xs font-semibold ${trendColor}`}
                    >
                      {metric.trend}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-neutral-600">
                  {metric.description}
                </p>

                {/* Bottom line (cleaner than fake progress bar) */}
                <div className="mt-5 h-px w-full bg-neutral-100" />
              </article>
            );
          })}

        </div>

        {/* Bottom reinforcement */}
        <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 sm:px-6">
          <p className="text-sm leading-6 text-neutral-600">
            Metrics are continuously tracked to ensure{" "}
            <span className="font-medium text-neutral-900">consistency</span>,{" "}
            <span className="font-medium text-neutral-900">delivery reliability</span>, and{" "}
            <span className="font-medium text-neutral-900">quality control</span>{" "}
            across every shipment.
          </p>
        </div>

      </div>
    </section>
  );
}