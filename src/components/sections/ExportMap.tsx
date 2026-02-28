import { useEffect, useMemo, useRef, useState } from "react";
import worldSvg from "@/assets/world.svg?raw";

type Region = "North America" | "Europe" | "Asia" | "All";
type ExportCountry = { id: string; name: string; region: Exclude<Region, "All"> };

const exportCountries: ExportCountry[] = [
  { id: "US", name: "United States", region: "North America" }, // tu SVG usa class="United States"
  { id: "CA", name: "Canada", region: "North America" },

  { id: "DE", name: "Germany", region: "Europe" },
  { id: "NL", name: "Netherlands", region: "Europe" },
  { id: "ES", name: "Spain", region: "Europe" },
  { id: "UK", name: "United Kingdom", region: "Europe" }, // alias GB

  { id: "JP", name: "Japan", region: "Asia" },
  { id: "KR", name: "South Korea", region: "Asia" },
];

const KEY_ALIASES: Record<string, string[]> = {
  UK: ["GB"],
  US: ["USA"],
};

const ACTIVE = "rgba(0,122,255,0.26)";
const ACTIVE_HOVER = "rgba(0,122,255,0.38)";
const INACTIVE = "rgba(17,24,39,0.06)";
const STROKE = "rgba(17,24,39,0.14)";
const ACTIVE_STROKE = "rgba(0,122,255,0.40)";

const regions: Region[] = ["All", "North America", "Europe", "Asia"];

function classSelectorFromName(name: string) {
  // "United States" => ".United.States"
  return "." + name.trim().split(/\s+/).join(".");
}

function chipClass(active: boolean) {
  return [
    "rounded-full px-3 py-1.5 text-xs font-semibold transition",
    "border focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300",
    active
      ? "border-neutral-900 bg-neutral-900 text-white"
      : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50",
  ].join(" ");
}

export default function ExportMapSimple() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState<{ name: string; x: number; y: number } | null>(null);

  // ✅ filtro minimal
  const [filter, setFilter] = useState<Region>("All");

  // ✅ (opcional) búsqueda minimal — puedes borrarla si no la quieres
  const [query, setQuery] = useState("");

  const filteredCountries = useMemo(() => {
    const base =
      filter === "All" ? exportCountries : exportCountries.filter((c) => c.region === filter);

    const q = query.trim().toLowerCase();
    if (!q) return base;

    return base.filter((c) => c.name.toLowerCase().includes(q));
  }, [filter, query]);

  useEffect(() => {
    const root = wrapRef.current;
    if (!root) return;

    const svg = root.querySelector("svg");
    if (!svg) return;

    // Base style (todo gris)
    const shapes = root.querySelectorAll<SVGElement>("svg path, svg polygon");
    shapes.forEach((el) => {
      (el as any).style.fill = INACTIVE;
      (el as any).style.stroke = STROKE;
      (el as any).style.strokeWidth = "0.6";
      (el as any).style.transition = "fill 140ms ease, stroke 140ms ease";
      (el as any).style.cursor = "default";
      el.onmouseenter = null;
      el.onmouseleave = null;
      (el as any).onmousemove = null;
    });

    const paint = (els: NodeListOf<SVGElement>, label: string) => {
      els.forEach((el) => {
        (el as any).style.fill = ACTIVE;
        (el as any).style.stroke = ACTIVE_STROKE;
        (el as any).style.cursor = "pointer";

        el.onmouseenter = (ev: any) => {
          (el as any).style.fill = ACTIVE_HOVER;
          const rect = root.getBoundingClientRect();
          setHover({
            name: label,
            x: (ev?.clientX ?? rect.left) - rect.left,
            y: (ev?.clientY ?? rect.top) - rect.top,
          });
        };

        (el as any).onmousemove = (ev: any) => {
          const rect = root.getBoundingClientRect();
          setHover((prev) =>
            prev ? { ...prev, x: ev.clientX - rect.left, y: ev.clientY - rect.top } : prev
          );
        };

        el.onmouseleave = () => {
          (el as any).style.fill = ACTIVE;
          setHover(null);
        };
      });
    };

    const selectById = (key: string) =>
      root.querySelectorAll<SVGElement>(`svg path[id="${key}"], svg polygon[id="${key}"]`);

    const selectByNameClass = (name: string) => {
      const cls = classSelectorFromName(name);
      return root.querySelectorAll<SVGElement>(`svg path${cls}, svg polygon${cls}`);
    };

    // ✅ pinta SOLO los países filtrados
    filteredCountries.forEach((c) => {
      const keysToTry = [c.id, ...(KEY_ALIASES[c.id] ?? [])];

      for (const k of keysToTry) {
        const byId = selectById(k);
        if (byId.length) {
          paint(byId, c.name);
          return;
        }
      }

      const byClass = selectByNameClass(c.name);
      if (byClass.length) paint(byClass, c.name);
    });

    return () => {
      const all = root.querySelectorAll<SVGElement>("svg path, svg polygon");
      all.forEach((el) => {
        el.onmouseenter = null;
        el.onmouseleave = null;
        (el as any).onmousemove = null;
      });
    };
  }, [filteredCountries]);

  return (
    <section className="rounded-3xl border border-neutral-200 bg-white">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="text-sm font-semibold text-neutral-900">Export destinations</div>
        <div className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700">
          {filteredCountries.length} countries
        </div>
      </div>

      {/* ✅ filtros minimal */}
      <div className="flex flex-col gap-3 px-5 pb-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {regions.map((r) => (
            <button key={r} onClick={() => setFilter(r)} className={chipClass(r === filter)}>
              {r}
            </button>
          ))}
        </div>

        {/* ✅ opcional: búsqueda */}
        <div className="w-full sm:w-[260px]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search…"
            className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-400"
          />
        </div>
      </div>

      <div className="relative px-4 pb-4">
        <div
          ref={wrapRef}
          className="relative overflow-hidden rounded-2xl bg-neutral-50 p-3 sm:p-4 [&_svg]:h-auto [&_svg]:w-full"
        >
          <div dangerouslySetInnerHTML={{ __html: worldSvg }} />
        </div>

        {hover && (
          <div
            className="pointer-events-none absolute z-10 -translate-y-8 rounded-xl border border-neutral-200 bg-white/95 px-3 py-2 text-xs font-semibold text-neutral-900 shadow-sm backdrop-blur"
            style={{ left: hover.x + 14, top: hover.y + 12 }}
          >
            {hover.name}
          </div>
        )}

        <div className="mt-3 flex items-center gap-2 px-1 text-xs text-neutral-600">
          <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: "rgba(0,122,255,0.55)" }} />
          Confirmed export destinations
        </div>
      </div>
    </section>
  );
}