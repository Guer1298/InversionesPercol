import { useEffect } from "react";
import HeroSlider from "@/components/hero/HeroSlider";
import KPIBar from "@/components/sections/KPIBar";
import CTASection from "@/components/sections/CTASection";
import ExportMap from "@/components/sections/ExportMap";
import ThresherMachine from "@/components/sections/ThresherMachine";
import ExportBagsSection from "@/components/sections/ExportBagsSection";

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

      <div className="mt-8">
        <KPIBar />
      </div>
      <div className="mt-12">
        <CTASection />
      </div>
    </div>
  );
}