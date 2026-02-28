import { useEffect, useMemo, useState } from "react";

type Lot = {
  id: string;
  region: string;
  variety: string;
  process: string;
  score: number;
  availableKg: number;
  status: "Available" | "Reserved";
  moq: string;
};

const lotsMock: Lot[] = [
  {
    id: "LOT-CAU-001",
    region: "Cauca",
    variety: "Castillo",
    process: "Washed",
    score: 86.5,
    availableKg: 1200,
    status: "Available",
    moq: "10kg Air / 700kg Sea",
  },
  {
    id: "LOT-NAR-014",
    region: "Nariño",
    variety: "Pink Bourbon",
    process: "Honey",
    score: 88.0,
    availableKg: 700,
    status: "Reserved",
    moq: "700kg Sea",
  },
  {
    id: "LOT-HUI-009",
    region: "Huila",
    variety: "Caturra",
    process: "Natural",
    score: 87.2,
    availableKg: 2100,
    status: "Available",
    moq: "10kg Air / 700kg Sea",
  },
];

export default function InventoryPage() {
  useEffect(() => {
    document.title = "PERCOL — Inventory";
  }, []);

  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Lot["status"] | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return lotsMock.filter((l) => {
      const matchesQuery =
        !q ||
        l.id.toLowerCase().includes(q) ||
        l.region.toLowerCase().includes(q) ||
        l.variety.toLowerCase().includes(q) ||
        l.process.toLowerCase().includes(q);

      const matchesStatus = status === "All" ? true : l.status === status;

      return matchesQuery && matchesStatus;
    });
  }, [query, status]);

  return (
    <div className="py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-xs font-medium tracking-wide text-neutral-500">LIVE INVENTORY (DEMO)</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Available lots</h1>
          <p className="mt-3 text-sm text-neutral-600">
            Frontend-only table. Next: connect to real inventory feed.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="text-xs text-neutral-500 sm:text-sm">Updated weekly</div>
          <div className="text-xs text-neutral-500 sm:text-sm">Last update: —</div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-400"
              placeholder="Search by lot, region, variety, process..."
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-neutral-600">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as any)}
              className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-400"
            >
              <option value="All">All</option>
              <option value="Available">Available</option>
              <option value="Reserved">Reserved</option>
            </select>
          </div>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 text-left text-xs font-medium tracking-wide text-neutral-500">
                <th className="py-3 pr-4">Lot ID</th>
                <th className="py-3 pr-4">Region</th>
                <th className="py-3 pr-4">Variety</th>
                <th className="py-3 pr-4">Process</th>
                <th className="py-3 pr-4">Score</th>
                <th className="py-3 pr-4">Available (kg)</th>
                <th className="py-3 pr-4">Status</th>
                <th className="py-3 pr-4">MOQ</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((l) => (
                <tr key={l.id} className="border-b border-neutral-100 text-sm">
                  <td className="py-3 pr-4 font-medium">{l.id}</td>
                  <td className="py-3 pr-4 text-neutral-700">{l.region}</td>
                  <td className="py-3 pr-4 text-neutral-700">{l.variety}</td>
                  <td className="py-3 pr-4 text-neutral-700">{l.process}</td>
                  <td className="py-3 pr-4 text-neutral-700">{l.score.toFixed(1)}</td>
                  <td className="py-3 pr-4 text-neutral-700">{l.availableKg.toLocaleString()}</td>
                  <td className="py-3 pr-4">
                    <span
                      className={[
                        "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
                        l.status === "Available"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700",
                      ].join(" ")}
                    >
                      {l.status}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-neutral-700">{l.moq}</td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-sm text-neutral-500">
                    No lots found for your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}