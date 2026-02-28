import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-sm font-semibold">PERCOL</div>
            <div className="mt-1 text-sm text-neutral-600">
              Export-ready Colombian green coffee.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <Link to="/solutions" className="text-neutral-600 hover:text-neutral-900">
              Solutions
            </Link>
            <Link to="/international" className="text-neutral-600 hover:text-neutral-900">
              International
            </Link>
            <Link to="/about" className="text-neutral-600 hover:text-neutral-900">
              About
            </Link>
            <Link to="/contact" className="text-neutral-600 hover:text-neutral-900">
              Contact
            </Link>
            <Link to="/inventory" className="text-neutral-600 hover:text-neutral-900">
              Inventory
            </Link>
            <Link to="/portal" className="text-neutral-600 hover:text-neutral-900">
              Client Login
            </Link>
          </div>
        </div>

        <div className="mt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} PERCOL. All rights reserved.
        </div>
      </div>
    </footer>
  );
}