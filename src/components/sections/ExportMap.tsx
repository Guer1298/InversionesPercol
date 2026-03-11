import React, { useEffect, useRef } from "react";
import worldSvg from "@/assets/world.svg?raw";

type ExportCountry = {
  id: string;
  name: string;
  color: string;
};

const exportCountries: ExportCountry[] = [
  { id: "US", name: "United States", color: "#4E6F3A" },
  { id: "UK", name: "United Kingdom", color: "#7A4A2A" },
  { id: "DE", name: "Germany", color: "#C43A2F" },
  { id: "JO", name: "Jordan", color: "#4E6F3A" },
  { id: "BH", name: "Bahrain", color: "#7A4A2A" },
  { id: "KR", name: "South Korea", color: "#C43A2F" },
  { id: "AT", name: "Austria", color: "#7A4A2A" },
  { id: "IT", name: "Italy", color: "#C43A2F" },
];

const KEY_ALIASES: Record<string, string[]> = {
  US: ["USA"],
  UK: ["GB", "Great Britain"],
  KR: ["KOR"],
  DE: ["DEU"],
  IT: ["ITA"],
  AT: ["AUT"],
  JO: ["JOR"],
  BH: ["BHR"],
};

function classSelectorFromName(name: string) {
  return "." + name.trim().split(/\s+/).join(".");
}

export default function ExportMapPercol() {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = wrapRef.current;
    if (!root) return;

    const shapes = root.querySelectorAll<SVGElement>("svg path, svg polygon");

    // Base map
    shapes.forEach((el) => {
      el.style.fill = "rgba(17,24,39,0.10)";
      el.style.stroke = "rgba(17,24,39,0.05)";
      el.style.strokeWidth = "0.6";
      el.style.transition = "fill 220ms ease, opacity 220ms ease";
      el.style.opacity = "1";
    });

    const selectById = (key: string) =>
      root.querySelectorAll<SVGElement>(
        `svg path[id="${key}"], svg polygon[id="${key}"]`
      );

    const selectByNameClass = (name: string) => {
      const cls = classSelectorFromName(name);
      return root.querySelectorAll<SVGElement>(
        `svg path${cls}, svg polygon${cls}`
      );
    };

    exportCountries.forEach((country) => {
      const keysToTry = [country.id, ...(KEY_ALIASES[country.id] ?? [])];
      let painted = false;

      for (const key of keysToTry) {
        const byId = selectById(key);
        if (byId.length) {
          byId.forEach((el) => {
            el.style.fill = country.color;
            el.style.opacity = "1";
          });
          painted = true;
          break;
        }
      }

      if (!painted) {
        const byClass = selectByNameClass(country.name);
        if (byClass.length) {
          byClass.forEach((el) => {
            el.style.fill = country.color;
            el.style.opacity = "1";
          });
          painted = true;
        }
      }

      if (!painted) {
        console.warn(`Country not found in SVG: ${country.name} (${country.id})`);
      }
    });
  }, []);

  return (
    <section
      aria-labelledby="export-countries-title"
      className="relative overflow-hidden rounded-[2rem] bg-[#F7F4EF]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(122,74,42,0.06),transparent_24%),radial-gradient(circle_at_82%_82%,rgba(78,111,58,0.05),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(196,58,47,0.04),transparent_16%)]" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-neutral-600 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4E6F3A]" />
            GLOBAL REACH
          </div>

          <h2
            id="export-countries-title"
            className="mt-5 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl"
          >
            Where Percol exports today.
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-neutral-600 sm:text-base">
            Active export destinations for Colombian green coffee, shown with clarity and nothing extra.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-6xl sm:mt-12">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-transparent p-2 sm:p-4 lg:p-6">
            <div
              ref={wrapRef}
              className="relative mx-auto max-w-5xl [&_svg]:h-auto [&_svg]:w-full"
              dangerouslySetInnerHTML={{ __html: worldSvg }}
            />
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-4xl text-center">
          <p className="text-sm leading-6 text-neutral-500">
            USA, U.K., Germany, Jordan, Bahrain, South Korea, Austria, and Italy.
          </p>
        </div>
      </div>
    </section>
  );
}