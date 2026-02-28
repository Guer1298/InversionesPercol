const kpis = [
  { label: "Active lots", value: "18" },
  { label: "Kg available", value: "64,350" },
  { label: "Avg response", value: "≤ 24h" },
  { label: "Regions", value: "7+" },
];

export default function KPIBar() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white">
      <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl bg-neutral-50 p-4">
            <div className="text-xl font-semibold tracking-tight">{k.value}</div>
            <div className="mt-1 text-xs text-neutral-600">{k.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}