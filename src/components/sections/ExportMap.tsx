import React, { useEffect, useMemo, useRef, useState } from "react";
import worldSvg from "@/assets/world.svg?raw";

type Region = "North America" | "Europe" | "Asia" | "All";
type ExportCountry = { id: string; name: string; region: Exclude<Region, "All"> };

const exportCountries: ExportCountry[] = [
  { id: "US", name: "United States", region: "North America" },
  { id: "CA", name: "Canada", region: "North America" },

  { id: "DE", name: "Germany", region: "Europe" },
  { id: "NL", name: "Netherlands", region: "Europe" },
  { id: "ES", name: "Spain", region: "Europe" },
  { id: "UK", name: "United Kingdom", region: "Europe" },

  { id: "JP", name: "Japan", region: "Asia" },
  { id: "KR", name: "South Korea", region: "Asia" },
];

const KEY_ALIASES: Record<string, string[]> = { UK: ["GB"], US: ["USA"] };

// Visual system (Percol: calm, premium)
const ACTIVE = "rgba(17,24,39,0.14)";
const ACTIVE_HOVER = "rgba(17,24,39,0.22)";
const INACTIVE = "rgba(17,24,39,0.05)";
const STROKE = "rgba(17,24,39,0.10)";
const ACTIVE_STROKE = "rgba(17,24,39,0.28)";

const regions: Region[] = ["All", "North America", "Europe", "Asia"];

function classSelectorFromName(name: string) {
  return "." + name.trim().split(/\s+/).join(".");
}

function chipClass(active: boolean) {
  return [
    "rounded-full px-3 py-1.5 text-xs font-semibold transition",
    "border focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/15",
    active
      ? "border-neutral-900 bg-neutral-900 text-white"
      : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50",
  ].join(" ");
}

type HoverState = {
  name: string;
  region?: Exclude<Region, "All">;
  x: number;
  y: number;
  pinned?: boolean;
};

