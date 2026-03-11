import { useEffect } from "react";
import HeroSlider from "@/components/hero/HeroSlider";
import CTASection from "@/components/sections/CTASection";
import ExportMap from "@/components/sections/ExportMap";
import ThresherMachine from "@/components/sections/ThresherMachine";
import ExportBagsSection from "@/components/sections/ExportBagsSection";
import OurOriginsSection from "@/components/sections/OurOriginsSection";

export default function HomePage() {
  useEffect(() => {
    document.title = "PERCOL — Export-ready Colombian Green Coffee";
  }, []);

  return (
    <div className="bg-white">
  <HeroSlider />

  <main className="relative">
    <section className="py-16 sm:py-20 lg:py-24">
      <ExportMap />
    </section>

    <section className="bg-neutral-50/60 py-16 sm:py-20 lg:py-24">
      <ThresherMachine />
    </section>

    <section className="py-16 sm:py-20 lg:py-24">
      <ExportBagsSection />
    </section>

    <section className="bg-neutral-50/60 py-16 sm:py-20 lg:py-24">
      <OurOriginsSection />
    </section>

    <section className="py-16 sm:py-20 lg:py-24">
      <CTASection />
    </section>
  </main>
</div>
  );
}