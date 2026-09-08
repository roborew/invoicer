import Image from "next/image";
import { UpdateInvoice, DeleteInvoice } from "@/app/ui/invoices/buttons";
import InvoiceStatus from "@/app/ui/invoices/status";
import { formatDateToLocal, formatCurrency } from "@/app/lib/utils";
import { fetchFilteredInvoices } from "@/app/lib/data";

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-3 w-full border-b border-sand-200 p-4 last:mb-0 last:border-b-0"
              >
                <div className="flex items-center justify-between border-b border-sand-200 pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={32}
                        height={32}
                        alt={`${invoice.name}'s profile picture`}
                      />

                      <p className="font-semibold text-sand-900">
                        {invoice.name}
                      </p>
                    </div>

                    <p className="text-sm text-sand-800/60">{invoice.email}</p>
                  </div>

                  <InvoiceStatus status={invoice.status} />
                </div>

                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-lg font-bold text-sand-900">
                      {formatCurrency(invoice.amount)}
                    </p>

                    <p className="mt-1 text-sm text-sand-800/60">
                      {formatDateToLocal(invoice.date)}
                    </p>
                  </div>

                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <table className="hidden min-w-full text-sand-900 md:table">
            <thead className="bg-sand-50 text-left text-xs font-semibold uppercase tracking-wide text-sand-800/60">
              <tr>
                <th scope="col" className="px-4 py-4 font-semibold sm:pl-6">
                  Customer
                </th>

                <th scope="col" className="px-3 py-4 font-semibold">
                  Email
                </th>

                <th scope="col" className="px-3 py-4 font-semibold">
                  Amount
                </th>

                <th scope="col" className="px-3 py-4 font-semibold">
                  Date
                </th>

                <th scope="col" className="px-3 py-4 font-semibold">
                  Status
                </th>

                <th scope="col" className="relative px-6 py-4">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-sand-200 bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full text-sm transition-colors hover:bg-sand-50"
                >
                  <td className="whitespace-nowrap py-4 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={32}
                        height={32}
                        alt={`${invoice.name}'s profile picture`}
                      />

                      <p className="font-medium text-sand-900">
                        {invoice.name}
                      </p>
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-3 py-4 text-sand-800/70">
                    {invoice.email}
                  </td>

                  <td className="whitespace-nowrap px-3 py-4 font-medium text-sand-900">
                    {formatCurrency(invoice.amount)}
                  </td>

                  <td className="whitespace-nowrap px-3 py-4 text-sand-800/70">
                    {formatDateToLocal(invoice.date)}
                  </td>

                  <td className="whitespace-nowrap px-3 py-4">
                    <InvoiceStatus status={invoice.status} />
                  </td>

                  <td className="whitespace-nowrap py-4 pl-6 pr-6">
                    <div className="flex justify-end gap-2">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
