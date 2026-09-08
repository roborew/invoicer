"use client";

import { CustomerField } from "@/app/lib/definitions";
import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { createInvoice, State } from "@/app/lib/actions";
import { useActionState } from "react";

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState: State = { message: null, errors: {} };

  const [state, formAction] = useActionState(createInvoice, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-2xl border border-sand-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-semibold text-sand-900"
            >
              Choose customer
            </label>

            <div className="relative">
              <select
                id="customer"
                name="customerId"
                className="peer block h-11 w-full cursor-pointer rounded-xl border border-sand-200 bg-white py-2.5 pl-10 pr-4 text-sm text-sand-900 focus:border-brand-600 focus:ring-brand-600"
                defaultValue=""
                aria-describedby="customer-error"
              >
                <option value="" disabled>
                  Select a customer
                </option>

                {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
                ))}
              </select>

              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-sand-800/50 peer-focus:text-brand-700" />
            </div>

            <div id="customer-error" aria-live="polite" aria-atomic="true">
              {state.errors?.customerId &&
                state.errors.customerId.map((error: string) => (
                  <p className="mt-2 text-sm text-red-600" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="amount"
              className="mb-2 block text-sm font-semibold text-sand-900"
            >
              Choose an amount
            </label>

            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Enter USD amount"
                className="peer block h-11 w-full rounded-xl border border-sand-200 bg-white py-2.5 pl-10 pr-4 text-sm text-sand-900 placeholder:text-sand-800/50 focus:border-brand-600 focus:ring-brand-600"
                aria-describedby="amount-error"
              />

              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-sand-800/50 peer-focus:text-brand-700" />
            </div>

            <div id="amount-error" aria-live="polite" aria-atomic="true">
              {state.errors?.amount &&
                state.errors.amount.map((error: string) => (
                  <p className="mt-2 text-sm text-red-600" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          <fieldset>
            <legend className="mb-2 block text-sm font-semibold text-sand-900">
              Set the invoice status
            </legend>

            <div className="rounded-xl border border-sand-200 bg-sand-50 p-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
                <label
                  htmlFor="pending"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <input
                    id="pending"
                    name="status"
                    type="radio"
                    value="pending"
                    className="h-4 w-4 cursor-pointer border-sand-300 text-brand-600 focus:ring-brand-600"
                    aria-describedby="status-error"
                  />

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-sand-200 px-3 py-1.5 text-xs font-semibold text-sand-800/70">
                    Pending
                    <ClockIcon className="h-4 w-4" />
                  </span>
                </label>

                <label
                  htmlFor="paid"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <input
                    id="paid"
                    name="status"
                    type="radio"
                    value="paid"
                    className="h-4 w-4 cursor-pointer border-sand-300 text-brand-600 focus:ring-brand-600"
                    aria-describedby="status-error"
                  />

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
                    Paid
                    <CheckIcon className="h-4 w-4" />
                  </span>
                </label>
              </div>
            </div>
          </fieldset>

          <div id="status-error" aria-live="polite" aria-atomic="true">
            {state.errors?.status &&
              state.errors.status.map((error: string) => (
                <p className="mt-2 text-sm text-red-600" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Link
          href="/dashboard/invoices"
          className="flex h-11 items-center justify-center rounded-xl bg-sand-100 px-4 text-sm font-semibold text-sand-800/70 transition-colors hover:bg-sand-200 hover:text-sand-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          Cancel
        </Link>

        <Button type="submit">Create invoice</Button>
      </div>
    </form>
  );
}
