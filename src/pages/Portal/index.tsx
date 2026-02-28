import { useEffect } from "react";

export default function PortalPage() {
  useEffect(() => {
    document.title = "PERCOL — Client Portal";
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h1 className="text-2xl font-semibold tracking-tight">Client Portal</h1>
      <p className="mt-2 text-sm text-neutral-300">
        Placeholder UI only. Next: login form + protected pages when backend exists.
      </p>
    </div>
  );
}