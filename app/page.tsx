import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import QuibillLogo from "@/app/ui/quibill-logo";

export const metadata: Metadata = {
  title: "Simple invoicing for growing businesses",
  description: "Create, manage, and track invoices with Quibill.",
};

const features = [
  "Create professional invoices in seconds",
  "Track paid and pending invoices in one place",
  "Keep customer and payment activity organized",
];

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-sand-50">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Quibill home">
          <QuibillLogo />
        </Link>

        <nav
          className="flex items-center gap-3"
          aria-label="Primary navigation"
        >
          <Link
            href="/login"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-sand-800/70 transition-colors hover:bg-sand-100 hover:text-sand-900 focus-visible:outline-brand-600"
          >
            Sign in
          </Link>

          <Link
            href="/dashboard"
            className="hidden rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus-visible:outline-brand-600 sm:inline-flex"
          >
            Open dashboard
          </Link>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Invoicing made simple
          </div>

          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-sand-900 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            Spend less time managing invoices.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-sand-800/70 sm:text-lg">
            Quibill gives you a clear, focused way to create invoices, manage
            customers, and keep track of your business activity.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/login"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus-visible:outline-brand-600"
            >
              Get started
              <ArrowRightIcon className="h-5 w-5" />
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-sand-200 bg-white px-5 text-sm font-semibold text-sand-800 transition-colors hover:bg-sand-100 focus-visible:outline-brand-600"
            >
              View dashboard
            </Link>
          </div>

          <ul className="mt-10 space-y-3" aria-label="Quibill features">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-sand-800/70"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:pl-4">
          <div className="absolute -inset-6 rounded-[2rem] bg-brand-100/50 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-sand-200 bg-white p-2 shadow-xl shadow-sand-900/10 sm:p-3">
            <Image
              src="/hero-desktop.png"
              width={1000}
              height={760}
              priority
              className="hidden h-auto w-full rounded-xl md:block"
              alt="Quibill dashboard showing invoice and business activity data"
            />

            <Image
              src="/hero-mobile.png"
              width={560}
              height={620}
              priority
              className="block h-auto w-full rounded-xl md:hidden"
              alt="Quibill dashboard on a mobile device"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-sand-200 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 sm:grid-cols-3 sm:px-8 lg:px-10">
          <div>
            <p className="text-sm font-semibold text-brand-700">01</p>
            <h2 className="mt-2 text-base font-bold text-sand-900">
              Clear overview
            </h2>
            <p className="mt-2 text-sm leading-6 text-sand-800/60">
              See your revenue, invoices, and customers at a glance.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-700">02</p>
            <h2 className="mt-2 text-base font-bold text-sand-900">
              Faster workflows
            </h2>
            <p className="mt-2 text-sm leading-6 text-sand-800/60">
              Create and update invoices without unnecessary steps.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-700">03</p>
            <h2 className="mt-2 text-base font-bold text-sand-900">
              Built to stay organized
            </h2>
            <p className="mt-2 text-sm leading-6 text-sand-800/60">
              Keep customer details and payment status easy to find.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
