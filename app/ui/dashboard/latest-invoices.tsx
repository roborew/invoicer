import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { fetchLatestInvoices } from "@/app/lib/data";

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="flex w-full flex-col rounded-2xl border border-sand-200 bg-white p-5 md:col-span-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold tracking-tight text-sand-900">
            Latest invoices
          </h2>
          <p className="mt-1 text-sm text-sand-800/60">
            Your most recent invoice activity.
          </p>
        </div>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
          <ArrowPathIcon className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-6 divide-y divide-sand-200">
        {latestInvoices.map((invoice) => {
          return (
            <div
              key={invoice.id}
              className="flex min-w-0 flex-row items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
            >
              <div className="flex min-w-0 items-center">
                <Image
                  src={invoice.image_url}
                  alt={`${invoice.name}'s profile picture`}
                  className="mr-3 rounded-full"
                  width={32}
                  height={32}
                />

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-sand-900">
                    {invoice.name}
                  </p>

                  <p className="hidden truncate text-sm text-sand-800/60 sm:block">
                    {invoice.email}
                  </p>
                </div>
              </div>

              <p className="shrink-0 truncate text-sm font-semibold text-sand-900">
                {invoice.amount}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-auto flex items-center pt-6 text-sm text-sand-800/60">
        <ArrowPathIcon className="h-5 w-5" />
        <span className="ml-2">Updated just now</span>
      </div>
    </div>
  );
}
