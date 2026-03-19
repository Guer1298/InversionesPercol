import React, { type JSX } from "react";
import {
  Search,
  SlidersHorizontal,
  Database,
  PackageSearch,
  ShoppingCart,
} from "lucide-react";

type Step = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefit: string;
};

const steps: Step[] = [
  {
    id: "explore",
    icon: <Search size={20} strokeWidth={2} />,
    title: "Explore the catalog",
    description:
      "Browse available lots from Cauca with clear sensory and origin profiles.",
    benefit: "See what fits your market faster.",
  },
  {
    id: "filter",
    icon: <SlidersHorizontal size={20} strokeWidth={2} />,
    title: "Filter by profile",
    description:
      "Narrow options by score, altitude, process, and flavor notes.",
    benefit: "Reduce noise and compare with clarity.",
  },
  {
    id: "validate",
    icon: <Database size={20} strokeWidth={2} />,
    title: "Validate data",
    description:
      "Review traceability, quality metrics, and lot consistency before deciding.",
    benefit: "Lower risk before committing.",
  },
  {
    id: "samples",
    icon: <PackageSearch size={20} strokeWidth={2} />,
    title: "Request samples",
    description:
      "Receive physical samples to verify quality, cup profile, and fit.",
    benefit: "Taste before you scale.",
  },
  {
    id: "order",
    icon: <ShoppingCart size={20} strokeWidth={2} />,
    title: "Place order",
    description:
      "Secure your lot with clear logistics, timelines, and export coordination.",
    benefit: "Move from interest to shipment with confidence.",
  },
];

export default function HowItWorks(): JSX.Element {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Buying process
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
            How buying from Percol works
          </h2>

          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            A structured path designed to reduce uncertainty and help buyers move
            from discovery to order with more clarity, less friction, and better
            decisions.
          </p>
        </div>

        {/* Mobile / tablet helper */}
        <div className="mt-6 flex items-center justify-between xl:hidden">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
            Swipe to explore
          </p>
          <p className="text-xs text-neutral-400">
            {steps.length} steps
          </p>
        </div>

        {/* Desktop timeline line */}
        <div className="relative mt-12 hidden xl:block">
          <div className="absolute left-0 right-0 top-10 h-px bg-neutral-200" />
        </div>

        {/* Steps wrapper */}
        <div className="relative mt-8">
          <div className="overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex snap-x snap-mandatory gap-4 pr-4 sm:gap-5 xl:grid xl:grid-cols-5 xl:gap-6 xl:overflow-visible xl:pr-0">
              {steps.map((step, index) => (
                <article
                  key={step.id}
                  className="
                    group relative flex min-h-[290px] w-[85%] min-w-[85%] snap-start flex-col
                    rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition duration-300
                    hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg
                    sm:w-[380px] sm:min-w-[380px] sm:p-6
                    xl:min-h-[320px] xl:w-auto xl:min-w-0
                  "
                >
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.14em] text-neutral-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-700 transition group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-5">
                    <h3 className="text-base font-semibold tracking-tight text-neutral-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-neutral-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Benefit */}
                  <div className="mt-auto pt-5">
                    <div className="border-t border-neutral-100 pt-4">
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-400">
                        Why it matters
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-neutral-800">
                        {step.benefit}
                      </p>
                    </div>
                  </div>

                  {/* Connector arrow desktop */}
                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-3 top-10 hidden xl:flex h-6 w-6 items-center justify-center rounded-full bg-white text-neutral-300"
                    >
                      →
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* Edge fade hint for mobile/tablet */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent xl:hidden" />
        </div>

        {/* Bottom reassurance */}
        <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 sm:px-6">
          <p className="text-sm leading-6 text-neutral-600">
            From first contact to shipment, every step is designed to be{" "}
            <span className="font-medium text-neutral-900">transparent</span>,{" "}
            <span className="font-medium text-neutral-900">predictable</span>,
            and{" "}
            <span className="font-medium text-neutral-900">
              operationally clear
            </span>.
          </p>
        </div>
      </div>
    </section>
  );
}