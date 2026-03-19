import type { JSX } from "react";
import { Link } from "react-router-dom";

type Region = {
  id: string;
  name: string;
  altitude: string;
  climate: string;
  soil: string;
  profile: string;
  image: string;
};

const regions: Region[] = [
  {
    id: "cauca",
    name: "Cauca",
    altitude: "1,600 – 2,000 masl",
    climate: "Stable mountain climate with consistent rainfall",
    soil: "Volcanic, mineral-rich",
    profile: "Balanced cup with bright acidity and caramel sweetness",
    image: "/images/origins/Fcauca.png",
  },
  {
    id: "huila",
    name: "Huila",
    altitude: "1,400 – 1,900 masl",
    climate: "Warm days, cool nights",
    soil: "Fertile volcanic soils",
    profile: "Sweet, fruity, with pronounced acidity",
    image: "/images/origins/Fhuila.png",
  },
  {
    id: "narino",
    name: "Nariño",
    altitude: "1,800 – 2,200 masl",
    climate: "High altitude with strong sun exposure",
    soil: "Volcanic and well-drained",
    profile: "Complex, floral, high acidity",
    image: "/images/origins/Fnarino.png",
  },
  {
    id: "caldas",
    name: "Caldas",
    altitude: "1,300 – 1,800 masl",
    climate: "Humid and consistent",
    soil: "Volcanic ash soils",
    profile: "Balanced body, chocolate and nut notes",
    image: "/images/origins/Fcaldas.png",
  },
  {
    id: "antioquia",
    name: "Antioquia",
    altitude: "1,200 – 1,800 masl",
    climate: "Tropical with steady rainfall",
    soil: "Rich and fertile",
    profile: "Smooth, mild acidity, cocoa sweetness",
    image: "/images/origins/Fantioquia.png",
  },
];

export default function OriginsSection(): JSX.Element {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Coffee origins
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
            Origin defines the cup
          </h2>

          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Each region expresses a distinct combination of altitude, climate,
            and soil. These variables shape flavor, structure, and consistency.
          </p>
        </div>

        {/* Helper text */}
        <div className="mt-6 flex items-center justify-between lg:hidden">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
            Swipe to explore
          </p>
          <p className="text-xs text-neutral-400">{regions.length} origins</p>
        </div>

        {/* Cards */}
        <div className="relative mt-8 sm:mt-10">
          <div className="overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex snap-x snap-mandatory gap-4 pr-4 sm:gap-5 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pr-0">
              {regions.map((region) => (
                <article
                  key={region.id}
                  className="
                    group flex min-h-[480px] w-[85%] min-w-[85%] snap-start flex-col
                    overflow-hidden rounded-3xl border border-neutral-200 bg-white
                    shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl
                    sm:min-h-[520px] sm:w-[48%] sm:min-w-[48%]
                    lg:min-h-0 lg:w-auto lg:min-w-0
                  "
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-neutral-100 sm:h-64">
                    <img
                      src={region.image}
                      alt={`${region.name} coffee region`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 shadow-sm backdrop-blur">
                      {region.name}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                        {region.name}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-neutral-600">
                        {region.profile}
                      </p>
                    </div>

                    {/* Data */}
                    <div className="mt-5 grid grid-cols-1 gap-4 border-t border-neutral-100 pt-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Altitude</span>
                        <p className="mt-1 font-medium text-neutral-900">
                          {region.altitude}
                        </p>
                      </div>

                      <div>
                        <span className="text-neutral-400">Climate</span>
                        <p className="mt-1 font-medium text-neutral-900">
                          {region.climate}
                        </p>
                      </div>

                      <div>
                        <span className="text-neutral-400">Soil</span>
                        <p className="mt-1 font-medium text-neutral-900">
                          {region.soil}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-6">
                      <Link
                        to="/catalog"
                        className="inline-flex items-center text-sm font-medium text-neutral-900 transition hover:text-neutral-700"
                      >
                        View coffees from {region.name}
                        <span className="ml-2" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Fade hint */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent lg:hidden" />
        </div>
      </div>
    </section>
  );
}