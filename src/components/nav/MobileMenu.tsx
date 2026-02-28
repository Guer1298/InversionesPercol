import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/solutions", label: "Solutions" },
  { to: "/international", label: "International" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/inventory", label: "Inventory" },
  { to: "/portal", label: "Client Login" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Cierra al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Cierra con Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-neutral-900" aria-hidden="true" />
        Menu
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50"
          aria-hidden={!open}
        >
          <div
            className="absolute inset-0 bg-black/35"
            onClick={() => setOpen(false)}
          />

          {/* Sheet */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 h-dvh w-[88%] max-w-sm bg-white shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">PERCOL</div>
                <div className="text-xs text-neutral-500">Green Coffee Export</div>
              </div>

              <button
                type="button"
                className="rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            {/* Content */}
            <div className="px-4 py-4">
              <nav className="grid gap-1" aria-label="Mobile Navigation">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
                  >
                    <span>{l.label}</span>
                    <span className="text-neutral-400" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="my-5 border-t border-neutral-200" />

              {/* Primary CTA */}
              <a
                href="#request-sample"
                className="inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
                onClick={() => setOpen(false)}
              >
                Request Sample
              </a>

              {/* Secondary helper */}
              <div className="mt-3 text-xs text-neutral-500">
                Samples: 500g / 1kg / 2kg • Courier worldwide
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-neutral-200 px-4 py-4">
              <div className="text-xs text-neutral-500">
                Response time: ≤ 24h • Direct exporter
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}