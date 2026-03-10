import { NavLink, Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const navItems = [
  { to: "/solutions", label: "Solutions" },
  { to: "/international", label: "International" },
  { to: "/inventory", label: "Inventory" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function navClass(isActive: boolean) {
  return [
    "relative inline-flex items-center px-4 py-2 text-[15px] font-medium transition-colors duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300",
    isActive
      ? "text-neutral-900"
      : "text-neutral-500 hover:text-[#4E6F3A]",
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
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            aria-label="Percol homepage"
            className="group flex items-center gap-3"
          >
            <img
              src="/images/percol/Hpercol.svg"
              alt="Percol logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />

            <span className="text-[18px] font-semibold tracking-[0.18em] text-neutral-900">
              PERCOL
            </span>
          </Link>

          {/* Navigation */}
          <nav
            className="hidden items-center gap-2 md:flex"
            aria-label="Primary"
          >
            {navItems.map((it) => (
              <NavItem key={it.to} to={it.to} label={it.label} />
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/portal"
              className="text-[15px] font-medium text-neutral-500 transition hover:text-neutral-900"
            >
              Client Login
            </Link>

            <a
              href="#request-sample"
              className="rounded-full bg-[#7A4A2A] px-5 py-2.5 text-[15px] font-semibold text-white transition hover:bg-[#6A3F23]"
            >
              Request Sample
            </a>
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