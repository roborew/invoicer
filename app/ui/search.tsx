"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative w-full sm:max-w-md">
      <label htmlFor="search" className="sr-only">
        Search invoices
      </label>

      <input
        id="search"
        className="peer block h-11 w-full rounded-xl border border-sand-200 bg-white py-2.5 pl-10 pr-4 text-sm text-sand-900 placeholder:text-sand-800/50 focus:border-brand-600 focus:ring-brand-600"
        placeholder={placeholder}
        onChange={(event) => handleSearch(event.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />

      <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-sand-800/50 peer-focus:text-brand-700" />
    </div>
  );
}
