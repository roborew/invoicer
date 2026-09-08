import Form from "@/app/ui/invoices/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchInvoiceById, fetchCustomers } from "@/app/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit Invoice",
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />

      <div className="mb-8">
        <p className="mb-2 text-sm font-medium text-brand-700">
          Financial activity
        </p>

        <h1 className="text-2xl font-bold tracking-tight text-sand-900 sm:text-3xl">
          Edit invoice
        </h1>

        <p className="mt-2 text-sm leading-6 text-sand-800/70">
          Update the customer, amount, or status for this invoice.
        </p>
      </div>

      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
