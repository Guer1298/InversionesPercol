import type { JSX } from "react";
import { Droplets, SunMedium, Users, Sprout, Factory, Recycle } from "lucide-react";

/* =========================
   MAIN PAGE
========================= */
export default function SustainabilityPage(): JSX.Element {
  return (
    <main className="bg-white">
      <PageHeader />
      <MetricsSection />
      <SocialImpactSection />
      <PracticesSection />
    </main>
  );
}

/* =========================
   PAGE HEADER
========================= */
function PageHeader() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          Sustainability
        </p>

        <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Sustainability that strengthens quality, trust, and long-term supply
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
          At Percol, sustainability is not presented as a side initiative. It is
          embedded in the way coffee is cultivated, processed, and brought to
          market with more consistency and lower operational risk.
        </p>
      </div>
    </section>
  );
}

/* =========================
   5.1 MÉTRICAS
========================= */
function MetricsSection() {
  return (
    <section className="border-b border-neutral-200 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            5.1 Metrics
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Measurable sustainability
          </h2>

          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            These indicators reflect operational discipline across water use,
            energy sourcing, and resource efficiency — all of which influence
            cost control, resilience, and export readiness.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <MetricCard
            icon={<Droplets size={18} />}
            label="Water usage"
            value="-32%"
            desc="Reduction achieved through optimized washing and controlled processing."
          />

          <MetricCard
            icon={<SunMedium size={18} />}
            label="Renewable energy"
            value="68%"
            desc="Energy sourced from solar and other low-impact operational systems."
          />

          <MetricCard
            icon={<Recycle size={18} />}
            label="Resource efficiency"
            value="+24%"
            desc="Improved output per kg of processed coffee through better process control."
          />
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 sm:px-6">
          <p className="text-sm leading-6 text-neutral-600">
            For international buyers, especially in Europe, measurable
            sustainability is not just a compliance signal. It is part of how
            long-term supply reliability is evaluated.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================
   5.2 IMPACTO SOCIAL
========================= */
function SocialImpactSection() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            5.2 Social impact
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Producer relationships that create measurable impact
          </h2>

          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Real sustainability is visible in the strength of the producer
            network, the economics behind production, and the continuity of the
            communities involved in the coffee supply chain.
          </p>
        </div>

        {/* Images */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ImageBlock src="/images/social/producer1.jpg" alt="Coffee producer in the field" />
          <ImageBlock src="/images/social/farm.jpg" alt="Coffee farm landscape" />
          <ImageBlock src="/images/social/community.jpg" alt="Coffee community and local impact" />
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <ImpactCard
            icon={<Users size={18} />}
            label="Producers supported"
            value="120+"
            desc="Direct relationships across coffee-producing areas connected to Percol’s value chain."
          />

          <ImpactCard
            icon={<Sprout size={18} />}
            label="Income increase"
            value="+18%"
            desc="Higher-value coffee linked to better pricing conditions and more stable producer outcomes."
          />

          <ImpactCard
            icon={<Factory size={18} />}
            label="Communities impacted"
            value="6 regions"
            desc="Economic activity distributed across multiple producing communities in Colombia."
          />
        </div>
      </div>
    </section>
  );
}

/* =========================
   5.3 PRÁCTICAS
========================= */
function PracticesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            5.3 Practices
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Sustainable practices integrated into daily operations
          </h2>

          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Sustainability becomes credible when it appears in cultivation,
            processing, and resource management decisions — not only in brand
            language.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <PracticeBlock
            title="Cultivation"
            desc="Selective picking, soil health management, and controlled fertilization practices designed to maintain plant stability and yield consistency."
          />

          <PracticeBlock
            title="Processing"
            desc="Water-efficient washing, controlled fermentation, and monitored drying protocols that support repeatable coffee quality."
          />

          <PracticeBlock
            title="Resource stewardship"
            desc="Waste reduction, water reuse systems, and energy optimization integrated into everyday operational workflows."
          />
        </div>

        <div className="mt-10 rounded-3xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6">
          <p className="max-w-3xl text-sm leading-6 text-neutral-600">
            These practices do more than improve sustainability performance.
            They also strengthen product credibility, support market access, and
            increase perceived value for buyers evaluating origin partners in
            serious export markets.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================
   COMPONENTS
========================= */
function MetricCard({
  icon,
  label,
  value,
  desc,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
  desc: string;
}) {
  return (
    <article className="rounded-3xl border border-neutral-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
          {label}
        </p>
        <div className="text-neutral-500">{icon}</div>
      </div>

      <p className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900">
        {value}
      </p>

      <p className="mt-3 text-sm leading-6 text-neutral-600">{desc}</p>
    </article>
  );
}

function ImpactCard({
  icon,
  label,
  value,
  desc,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
  desc: string;
}) {
  return (
    <article className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
          {label}
        </p>
        <div className="text-neutral-500">{icon}</div>
      </div>

      <p className="mt-4 text-2xl font-semibold tracking-tight text-neutral-900">
        {value}
      </p>

      <p className="mt-3 text-sm leading-6 text-neutral-600">{desc}</p>
    </article>
  );
}

function PracticeBlock({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <article className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6">
      <h3 className="text-base font-semibold tracking-tight text-neutral-900">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-neutral-600">{desc}</p>
    </article>
  );
}

function ImageBlock({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-neutral-200">
      <img
        src={src}
        alt={alt}
        className="h-64 w-full object-cover transition duration-700 hover:scale-[1.04] sm:h-72"
        loading="lazy"
      />
    </div>
  );
}