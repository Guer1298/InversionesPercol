import { type JSX } from "react";
type Coffee = {
  name: string;
  region: string;
  score: string;
  notes: string;
  image: string;

  altitude: string;
  variety: string;
  process: string;
  moisture: string;
  density: string;
  screen: string;

  acidity: string;
  body: string;
  sweetness: string;

  farm: string;
  producer: string;
  harvest: string;
  location: string;

  bags: string;
  packaging: string;
  incoterm: string;
  port: string;
  delivery: string;
};

const coffee: Coffee = {
  name: "Cauca Alto Select",
  region: "Cauca, Colombia",
  score: "86.5",
  notes: "Panela • Citrus • Chocolate",
  image: "/images/coffee1.jpg",

  altitude: "1,700 msnm",
  variety: "Castillo / Bourbon",
  process: "Washed",
  moisture: "10.5%",
  density: "High",
  screen: "16–18",

  acidity: "Medium-high",
  body: "Medium",
  sweetness: "High",

  farm: "Finca El Paraíso",
  producer: "José Martínez",
  harvest: "Oct 2025",
  location: "Popayán Plateau",

  bags: "120 bags available",
  packaging: "GrainPro + Jute",
  incoterm: "FOB",
  port: "Buenaventura",
  delivery: "15–20 days",
};

export default function CoffeeDetail(): JSX.Element {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          
          {/* Image */}
          <div className="h-[420px] md:h-[520px] bg-neutral-100">
            <img
              src={coffee.image}
              alt={coffee.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex items-center px-6 py-10 md:px-12">
            <div className="max-w-xl">

              <p className="text-sm text-neutral-500">{coffee.region}</p>

              <h1 className="mt-2 text-3xl font-semibold text-neutral-900 sm:text-4xl">
                {coffee.name}
              </h1>

              <div className="mt-3 inline-block rounded-full bg-neutral-900 px-3 py-1 text-sm text-white">
                {coffee.score} SCA
              </div>

              <p className="mt-4 text-base text-neutral-700">
                {coffee.notes}
              </p>

              {/* CTA */}
              <div className="mt-6 flex gap-3">
                <button className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800">
                  Request Samples
                </button>

                <button className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-xl font-semibold text-neutral-900">
          Technical Specifications
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
          {[
            ["Altitude", coffee.altitude],
            ["Variety", coffee.variety],
            ["Process", coffee.process],
            ["Moisture", coffee.moisture],
            ["Density", coffee.density],
            ["Screen Size", coffee.screen],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border p-4">
              <p className="text-xs text-neutral-500">{label}</p>
              <p className="mt-1 text-sm font-medium text-neutral-900">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CUP PROFILE */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-semibold text-neutral-900">
            Cup Profile
          </h2>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              ["Acidity", coffee.acidity],
              ["Body", coffee.body],
              ["Sweetness", coffee.sweetness],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-white p-6 border">
                <p className="text-sm text-neutral-500">{label}</p>
                <p className="mt-2 text-lg font-semibold text-neutral-900">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACEABILITY */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-xl font-semibold text-neutral-900">
          Traceability
        </h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border p-6">
            <p className="text-sm text-neutral-500">Farm</p>
            <p className="text-neutral-900 font-medium">{coffee.farm}</p>

            <p className="mt-4 text-sm text-neutral-500">Producer</p>
            <p className="text-neutral-900 font-medium">{coffee.producer}</p>

            <p className="mt-4 text-sm text-neutral-500">Harvest</p>
            <p className="text-neutral-900 font-medium">{coffee.harvest}</p>
          </div>

          <div className="rounded-xl border p-6">
            <p className="text-sm text-neutral-500">Location</p>
            <p className="text-neutral-900 font-medium">{coffee.location}</p>

            <p className="mt-4 text-sm text-neutral-500">Lot ID</p>
            <p className="text-neutral-900 font-medium">PCL-CAU-1025</p>

            <p className="mt-4 text-sm text-neutral-500">Process Details</p>
            <p className="text-neutral-900 font-medium">
              Fully washed, sun-dried on raised beds
            </p>
          </div>
        </div>
      </section>

      {/* LOGISTICS */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-semibold text-neutral-900">
            Availability & Logistics
          </h2>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              ["Availability", coffee.bags],
              ["Packaging", coffee.packaging],
              ["Incoterm", coffee.incoterm],
              ["Port", coffee.port],
              ["Delivery Time", coffee.delivery],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-white p-5 border">
                <p className="text-sm text-neutral-500">{label}</p>
                <p className="mt-1 font-medium text-neutral-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Ready to evaluate this coffee?
        </h2>

        <p className="mt-3 text-neutral-600">
          Request samples or contact our team to secure this lot.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800">
            Request Samples
          </button>

          <button className="rounded-full border px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100">
            Download Spec Sheet
          </button>
        </div>
      </section>

    </main>
  );
}