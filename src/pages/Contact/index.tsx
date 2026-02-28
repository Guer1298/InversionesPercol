import { useEffect, useMemo, useState } from "react";

type FormState = {
  company: string;
  name: string;
  email: string;
  country: string;
  interest: "Samples" | "RFQ" | "Inventory" | "Other";
  message: string;
};

const initial: FormState = {
  company: "",
  name: "",
  email: "",
  country: "",
  interest: "Samples",
  message: "",
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function ContactPage() {
  useEffect(() => {
    document.title = "PERCOL — Contact";
  }, []);

  const [data, setData] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!data.company.trim()) e.company = "Company is required.";
    if (!data.name.trim()) e.name = "Name is required.";
    if (!isEmail(data.email)) e.email = "Valid email is required.";
    if (!data.country.trim()) e.country = "Country is required.";
    if (!data.message.trim()) e.message = "Message is required.";
    return e;
  }, [data]);

  const canSubmit = Object.keys(errors).length === 0;

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    setSubmitted(false);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Frontend-only: aquí luego conectas a API / email service.
    if (!canSubmit) return;

    setSubmitted(true);
    // opcional: reset
    // setData(initial);
  }

  return (
    <div className="py-10">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-medium tracking-wide text-neutral-500">CONTACT</div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Talk to our export team.</h1>
          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base">
            Send your destination, target volume, and preferred profiles. We will respond with available lots,
            sample options, and shipping guidance.
          </p>

          <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <div className="text-sm font-semibold">Typical response</div>
            <div className="mt-1 text-sm text-neutral-700">≤ 24 hours</div>
            <div className="mt-4 text-xs text-neutral-500">
              (Frontend-only demo. Later: connect to backend / email service.)
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={onSubmit} className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Company"
                value={data.company}
                onChange={(v) => onChange("company", v)}
                error={errors.company}
                placeholder="Your company name"
              />
              <Field
                label="Full name"
                value={data.name}
                onChange={(v) => onChange("name", v)}
                error={errors.name}
                placeholder="Your name"
              />
              <Field
                label="Email"
                value={data.email}
                onChange={(v) => onChange("email", v)}
                error={errors.email}
                placeholder="name@company.com"
              />
              <Field
                label="Country"
                value={data.country}
                onChange={(v) => onChange("country", v)}
                error={errors.country}
                placeholder="USA / Germany / Japan..."
              />

              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Interest</label>
                <select
                  value={data.interest}
                  onChange={(e) => onChange("interest", e.target.value as FormState["interest"])}
                  className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-400"
                >
                  <option>Samples</option>
                  <option>RFQ</option>
                  <option>Inventory</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  value={data.message}
                  onChange={(e) => onChange("message", e.target.value)}
                  rows={6}
                  className="mt-2 w-full resize-none rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-400"
                  placeholder="Destination, target volume, preferred profiles, timeline..."
                />
                {errors.message && <p className="mt-2 text-xs text-red-600">{errors.message}</p>}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={!canSubmit}
                className={[
                  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium",
                  canSubmit
                    ? "bg-neutral-900 text-white hover:bg-neutral-800"
                    : "cursor-not-allowed bg-neutral-200 text-neutral-500",
                ].join(" ")}
              >
                Send message
              </button>

              {submitted && (
                <div className="text-sm text-neutral-700">
                  ✅ Message ready. Next step: connect to backend/email.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
}) {
  const { label, value, onChange, placeholder, error } = props;

  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-400"
        placeholder={placeholder}
      />
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
}