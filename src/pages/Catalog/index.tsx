import  { useMemo, useState, type JSX } from "react";

/* =========================
   TYPES
========================= */
type Coffee = {
  id: string;
  name: string;
  region: string;
  altitude: number;
  process: string;
  score: number;
  notes: string[];
  availability: "Available" | "Limited";
  variety: string;
  farm: string;
  producer: string;
  date: string;
};

type Filters = {
  region: string;
  altitude: string;
  process: string;
  score: string;
  profile: string;
};

/* =========================
   MOCK DATA
========================= */
const coffees: Coffee[] = [
  {
    id: "cauca-alto",
    name: "Cauca Alto Select",
    region: "Cauca",
    altitude: 1800,
    process: "Washed",
    score: 86.5,
    notes: ["Panela", "Citrus", "Chocolate"],
    availability: "Available",
    variety: "Castillo",
    farm: "Finca El Paraíso",
    producer: "Juan Pérez",
    date: "Jan 2026",
  },
  {
    id: "huila-reserve",
    name: "Huila Reserve Lot",
    region: "Huila",
    altitude: 1700,
    process: "Washed",
    score: 87.2,
    notes: ["Red fruits", "Honey", "Floral"],
    availability: "Limited",
    variety: "Caturra",
    farm: "Finca La Esperanza",
    producer: "Carlos Gómez",
    date: "Feb 2026",
  },
  {
    id: "narino-micro",
    name: "Nariño Micro Lot",
    region: "Nariño",
    altitude: 2050,
    process: "Natural",
    score: 88.1,
    notes: ["Jasmine", "Stone fruit", "Tea-like"],
    availability: "Limited",
    variety: "Pink Bourbon",
    farm: "Finca La Loma",
    producer: "María Velasco",
    date: "Mar 2026",
  },
];

/* =========================
   HELPERS
========================= */
const matchesAltitude = (coffee: Coffee, altitude: string): boolean => {
  if (!altitude) return true;
  if (altitude === "1400+") return coffee.altitude >= 1400;
  if (altitude === "1600+") return coffee.altitude >= 1600;
  if (altitude === "1800+") return coffee.altitude >= 1800;
  return true;
};

const matchesScore = (coffee: Coffee, score: string): boolean => {
  if (!score) return true;
  if (score === "85+") return coffee.score >= 85;
  if (score === "87+") return coffee.score >= 87;
  if (score === "88+") return coffee.score >= 88;
  return true;
};

const matchesProfile = (coffee: Coffee, profile: string): boolean => {
  if (!profile) return true;
  const notes = coffee.notes.join(" ").toLowerCase();

  if (profile === "Fruity") return notes.includes("fruit");
  if (profile === "Chocolate") return notes.includes("chocolate");
  if (profile === "Floral") return notes.includes("floral") || notes.includes("jasmine");
  if (profile === "Citrus") return notes.includes("citrus");
  return true;
};

