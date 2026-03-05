import { useMemo} from "react";

type Card = {
  title: string;
  priceFrom: string;
  rating: string;
  image: string;
  image2?: string; // 👈 segunda imagen
  alt: string;
  alt2?: string;
  badge?: string;
};

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M10 15.27l-5.18 2.73 1-5.81L1.64 7.9l5.84-.85L10 1.75l2.52 5.3 5.84.85-4.18 4.29 1 5.81z" />
    </svg>
  );
}

export default function ExportBagsShopRow() {
  const items = useMemo<Card[]>(
    () => [
      {
        title: "Export Bags",
        priceFrom: "70 kg / bag",
        rating: "5.0",
        image: "/images/Sacospercol.png",
        image2: "/images/saco2.png", // 👈 ejemplo
        alt: "Export green coffee bags with printed markings and lot identification",
        alt2: "Stacked export coffee bags prepared for shipment",
      },
      {
        title: "Lot Marking",
        priceFrom: "Lot • Origin • Variety",
        rating: "4.9",
        image: "/images/Sacospercol.png",
        image2: "/images/saco2.png", // 👈 tu rueda (o la ruta real)
        alt: "Close-up of coffee bag markings for lot identification",
        alt2: "Flavor wheel showing tasting notes categories",
        badge: "+ Quick add",
      },
      {
        title: "Jute Fabric",
        priceFrom: "Warehouse-safe",
        rating: "4.9",
        image: "/images/Sacospercol.png",
        image2: "/images/saco2.png",
        alt: "Durable jute fabric detail for export handling",
        alt2: "Close-up of bag markings",
      },
      {
        title: "Ready to Ship",
        priceFrom: "Container workflow",
        rating: "5.0",
        image: "/images/Sacospercol.png",
        image2: "/images/saco2.png",
        alt: "Stacked export coffee bags prepared for shipment",
        alt2: "Export green coffee bags with printed markings",
      },
    ],
    []
  );

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Export packaging
          </h2>

          <a
            href="/packaging"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
          >
            View all
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
              ›
            </span>
          </a>
        </div>

        {/* Cards */}
        <div className="mt-6">
          <div
            className="
              flex gap-6 overflow-x-auto pb-3
              [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
              sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0
              lg:grid-cols-4
            "
          >
            {items.map((p) => (
              <article
                key={p.title}
                className="group shrink-0 w-[78vw] max-w-[18rem] sm:w-auto sm:max-w-none"
              >
                {/* Image card */}
                <div className="relative rounded-2xl bg-neutral-50 p-6">
                  {/* Base image */}
                  <img
                    src={p.image}
                    alt={p.alt}
                    className={[
                      "mx-auto h-44 w-auto object-contain sm:h-48",
                      "transition duration-500 ease-out",
                      // 👇 cuando hay segunda imagen, la primera se desvanece un poco
                      p.image2 ? "group-hover:opacity-0 group-focus-within:opacity-0" : "",
                      // tap feedback en móvil
                      p.image2 ? "group-active:opacity-0" : "",
                    ].join(" ")}
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Hover image */}
                  {p.image2 ? (
                    <img
                      src={p.image2}
                      alt={p.alt2 ?? ""}
                      className={[
                        "pointer-events-none absolute inset-0 mx-auto",
                        "h-full w-full object-contain",
                        "p-6", // mantiene el mismo padding visual
                        "opacity-0",
                        "transition duration-500 ease-out",
                        // 👇 aparece al hover/focus/tap
                        "group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100",
                        // 👇 micro “zoom” premium
                        "group-hover:scale-[1.02] group-focus-within:scale-[1.02] group-active:scale-[1.02]",
                      ].join(" ")}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}

                  {/* Optional badge */}
                  {p.badge ? (
                    <div className="absolute inset-x-0 bottom-4 flex justify-center">
                      <div className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white shadow-sm">
                        {p.badge}
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Text */}
                <div className="pt-4 text-center">
                  <h3 className="text-base font-semibold text-neutral-900">{p.title}</h3>

                  <p className="mt-1 text-sm text-neutral-500">From {p.priceFrom}</p>

                  <div className="mt-2 flex items-center justify-center gap-1 text-sm text-neutral-900">
                    <span className="font-medium">{p.rating}</span>
                    <span className="text-amber-500">
                      <Star />
                    </span>
                  </div>

                  {/* Minimal hint (optional) */}
                  {p.image2 ? (
                    <p className="mt-2 text-[11px] text-neutral-400">
                      Hover / tap to preview
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-2 text-xs text-neutral-500 sm:hidden">Tip: swipe to browse.</p>
        </div>
      </div>
    </section>
  );
}