import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Invoice",
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main className="mx-auto w-full max-w-3xl">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />

      <div className="mb-8">
        <p className="mb-2 text-sm font-medium text-brand-700">
          Financial activity
        </p>

        <h1 className="text-2xl font-bold tracking-tight text-sand-900 sm:text-3xl">
          Create invoice
        </h1>

        <p className="mt-2 text-sm leading-6 text-sand-800/70">
          Create a new invoice and send it to one of your customers.
        </p>
      </div>

      <Form customers={customers} />
    </main>
  );
}
