import { Link } from "react-router-dom";

type Coffee = {
  slug: string;
  name: string;
  region: string;
  notes: string;
  score: string;
  image: string;
  alt: string;
  tag: string;
};

const coffees: Coffee[] = [
  {
    slug: "cauca-alto-select",
    name: "Cauca Alto Select",
    region: "Cauca, Colombia",
    notes: "Panela • Citrus • Chocolate",
    score: "86.5",
    image: "/images/saco3.png",
    alt: "Green coffee beans from Cauca high altitude farms",
    tag: "Export-ready lot",
  },
  {
    slug: "volcanic-washed-reserve",
    name: "Volcanic Washed Reserve",
    region: "Popayán Plateau",
    notes: "Red fruits • Caramel • Floral",
    score: "87.2",
    image: "/images/saco3.png",
    alt: "Washed process coffee beans with bright acidity",
    tag: "High-score profile",
  },
  {
    slug: "mountain-shade-bourbon",
    name: "Mountain Shade Bourbon",
    region: "Andean Highlands",
    notes: "Cocoa • Almond • Sweet spice",
    score: "85.8",
    image: "/images/saco3.png",
    alt: "Bourbon variety coffee grown under shade",
    tag: "Stable cup profile",
  },
];

export default function FeaturedCoffees() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Featured selection
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
              Featured coffees
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
              Export-ready specialty coffees with traceability, consistent cup
              profiles, and verified quality for buyers who want clarity before
              they commit.
            </p>
          </div>

          <div className="hidden lg:block">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-800 transition hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900"
            >
              View full catalog
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-base"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile/tablet helper */}
        <div className="mt-6 flex items-center justify-between lg:hidden">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
            Swipe to explore
          </p>
          <p className="text-xs text-neutral-400">{coffees.length} coffees</p>
        </div>

        {/* Cards */}
        <div className="relative mt-8 sm:mt-10">
          <div className="overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex snap-x snap-mandatory gap-4 pr-4 sm:gap-5 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pr-0">
              {coffees.map((coffee) => (
                <article
                  key={coffee.slug}
                  className="
                    group flex min-h-[430px] w-[85%] min-w-[85%] snap-start flex-col
                    overflow-hidden rounded-3xl border border-neutral-200 bg-white
                    transition duration-300 hover:-translate-y-1 hover:shadow-xl
                    sm:w-[380px] sm:min-w-[380px]
                    lg:min-h-0 lg:w-auto lg:min-w-0
                  "
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-neutral-100">
                    <img
                      src={coffee.image}
                      alt={coffee.alt}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:h-64"
                      loading="lazy"
                    />

                    {/* Score */}
                    <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 shadow-sm backdrop-blur">
                      {coffee.score} SCA
                    </div>

                    {/* Tag */}
                    <div className="absolute bottom-4 left-4 inline-flex items-center rounded-full bg-neutral-900/85 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      {coffee.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                        {coffee.name}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-500">
                        {coffee.region}
                      </p>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm leading-6 text-neutral-700">
                        {coffee.notes}
                      </p>
                    </div>

                    <div className="mt-auto pt-5">
                      <div className="flex items-center justify-between gap-4 border-t border-neutral-100 pt-4">
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-wide text-neutral-400">
                            Cup profile
                          </p>
                          <p className="mt-1 text-sm font-medium text-neutral-800">
                            Clean and export-ready
                          </p>
                        </div>

                        <Link
                          to={`/catalog/${coffee.slug}`}
                          className="inline-flex shrink-0 items-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
                          aria-label={`View details for ${coffee.name}`}
                        >
                          View details
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right fade hint */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent lg:hidden" />
        </div>

        {/* Mobile / tablet CTA */}
        <div className="mt-8 lg:hidden">
          <Link
            to="/catalog"
            className="inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            View full catalog
          </Link>
        </div>
      </div>
    </section>
  );
}