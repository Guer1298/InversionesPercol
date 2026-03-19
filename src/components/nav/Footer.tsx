import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="max-w-sm">
            <p className="text-sm font-semibold tracking-[0.16em] text-neutral-900">
              PERCOL
            </p>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Traceable Colombian green coffee built for buyers who value
              consistency, clarity, and export-ready execution.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Explore
            </h3>

            <nav className="mt-4 grid gap-3 text-sm">
              <Link
                to="/catalog"
                className="text-neutral-600 transition hover:text-neutral-900"
              >
                Catalog
              </Link>
              <Link
                to="/origin"
                className="text-neutral-600 transition hover:text-neutral-900"
              >
                Origin
              </Link>
              <Link
                to="/traceability"
                className="text-neutral-600 transition hover:text-neutral-900"
              >
                Traceability
              </Link>
              <Link
                to="/sustainability"
                className="text-neutral-600 transition hover:text-neutral-900"
              >
                Sustainability
              </Link>
              <Link
                to="/logistics"
                className="text-neutral-600 transition hover:text-neutral-900"
              >
                Logistics
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Company
            </h3>

            <nav className="mt-4 grid gap-3 text-sm">
              <Link
                to="/about"
                className="text-neutral-600 transition hover:text-neutral-900"
              >
                About Percol
              </Link>
              <Link
                to="/contact"
                className="text-neutral-600 transition hover:text-neutral-900"
              >
                Request Samples
              </Link>
              <Link
                to="/contact"
                className="text-neutral-600 transition hover:text-neutral-900"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact / Trust */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-neutral-600">
              <p>Popayán, Colombia</p>
              <p>contacto@inverpercol.com</p>
              <p>+57 300 653 9966</p>
            </div>

            <div className="mt-6">
              <p className="text-xs leading-5 text-neutral-500">
                Direct export from Colombia • Transparent lots • Response within
                24h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PERCOL. All rights reserved.</p>
          <p>Built for specialty coffee buyers worldwide.</p>
        </div>
      </div>
    </footer>
  );
}