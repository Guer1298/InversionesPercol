import { useEffect } from "react";
import { Link } from "react-router-dom";

const timeline = [
  { year: "2002", text: "Founded in Colombia as a family business focused on green coffee." },
  { year: "2010+", text: "Expanded sourcing across multiple regions and producer associations." },
  { year: "Today", text: "Export-ready lots with quality control and structured logistics." },
];

const pillars = [
  { title: "Direct relationships", desc: "Work with producer associations to ensure traceability." },
  { title: "Quality-first", desc: "Physical and sensory evaluation to support buyer confidence." },
  { title: "Operational clarity", desc: "Clear MOQ, shipping modes, and documentation readiness." },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = "PERCOL — About";
  }, []);

  return (
    <div className="py-10">
      <div className="text-xs font-medium tracking-wide text-neutral-500">WHO WE ARE</div>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A direct exporter built for trust.</h1>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-neutral-600 sm:text-base">
        PERCOL operates as a Colombian coffee exporter focused on real lots, clear communication, and export-ready
        logistics. Our job is to reduce risk for professional buyers through consistency and proof.
      </p>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="text-sm font-semibold">{p.title}</div>
            <div className="mt-2 text-sm text-neutral-600">{p.desc}</div>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
        <h2 className="text-lg font-semibold tracking-tight">History</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {timeline.map((t) => (
            <div key={t.year} className="rounded-xl border border-neutral-200 bg-white p-5">
              <div className="text-sm font-semibold">{t.year}</div>
              <div className="mt-2 text-sm text-neutral-600">{t.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Ready to evaluate available lots?</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Browse inventory or contact us to request samples and confirm export terms.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              to="/inventory"
              className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              View inventory
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}