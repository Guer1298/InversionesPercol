import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PortalLayout() {
  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-50">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-sm text-neutral-300 hover:text-white">
            ← Back to website
          </Link>
          <div className="text-sm text-neutral-400">Client Portal (UI only)</div>
        </div>
      </div>

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-10">
        <Outlet />
      </main>
    </div>
  );
}