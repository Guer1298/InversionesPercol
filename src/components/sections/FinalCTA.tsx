import type { JSX } from "react";
import { Link } from "react-router-dom";

export default function FinalCTA(): JSX.Element {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-16 text-white sm:py-20 lg:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl sm:h-[420px] sm:w-[420px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-10 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            Request samples
          </p>

          {/* Headline */}
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Ready to evaluate the coffee with more clarity?
          </h2>

          {/* Reassurance */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
            Evaluate the coffee. Review the data. Make a decision with less
            uncertainty and more confidence.
          </p>

          {/* CTA group */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-neutral-950 sm:px-8"
            >
              Request Samples Now
            </Link>

            <Link
              to="/catalog"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
            >
              View catalog
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-6 flex flex-col items-center justify-center gap-2 text-xs text-white/50 sm:mt-8 sm:flex-row sm:gap-3">
            <span>Direct export from Colombia</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>Transparent lots</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>Response within 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
}