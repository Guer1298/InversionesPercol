import { NavLink, Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const navItems = [
  { to: "/solutions", label: "Solutions" },
  { to: "/international", label: "International" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function navClass(isActive: boolean) {
  return [
    "text-sm font-medium transition",
    "px-3 py-2 rounded-lg",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300",
    isActive
      ? "bg-neutral-900/5 text-neutral-900"
      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-900/5",
  ].join(" ");
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink to={to} className={({ isActive }) => navClass(isActive)}>
      {label}
    </NavLink>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/75 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-neutral-900/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
            aria-label="Go to homepage"
          >
            <div className="h-9 w-9 rounded-xl bg-neutral-900" aria-hidden="true" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">PERCOL</div>
              <div className="text-xs text-neutral-500">Green Coffee Export</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navItems.map((it) => (
              <NavItem key={it.to} to={it.to} label={it.label} />
            ))}

            {/* Inventory as “primary nav” item */}
            <NavLink to="/inventory" className={({ isActive }) => navClass(isActive)}>
              Inventory
            </NavLink>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#request-sample"
              className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
            >
              Request Sample
            </a>

            <Link
              to="/portal"
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition hover:text-neutral-900 hover:bg-neutral-900/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
            >
              Client Login
            </Link>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}