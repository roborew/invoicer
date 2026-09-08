import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
        {
          "bg-sand-100 text-sand-800/70": status === "pending",
          "bg-brand-50 text-brand-700": status === "paid",
        },
      )}
    >
      {status === "pending" ? (
        <>
          <span>Pending</span>
          <ClockIcon className="h-3.5 w-3.5" />
        </>
      ) : null}

      {status === "paid" ? (
        <>
          <span>Paid</span>
          <CheckIcon className="h-3.5 w-3.5" />
        </>
      ) : null}
    </span>
  );
}
