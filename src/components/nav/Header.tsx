import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/catalog", label: "Catalog" },
  { to: "/origin", label: "Origin" },
  { to: "/traceability", label: "Traceability" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/logistics", label: "Logistics" },
];

function navClass(isActive: boolean) {
  return [
    "relative px-3 py-2 text-[14px] font-medium transition-all duration-200",
    "focus:outline-none",
    isActive
      ? "text-neutral-900"
      : "text-neutral-500 hover:text-neutral-900",
  ].join(" ");
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink to={to} className={({ isActive }) => navClass(isActive)}>
      {label}
      <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-neutral-900 transition-all duration-300 group-hover:w-full" />
    </NavLink>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">

          {/* LEFT — LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Percol homepage"
          >
            <img
              src="/images/percol/Hpercol.svg"
              alt="Percol logo"
              className="h-9 w-auto"
            />
            <span className="text-[16px] font-semibold tracking-[0.2em] text-neutral-900">
              PERCOL
            </span>
          </Link>

          {/* CENTER — NAV */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} />
            ))}
          </nav>

          {/* RIGHT — CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#request-samples"
              className="rounded-full border border-neutral-300 px-5 py-2 text-[14px] font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
            >
              Request Samples
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-neutral-700"
            aria-label="Toggle Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-[15px] font-medium text-neutral-700 hover:text-neutral-900"
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href="#request-samples"
              className="mt-4 rounded-full bg-neutral-900 px-5 py-3 text-center text-[14px] font-semibold text-white"
            >
              Request Samples
            </a>
          </div>
        </div>
      )}
    </header>
  );
}