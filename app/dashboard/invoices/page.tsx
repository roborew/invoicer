import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { lusitana } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchInvoicesPages } from "@/app/lib/data";
type searchParams = {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
};

export default async function Page(props: searchParams) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);
  return (
    <section aria-label="Invoice list">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Search placeholder="Search invoices..." />

        <p className="text-sm text-sand-800/60">
          {query ? `Results for “${query}”` : "All invoices"}
        </p>
      </div>

      <div className="mt-6">
        <div className="mt-6">
          <Suspense
            key={query + currentPage}
            fallback={<InvoicesTableSkeleton />}
          >
            <Table query={query} currentPage={currentPage} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
