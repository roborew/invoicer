import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { Metadata } from "next";
import { fetchInvoicesPages } from "@/app/lib/data";

type SearchParams = {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Invoices",
};

export default async function Page(props: SearchParams) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <main className="space-y-6">
      <header className="flex flex-col gap-5 border-b border-sand-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-medium text-brand-700">
            Financial activity
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-sand-900 sm:text-3xl">
            Invoices
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-sand-800/70">
            Create, manage, and track invoices for your customers.
          </p>
        </div>

        <div className="shrink-0">
          <CreateInvoice />
        </div>
      </header>

      <section aria-label="Invoice list" className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Search placeholder="Search invoices..." />

          <p className="text-sm text-sand-800/60">
            {query ? `Results for “${query}”` : "All invoices"}
          </p>
        </div>

        <Suspense
          key={query + currentPage}
          fallback={<InvoicesTableSkeleton />}
        >
          <Table query={query} currentPage={currentPage} />
        </Suspense>
      </section>

      <div className="flex w-full justify-center pt-2">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
