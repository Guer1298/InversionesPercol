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
    <div className="py-10">
      <HeroSlider />
      <ExportMap />
      <ThresherMachine />
      <ExportBagsSection />
      <OurOriginsSection />

      
      <div className="mt-12">
        <CTASection />
      </div>
    </div>
  );
}