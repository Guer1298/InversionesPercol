import  { type JSX } from "react";

/* =========================
   MAIN PAGE
========================= */
export default function OriginCaucaPage(): JSX.Element {
  return (
    <main className="bg-white">

      <TerroirSection />
      <CupProfileSection />
      <VisualStorySection />

    </main>
  );
}

/* =========================
   6.1 TERROIR
========================= */
function TerroirSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid gap-12 md:grid-cols-2 items-center">

        {/* Image */}
        <div className="relative h-[420px] overflow-hidden rounded-2xl bg-neutral-100">
          <img
            src="/images/origins/cauca-landscape.jpg"
            alt="Cauca coffee region landscape"
            className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-semibold text-neutral-900">
            Cauca, Colombia
          </h2>

          <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
            A high-altitude region defined by volcanic soils, stable mountain
            climate, and slow cherry development. These conditions create
            structure, clarity, and balance in the cup.
          </p>

          <div className="mt-8 grid gap-6 text-sm">

            <div>
              <span className="text-neutral-500">Altitude</span>
              <p className="font-medium text-neutral-900">
                1,600 – 2,000 masl
              </p>
            </div>

            <div>
              <span className="text-neutral-500">Climate</span>
              <p className="font-medium text-neutral-900">
                Stable rainfall with moderate temperatures
              </p>
            </div>

            <div>
              <span className="text-neutral-500">Soil</span>
              <p className="font-medium text-neutral-900">
                Volcanic, mineral-rich, well-drained
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* =========================
   6.2 CUP PROFILE (SCIENCE → SENSORY)
========================= */
function CupProfileSection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            How terroir shapes the cup
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            Each environmental factor influences how the coffee develops,
            resulting in distinct sensory outcomes.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">

          {/* Altitude */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">
              Altitude → Complexity
            </h3>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Higher altitudes slow down cherry maturation, allowing sugars and
              acids to develop more gradually. This results in brighter acidity
              and more complex flavor structures.
            </p>
            <p className="mt-3 text-sm text-neutral-800">
              Result: citrus brightness, layered sweetness
            </p>
          </div>

          {/* Climate */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">
              Climate → Development
            </h3>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Consistent rainfall and stable temperatures reduce stress on the
              plant, producing uniform cherries and predictable quality.
            </p>
            <p className="mt-3 text-sm text-neutral-800">
              Result: balance, clean cup, consistency
            </p>
          </div>

          {/* Soil */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">
              Soil → Character
            </h3>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Volcanic soils provide essential minerals that influence body and
              depth, contributing to structure and sweetness.
            </p>
            <p className="mt-3 text-sm text-neutral-800">
              Result: caramel notes, round body
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

/* =========================
   6.3 VISUAL STORY (DOCUMENTARY)
========================= */
function VisualStorySection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            People behind the coffee
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            Farms, producers, and daily work. Real conditions that define real
            coffee.
          </p>
        </div>

        {/* Image Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <ImageBlock src="/images/story/farm.jpg" />
          <ImageBlock src="/images/story/producer.jpg" />
          <ImageBlock src="/images/story/harvest.jpg" />
          <ImageBlock src="/images/story/process.jpg" />
          <ImageBlock src="/images/story/landscape.jpg" />
          <ImageBlock src="/images/story/drying.jpg" />

        </div>

      </div>
    </section>
  );
}

/* =========================
   IMAGE BLOCK
========================= */
function ImageBlock({ src }: { src: string }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-neutral-100">
      <img
        src={src}
        alt="Coffee origin visual"
        className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]"
      />
    </div>
  );
}