import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { Suspense } from "react";
import { Metadata } from "next";
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from "@/app/ui/skeletons";
import CardWrapper from "@/app/ui/dashboard/cards";
import { CreateInvoice } from "@/app/ui/invoices/buttons";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  return (
    <main className="space-y-8">
      <header className="flex flex-col gap-5 border-b border-sand-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-medium text-brand-700">
            Business overview
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-sand-900 sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-sand-800/70">
            Keep track of your invoices, customers, and recent business
            activity.
          </p>
        </div>

        <div className="shrink-0">
          <CreateInvoice />
        </div>
      </header>

      <section
        aria-label="Summary"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </section>

      <section
        aria-label="Business activity"
        className="grid grid-cols-1 gap-6 lg:grid-cols-8"
      >
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </section>
    </main>
  );
}
