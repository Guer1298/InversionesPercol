import { useMemo, useState } from "react";
import { HiOutlineClock, HiOutlineGlobeAmericas } from "react-icons/hi2";

type FormState = {
  company: string;
  email: string;
  interest: "Samples" | "RFQ" | "Inventory" | "Other";
  message: string;
};

const initial: FormState = {
  company: "",
  email: "",
  interest: "Samples",
  message: "",
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function ContactSection() {
  const [data, setData] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!data.company.trim()) e.company = "Company is required.";
    if (!isEmail(data.email)) e.email = "Enter a valid business email.";
    if (!data.message.trim()) e.message = "Please add a short message.";
    return e;
  }, [data]);

  const canSubmit = Object.keys(errors).length === 0;

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    setSubmitted(false);
  }

  function onBlur<K extends keyof FormState>(key: K) {
    setTouched((prev) => ({ ...prev, [key]: true }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    setTouched({
      company: true,
      email: true,
      message: true,
    });

    if (!canSubmit) return;
    setSubmitted(true);
  }

  return (
    <section
      id="request-sample"
      className="relative bg-white"
      aria-labelledby="contact-section-title"
    >
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(122,74,42,0.06),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(78,111,58,0.05),transparent_38%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="max-w-xl">
              <div className="text-xs font-semibold tracking-[0.16em] text-neutral-500">
                REQUEST SAMPLE
              </div>

              <h2
                id="contact-section-title"
                className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl"
              >
                Start with a serious inquiry.
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
                Tell us what you need and where it needs to go. We’ll reply with available lots,
                sample options, and the clearest next step for your buying process.
              </p>

              <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-neutral-700 backdrop-blur">
                <span>DIRECT EXPORTER</span>
                <span className="opacity-40">•</span>
                <span>TRACEABLE LOTS</span>
                <span className="opacity-40">•</span>
                <span>REPLY ≤ 24H</span>
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              {[
                {
                  icon: HiOutlineClock,
                  title: "Fast reply",
                  body: "Usually within 24 hours on business days.",
                },
                {
                  icon: HiOutlineGlobeAmericas,
                  title: "Buyer-ready guidance",
                  body: "Lots, samples, and shipping options based on your market.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-neutral-200 bg-neutral-50/80 p-5 backdrop-blur"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-700">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-neutral-900">
                          {item.title}
                        </div>
                        <div className="mt-1 text-sm leading-6 text-neutral-600">
                          {item.body}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-[2rem] border border-neutral-200 bg-white/90 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-neutral-900">
                    Send inquiry
                  </div>
                  <p className="mt-1 text-sm leading-6 text-neutral-600">
                    Minimal information, clear next step.
                  </p>
                </div>

                <div className="hidden rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-right sm:block">
                  <div className="text-[11px] font-semibold tracking-wide text-neutral-500">
                    RESPONSE
                  </div>
                  <div className="text-sm font-semibold text-neutral-900">≤ 24h</div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field
                  label="Company"
                  value={data.company}
                  onChange={(v) => onChange("company", v)}
                  onBlur={() => onBlur("company")}
                  error={touched.company ? errors.company : undefined}
                  placeholder="Your company"
                />

                <Field
                  label="Business email"
                  value={data.email}
                  onChange={(v) => onChange("email", v)}
                  onBlur={() => onBlur("email")}
                  error={touched.email ? errors.email : undefined}
                  placeholder="name@company.com"
                />

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-neutral-900">Interest</label>
                  <select
                    value={data.interest}
                    onChange={(e) => onChange("interest", e.target.value as FormState["interest"])}
                    className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-400 focus:ring-4 focus:ring-neutral-900/5"
                  >
                    <option>Samples</option>
                    <option>RFQ</option>
                    <option>Inventory</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-neutral-900">Message</label>
                  <textarea
                    value={data.message}
                    onChange={(e) => onChange("message", e.target.value)}
                    onBlur={() => onBlur("message")}
                    rows={5}
                    className="mt-2 w-full resize-none rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-4 focus:ring-neutral-900/5"
                    placeholder="Destination, target volume, preferred profile, and timeline."
                  />
                  {touched.message && errors.message ? (
                    <p className="mt-2 text-xs font-medium text-red-600">{errors.message}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={[
                    "inline-flex min-w-[170px] items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200",
                    canSubmit
                      ? "bg-[#7A4A2A] text-white hover:bg-[#6A3F23]"
                      : "cursor-not-allowed bg-neutral-200 text-neutral-500",
                  ].join(" ")}
                >
                  Request response
                </button>

                {submitted ? (
                  <div className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                    Inquiry ready. Connect this form to your backend or email service.
                  </div>
                ) : (
                  <div className="text-xs text-neutral-500">
                    Best results: include destination and target volume.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: string;
}) {
  const { label, value, onChange, onBlur, placeholder, error } = props;

  return (
    <div>
      <label className="text-sm font-medium text-neutral-900">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={[
          "mt-2 w-full rounded-2xl bg-white px-4 py-3 text-sm outline-none transition",
          "placeholder:text-neutral-400 focus:ring-4",
          error
            ? "border border-red-300 focus:border-red-400 focus:ring-red-100"
            : "border border-neutral-200 focus:border-neutral-400 focus:ring-neutral-900/5",
        ].join(" ")}
        placeholder={placeholder}
      />
      {error ? <p className="mt-2 text-xs font-medium text-red-600">{error}</p> : null}
    </div>
  );
}