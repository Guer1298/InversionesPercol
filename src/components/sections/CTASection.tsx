export default function CTASection() {
  return (
    <section id="request-sample" className="rounded-2xl border border-neutral-200 bg-white">
      <div className="p-6 sm:p-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Request samples, fast.</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Tell us your target profile, volume, and destination. We’ll reply with available lots and
              shipping options.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Contact
              </a>
              <a
                href="/inventory"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                View Inventory
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
            <div className="text-sm font-medium">Sample options</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>• 500g / 1kg / 2kg</li>
              <li>• Worldwide shipping via courier</li>
              <li>• Typical reply time: ≤ 24h</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}