/* =========================
   MAIN COMPONENT
========================= */
export default function CatalogPage(): JSX.Element {
  const [selected, setSelected] = useState<Coffee | null>(null);

  const [filters, setFilters] = useState<Filters>({
    region: "",
    altitude: "",
    process: "",
    score: "",
    profile: "",
  });

  const filteredCoffees = useMemo(() => {
    return coffees.filter((coffee) => {
      const regionMatch = !filters.region || coffee.region === filters.region;
      const processMatch = !filters.process || coffee.process === filters.process;

      return (
        regionMatch &&
        processMatch &&
        matchesAltitude(coffee, filters.altitude) &&
        matchesScore(coffee, filters.score) &&
        matchesProfile(coffee, filters.profile)
      );
    });
  }, [filters]);

  return (
    <div className="bg-white">
      {/* =========================
         PAGE HEADER
      ========================= */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Coffee catalog
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Export-ready coffees with traceability built in
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Explore available lots by origin, altitude, process, score, and cup
            profile. Every coffee is presented with the clarity buyers need to
            evaluate faster.
          </p>

          <div className="mt-6 text-sm text-neutral-500">
            {filteredCoffees.length} lot{filteredCoffees.length !== 1 ? "s" : ""} available
          </div>
        </div>
      </section>

      {/* =========================
         FILTER BAR
      ========================= */}
      <section className="sticky top-[72px] z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
            <select
              className="filter"
              value={filters.region}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, region: e.target.value }))
              }
            >
              <option value="">Region</option>
              <option value="Cauca">Cauca</option>
              <option value="Huila">Huila</option>
              <option value="Nariño">Nariño</option>
            </select>

            <select
              className="filter"
              value={filters.altitude}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, altitude: e.target.value }))
              }
            >
              <option value="">Altitude</option>
              <option value="1400+">1400+</option>
              <option value="1600+">1600+</option>
              <option value="1800+">1800+</option>
            </select>

            <select
              className="filter"
              value={filters.process}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, process: e.target.value }))
              }
            >
              <option value="">Process</option>
              <option value="Washed">Washed</option>
              <option value="Natural">Natural</option>
            </select>

            <select
              className="filter"
              value={filters.score}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, score: e.target.value }))
              }
            >
              <option value="">Score</option>
              <option value="85+">85+</option>
              <option value="87+">87+</option>
              <option value="88+">88+</option>
            </select>

            <select
              className="filter col-span-2 lg:col-span-1"
              value={filters.profile}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, profile: e.target.value }))
              }
            >
              <option value="">Cup profile</option>
              <option value="Fruity">Fruity</option>
              <option value="Chocolate">Chocolate</option>
              <option value="Floral">Floral</option>
              <option value="Citrus">Citrus</option>
            </select>
          </div>
        </div>
      </section>

      {/* =========================
         PRODUCT GRID
      ========================= */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredCoffees.map((coffee) => (
            <article
              key={coffee.id}
              className="group flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                    {coffee.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">{coffee.region}</p>
                </div>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-900">
                  {coffee.score} SCA
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-neutral-50 px-3 py-1 text-xs text-neutral-600">
                  {coffee.process}
                </span>
                <span className="rounded-full bg-neutral-50 px-3 py-1 text-xs text-neutral-600">
                  {coffee.altitude} m
                </span>
                <span className="rounded-full bg-neutral-50 px-3 py-1 text-xs text-neutral-600">
                  {coffee.variety}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-neutral-700">
                {coffee.notes.join(" • ")}
              </p>

              <div className="mt-5 border-t border-neutral-100 pt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">Availability</span>
                  <span
                    className={`font-medium ${
                      coffee.availability === "Available"
                        ? "text-emerald-700"
                        : "text-amber-700"
                    }`}
                  >
                    {coffee.availability}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelected(coffee)}
                className="mt-auto pt-6"
              >
                <span className="inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">
                  View details
                </span>
              </button>
            </article>
          ))}
        </div>

        {filteredCoffees.length === 0 && (
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-10 text-center">
            <p className="text-sm text-neutral-600">
              No lots match the current filters. Adjust your criteria to explore
              more coffees.
            </p>
          </div>
        )}
      </section>

      {/* =========================
         PDP (DETAIL MODAL)
      ========================= */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/50 p-4 backdrop-blur-sm">
          <div className="flex min-h-full items-center justify-center">
            <div className="w-full max-w-5xl rounded-3xl bg-white shadow-2xl">
              <div className="max-h-[90vh] overflow-y-auto p-6 sm:p-8 lg:p-10">
                {/* HEADER */}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      Coffee detail
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                      {selected.name}
                    </h2>
                    <p className="mt-2 text-sm text-neutral-500">
                      {selected.score} SCA • {selected.availability} • {selected.region}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    className="rounded-full border border-neutral-200 px-3 py-2 text-sm text-neutral-500 transition hover:border-neutral-300 hover:text-neutral-900"
                    aria-label="Close detail modal"
                  >
                    ✕
                  </button>
                </div>

                {/* CONTENT */}
                <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-10">
                    {/* TECHNICAL SHEET */}
                    <section>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
                        Technical sheet
                      </h3>
                      <div className="mt-4 grid grid-cols-2 gap-5 text-sm sm:grid-cols-2">
                        <Info label="Altitude" value={`${selected.altitude} m`} />
                        <Info label="Variety" value={selected.variety} />
                        <Info label="Process" value={selected.process} />
                        <Info label="Region" value={selected.region} />
                      </div>
                    </section>

                    {/* SENSORY */}
                    <section>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
                        Sensory profile
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {selected.notes.map((note) => (
                          <span
                            key={note}
                            className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                      <p className="mt-4 text-sm leading-6 text-neutral-600">
                        Designed for buyers who need clarity in the cup and
                        consistency in performance.
                      </p>
                    </section>

                    {/* HISTORICAL */}
                    <section>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
                        Consistency data
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-neutral-600">
                        Stable scoring range with minimal variation across
                        harvests, supporting repeatability and lower buying risk.
                      </p>
                    </section>
                  </div>

                  <div className="space-y-10">
                    {/* TRACEABILITY */}
                    <section>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
                        Traceability
                      </h3>
                      <div className="mt-4 grid gap-5 text-sm">
                        <Info label="Farm" value={selected.farm} />
                        <Info label="Producer" value={selected.producer} />
                        <Info label="Harvest date" value={selected.date} />
                      </div>
                    </section>

                    {/* CTA PANEL */}
                    <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6">
                      <h3 className="text-base font-semibold text-neutral-900">
                        Ready to validate this lot?
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-600">
                        Request a sample and review the coffee with the data you
                        need to decide with confidence.
                      </p>

                      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                        <button className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">
                          Request sample
                        </button>

                        <button className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-900">
                          Contact sales
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================
   SUBCOMPONENT
========================= */
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-neutral-500">{label}</span>
      <p className="mt-1 font-medium text-neutral-900">{value}</p>
    </div>
  );
}