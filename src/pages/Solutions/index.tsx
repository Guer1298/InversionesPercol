import { useEffect } from "react";

export default function SolutionsPage() {
  useEffect(() => {
    document.title = "PERCOL — Solutions";
  }, []);

  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Solutions</h1>
      <p className="mt-3 text-sm text-neutral-600">
        B2B export solutions (placeholder). Next: services grid + gallery + CTA.
      </p>
    </div>
  );
}