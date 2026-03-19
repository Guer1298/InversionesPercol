import { useEffect } from "react";
import HeroSlider from "@/components/hero/HeroSlider";

import ExportBagsSection from "@/components/sections/ExportBagsSection";
import OurOriginsSection from "@/components/sections/OurOriginsSection";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyPercol from "@/components/sections/WhyPercol";
import PercolMetrics from "@/components/sections/PercolMetrics";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  useEffect(() => {
    document.title = "PERCOL — Export-ready Colombian Green Coffee";
  }, []);

  return (
    <div className="bg-white">
  <HeroSlider />

  <main className="relative">

     <section>
      <HowItWorks />
    </section>

     <section className="py-16 sm:py-20 lg:py-24">
      <ExportBagsSection />
    </section>

    

    <section>
      <WhyPercol />
    </section>
    <section>
      <PercolMetrics />
    </section>

    <section className="bg-neutral-50/60 py-16 sm:py-20 lg:py-24">
      <OurOriginsSection />
    </section>

    <section>
      <FinalCTA />
    </section>
    
  </main>
</div>
  );
}