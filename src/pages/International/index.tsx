import { useEffect } from "react";
import { Link } from "react-router-dom";

type ShippingMode = {
  title: string;
  subtitle: string;
  bullets: string[];
};

const modes: ShippingMode[] = [
  {
    title: "Air (Courier)",
    subtitle: "Fast evaluation shipments worldwide.",
    bullets: ["MOQ: 10 kg", "Typical: FedEx / DHL / UPS", "Best for samples & small orders"],
  },
  {
    title: "Sea Freight",
    subtitle: "Structured exports for roasters and importers.",
    bullets: ["MOQ: 700 kg (10 x 70 kg)", "Packaging: GrainPro + fique", "Best for production volumes"],
  },
];

export default function InternationalPage() {
  useEffect(() => {
    document.title = "PERCOL — International";
  }, []);

  return (
    <div className="py-10">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        {/* Left: content */}
        <div className="lg:col-span-8">
          <div className="text-xs font-medium tracking-wide text-neutral-500">
            WORLDWIDE SHIPPING • CLEAR MOQ • EXPORT-READY
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            International exports, without surprises.
          </h1>
          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base">
            We ship Colombian green coffee to professional buyers with clear minimums, consistent packaging,
            and operational communication. Use air for fast evaluation or sea freight for volume shipments.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {modes.map((m) => (
              <section key={m.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h2 className="text-lg font-semibold tracking-tight">{m.title}</h2>
                <p className="mt-2 text-sm text-neutral-600">{m.subtitle}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="text-lg font-semibold tracking-tight">Common export workflow</h2>
            <ol className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { t: "1) Request samples", d: "Shortlist lots and define target profiles." },
                { t: "2) Confirm lot + terms", d: "MOQ, packaging, destination, and timeline." },
                { t: "3) Ship + documents", d: "Export documentation aligned to the shipment mode." },
              ].map((s) => (
                <li key={s.t} className="rounded-xl border border-neutral-200 bg-white p-4">
                  <div className="text-sm font-semibold">{s.t}</div>
                  <div className="mt-1 text-sm text-neutral-600">{s.d}</div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* Right: CTA card */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="text-sm font-semibold">Need shipping guidance?</div>
            <p className="mt-2 text-sm text-neutral-600">
              Tell us destination, target volume, and timeline. We’ll recommend the best route.
            </p>

            <div className="mt-5 grid gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Contact export team
              </Link>
              <Link
                to="/inventory"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                View inventory
              </Link>
            </div>

            <div className="mt-5 rounded-xl bg-neutral-50 p-4">
              <div className="text-xs font-medium text-neutral-500">Typical response time</div>
              <div className="mt-1 text-sm font-semibold">≤ 24 hours</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}