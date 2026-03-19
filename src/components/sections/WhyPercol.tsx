import type { JSX, ReactNode } from "react";
import { ScanLine, BarChart3, Handshake } from "lucide-react";

type Item = {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  benefit: string;
};

const items: Item[] = [
  {
    id: "traceability",
    icon: <ScanLine size={20} strokeWidth={2} />,
    title: "Full traceability",
    description:
      "Every lot is linked to a specific farm, producer, and process. No aggregation. No ambiguity.",
    benefit: "You know exactly what you are buying.",
  },
  {
    id: "consistency",
    icon: <BarChart3 size={20} strokeWidth={2} />,
    title: "Measurable consistency",
    description:
      "Quality is tracked across harvests with clear data, reducing variability and buyer risk.",
    benefit: "Better repeatability. Lower commercial risk.",
  },
  {
    id: "relationships",
    icon: <Handshake size={20} strokeWidth={2} />,
    title: "Direct farm relationships",
    description:
      "We work directly with producers, ensuring transparency, better pricing, and long-term reliability.",
    benefit: "Stronger supply continuity over time.",
  },
];

export default function WhyPercol(): JSX.Element {
  return (
    <section className="bg-neutral-950 py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            Why Percol
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Built to reduce uncertainty in coffee buying
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
            Percol is designed for buyers who need more than a good story.
            They need clarity, consistency, and a supplier they can rely on.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {items.map((item) => (
            <article
              key={item.id}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.07] hover:shadow-xl sm:p-6"
            >
              {/* Icon */}
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition group-hover:bg-white group-hover:text-neutral-950">
                {item.icon}
              </div>

              {/* Content */}
              <div className="mt-5">
                <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  {item.description}
                </p>
              </div>

              {/* Benefit */}
              <div className="mt-auto pt-6">
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/40">
                    Why it matters
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-white/90">
                    {item.benefit}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom reinforcement */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 sm:mt-12 sm:px-6">
          <p className="max-w-3xl text-sm leading-6 text-white/65">
            Designed for importers who prioritize{" "}
            <span className="font-medium text-white">clarity</span>,{" "}
            <span className="font-medium text-white">consistency</span>, and{" "}
            <span className="font-medium text-white">
              long-term supply reliability
            </span>.
          </p>
        </div>
      </div>
    </section>
  );
}