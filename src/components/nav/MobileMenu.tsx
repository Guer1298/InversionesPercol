import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineBars3,
  HiOutlineXMark,
  HiOutlineGlobeAmericas,
  HiOutlineSquares2X2,
  HiOutlineInboxStack,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { FiArrowUpRight, FiPhoneCall } from "react-icons/fi";
import { LuPackageCheck } from "react-icons/lu";

type MenuItem = {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const links: MenuItem[] = [
  { to: "/solutions", label: "Solutions", icon: HiOutlineSquares2X2 },
  { to: "/international", label: "International", icon: HiOutlineGlobeAmericas },
  { to: "/inventory", label: "Inventory", icon: HiOutlineInboxStack },
  { to: "/about", label: "About", icon: LuPackageCheck },
  { to: "/contact", label: "Contact", icon: FiPhoneCall },
  { to: "/portal", label: "Client Login", icon: HiOutlineUserCircle },
];

function itemClass(isActive: boolean) {
  return [
    "group flex items-center justify-between rounded-2xl px-3 py-3.5 transition-all duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4A2A]/20",
    isActive
      ? "bg-[#7A4A2A] text-white shadow-sm"
      : "text-neutral-800 hover:bg-[#4E6F3A]/[0.06]",
  ].join(" ");
}

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const primaryLinks = useMemo(() => links.slice(0, 5), []);
  const secondaryLink = useMemo(() => links[5], []);

  return (
    <>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-2.5 text-sm font-medium text-neutral-800 shadow-sm transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4A2A]/20"
      >
        <HiOutlineBars3 className="h-4 w-4" aria-hidden="true" />
        
      </button>

      {open && (
        <div className="fixed inset-0 z-[60]" aria-hidden={!open}>
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-black/35 backdrop-blur-[3px]"
            onClick={() => setOpen(false)}
          />

          {/* Sheet */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 flex h-dvh w-[90%] max-w-sm flex-col border-l border-neutral-200 bg-white shadow-2xl"
          >
            {/* Top brand bar */}
            <div className="border-b border-neutral-200 bg-gradient-to-b from-[#7A4A2A]/[0.05] to-white px-4 pb-4 pt-4">
              <div className="flex items-center justify-between gap-3">
                <Link
                  to="/"
                  className="flex min-w-0 items-center gap-3 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4A2A]/20"
                  aria-label="Percol homepage"
                >
                  <img
                    src="/images/percol/Hpercol.svg"
                    alt="Percol logo"
                    className="h-10 w-auto object-contain"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold tracking-[0.14em] text-neutral-900">
                      PERCOL
                    </div>
                    <div className="text-xs text-neutral-500">
                      C.I Inversiones
                    </div>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4A2A]/20"
                >
                  <HiOutlineXMark className="h-5 w-5" />
                </button>
              </div>

              {/* Trust line */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-medium tracking-wide text-neutral-500">
                <span>DIRECT EXPORTER</span>
                <span className="opacity-40">•</span>
                <span className="text-[#4E6F3A]">VERIFIED QA</span>
                <span className="opacity-40">•</span>
                <span>REPLY ≤ 24H</span>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {/* Primary nav */}
              <nav className="grid gap-2" aria-label="Mobile navigation">
                {primaryLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.to;

                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={itemClass(isActive)}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={[
                            "inline-flex h-10 w-10 items-center justify-center rounded-2xl border transition",
                            isActive
                              ? "border-white/10 bg-white/10 text-white"
                              : "border-neutral-200 bg-neutral-50 text-neutral-700 group-hover:border-[#4E6F3A]/20 group-hover:bg-white",
                          ].join(" ")}
                        >
                          <Icon className="h-[18px] w-[18px]" />
                        </span>

                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">{item.label}</span>
                        </div>
                      </div>

                      <FiArrowUpRight
                        className={[
                          "h-4 w-4 transition",
                          isActive
                            ? "text-white/80"
                            : "text-neutral-400 group-hover:text-[#4E6F3A]",
                        ].join(" ")}
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
              </nav>

              <div className="my-5 border-t border-neutral-200" />

              {/* Secondary area */}
              <div className="grid gap-3">
                <Link
                  to={secondaryLink.to}
                  className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-sm font-medium text-neutral-800 transition hover:border-[#4E6F3A]/20 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4A2A]/20"
                >
                  <div className="flex items-center gap-3">
                    <secondaryLink.icon className="h-5 w-5 text-neutral-600" />
                    <span>{secondaryLink.label}</span>
                  </div>
                  <FiArrowUpRight className="h-4 w-4 text-neutral-400" />
                </Link>

                {/* CTA */}
                <a
                  href="#request-sample"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-[#7A4A2A] px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6A3F23] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4A2A]/20"
                >
                  Request Sample
                </a>

                {/* Helper card */}
                <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-[#4E6F3A]/[0.05] via-white to-[#C43A2F]/[0.04] p-4">
                  <div className="text-sm font-semibold text-neutral-900">
                    Sample options
                  </div>
                  <div className="mt-2 grid gap-1 text-xs leading-5 text-neutral-600">
                    <span>500g / 1kg / 2kg</span>
                    <span>Worldwide courier shipping</span>
                    <span>Typical response time: ≤ 24h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-200 bg-neutral-50/70 px-4 py-4">
              <div className="text-xs leading-5 text-neutral-500">
                Built for buyers who need traceability, clarity, and export-ready execution.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}