export default function ExportMapPercol() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [filter, setFilter] = useState<Region>("All");
  const [query, setQuery] = useState("");
  const [hover, setHover] = useState<HoverState | null>(null);

  const counts = useMemo(() => {
    return exportCountries.reduce<Record<string, number>>((acc, c) => {
      acc.All = (acc.All || 0) + 1;
      acc[c.region] = (acc[c.region] || 0) + 1;
      return acc;
    }, {});
  }, []);

  const filteredCountries = useMemo(() => {
    const base =
      filter === "All" ? exportCountries : exportCountries.filter((c) => c.region === filter);

    const q = query.trim().toLowerCase();
    if (!q) return base;

    return base.filter((c) => c.name.toLowerCase().includes(q));
  }, [filter, query]);

  // Close tooltip (esc / click outside if pinned)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setHover(null);
    };

    const onClick = (e: MouseEvent) => {
      if (!hover?.pinned) return;
      const root = wrapRef.current;
      if (!root) return;
      if (root.contains(e.target as Node)) return;
      setHover(null);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onClick);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onClick);
    };
  }, [hover?.pinned]);

  useEffect(() => {
    const root = wrapRef.current;
    if (!root) return;

    const svg = root.querySelector("svg");
    if (!svg) return;

    const shapes = root.querySelectorAll<SVGElement>("svg path, svg polygon");
    shapes.forEach((el) => {
      el.style.fill = INACTIVE;
      el.style.stroke = STROKE;
      el.style.strokeWidth = "0.6";
      el.style.transition = "fill 140ms ease, stroke 140ms ease";
      el.style.cursor = "default";

      el.onmouseenter = null;
      el.onmouseleave = null;
      (el as any).onmousemove = null;
      (el as any).ontouchstart = null;
      (el as any).onclick = null;
    });

    const rectOf = () => root.getBoundingClientRect();

    // ✅ FIX: acepta objeto O función (sin any)
    const setHoverSafe = (next: React.SetStateAction<HoverState | null>) => {
      setHover((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next;

        // If pinned, ignore non-pinned hover updates
        if (prev?.pinned && resolved && !resolved.pinned) return prev;

        return resolved;
      });
    };

    const paint = (els: NodeListOf<SVGElement>, label: string, region?: HoverState["region"]) => {
      els.forEach((el) => {
        el.style.fill = ACTIVE;
        el.style.stroke = ACTIVE_STROKE;
        el.style.cursor = "pointer";

        el.onmouseenter = (ev: MouseEvent) => {
          el.style.fill = ACTIVE_HOVER;
          const rect = rectOf();
          setHoverSafe({
            name: label,
            region,
            x: ev.clientX - rect.left,
            y: ev.clientY - rect.top,
          });
        };

        // ✅ FIX: prev tipado correcto + rAF
        (el as any).onmousemove = (ev: MouseEvent) => {
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(() => {
            const rect = rectOf();
            setHoverSafe((prev) =>
              prev ? { ...prev, x: ev.clientX - rect.left, y: ev.clientY - rect.top } : prev
            );
          });
        };

        el.onmouseleave = () => {
          el.style.fill = ACTIVE;
          setHoverSafe(null);
        };

        // Mobile: tap to pin
        (el as any).ontouchstart = (ev: TouchEvent) => {
          const t = ev.touches?.[0];
          if (!t) return;
          const rect = rectOf();
          setHover({
            name: label,
            region,
            x: t.clientX - rect.left,
            y: t.clientY - rect.top,
            pinned: true,
          });
        };

        // Desktop click can pin
        (el as any).onclick = (ev: MouseEvent) => {
          const rect = rectOf();
          setHover({
            name: label,
            region,
            x: ev.clientX - rect.left,
            y: ev.clientY - rect.top,
            pinned: true,
          });
        };
      });
    };

    const selectById = (key: string) =>
      root.querySelectorAll<SVGElement>(`svg path[id="${key}"], svg polygon[id="${key}"]`);

    const selectByNameClass = (name: string) => {
      const cls = classSelectorFromName(name);
      return root.querySelectorAll<SVGElement>(`svg path${cls}, svg polygon${cls}`);
    };

    filteredCountries.forEach((c) => {
      const keysToTry = [c.id, ...(KEY_ALIASES[c.id] ?? [])];

      for (const k of keysToTry) {
        const byId = selectById(k);
        if (byId.length) {
          paint(byId, c.name, c.region);
          return;
        }
      }

      const byClass = selectByNameClass(c.name);
      if (byClass.length) paint(byClass, c.name, c.region);
    });

    return () => {
      const all = root.querySelectorAll<SVGElement>("svg path, svg polygon");
      all.forEach((el) => {
        el.onmouseenter = null;
        el.onmouseleave = null;
        (el as any).onmousemove = null;
        (el as any).ontouchstart = null;
        (el as any).onclick = null;
      });
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [filteredCountries]);

  return (
    <section className="rounded-3xl border border-neutral-200 bg-white" aria-labelledby="export-map-title">
      <div className="px-5 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wide text-neutral-500">
              GLOBAL REACH • DIRECT EXPORT
            </div>
            <h2 id="export-map-title" className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Export destinations for Colombian green coffee.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600">
              A calm view of where Percol ships today—built for buyers who need clarity, documentation, and repeatable logistics.
            </p>
          </div>

          <div className="hidden sm:flex shrink-0 items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700">
            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: ACTIVE_HOVER }} />
            {filteredCountries.length} markets
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter export regions">
            {regions.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setFilter(r)}
                className={chipClass(r === filter)}
                role="tab"
                aria-selected={r === filter}
              >
                {r}
                <span className={r === filter ? "ml-2 opacity-80" : "ml-2 text-neutral-400"}>
                  {counts[r] ?? (r === "All" ? exportCountries.length : 0)}
                </span>
              </button>
            ))}
          </div>

          <div className="w-full sm:w-[280px]">
            <label className="sr-only" htmlFor="export-search">
              Search export markets
            </label>
            <input
              id="export-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search market…"
              className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-400"
            />
          </div>
        </div>
      </div>

      <div className="relative px-4 pb-5 pt-4">
        <div
          ref={wrapRef}
          className="relative overflow-hidden rounded-2xl bg-neutral-50 p-3 sm:p-4 [&_svg]:h-auto [&_svg]:w-full"
          aria-describedby="export-map-hint"
        >
          <div dangerouslySetInnerHTML={{ __html: worldSvg }} />
        </div>

        {hover && (
          <div
            role="status"
            aria-live="polite"
            className="pointer-events-none absolute z-10 -translate-y-10 rounded-2xl border border-neutral-200 bg-white/95 px-3 py-2 text-xs font-semibold text-neutral-900 shadow-sm backdrop-blur"
            style={{ left: hover.x + 14, top: hover.y + 12 }}
          >
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: ACTIVE_HOVER }} />
              <span>{hover.name}</span>
            </div>
            {hover.region ? (
              <div className="mt-1 text-[11px] font-semibold text-neutral-500">{hover.region}</div>
            ) : null}
            {hover.pinned ? (
              <div className="mt-1 text-[11px] font-medium text-neutral-500">
                Pinned • press Esc or click outside
              </div>
            ) : null}
          </div>
        )}

        <div className="mt-3 flex flex-col gap-2 px-1 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs text-neutral-600" id="export-map-hint">
            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: ACTIVE_HOVER }} />
            Confirmed export markets
            <span className="opacity-40">•</span>
            Hover or tap a country
          </div>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-neutral-50"
          >
            Request a quote
          </a>
        </div>
      </div>
    </section>
  );
}