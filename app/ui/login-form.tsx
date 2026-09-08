"use client";

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./button";
import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction}>
      <div className="rounded-2xl border border-sand-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-brand-700">
            Welcome back
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-sand-900">
            Sign in to Quibill
          </h1>

          <p className="mt-2 text-sm leading-6 text-sand-800/70">
            Enter your details to continue to your dashboard.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label
              className="mb-2 block text-sm font-semibold text-sand-900"
              htmlFor="email"
            >
              Email
            </label>

            <div className="relative">
              <input
                className="peer block h-11 w-full rounded-xl border border-sand-200 bg-white py-2.5 pl-10 pr-4 text-sm text-sand-900 placeholder:text-sand-800/50 focus:border-brand-600 focus:ring-brand-600"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />

              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-sand-800/50 peer-focus:text-brand-700" />
            </div>
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-semibold text-sand-900"
              htmlFor="password"
            >
              Password
            </label>

            <div className="relative">
              <input
                className="peer block h-11 w-full rounded-xl border border-sand-200 bg-white py-2.5 pl-10 pr-4 text-sm text-sand-900 placeholder:text-sand-800/50 focus:border-brand-600 focus:ring-brand-600"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />

              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-sand-800/50 peer-focus:text-brand-700" />
            </div>
          </div>
        </div>

        <input type="hidden" name="redirectTo" value={callbackUrl} />

        <Button className="mt-6 w-full" aria-disabled={isPending}>
          <span>Sign in</span>
          <ArrowRightIcon className="ml-auto h-5 w-5" />
        </Button>

        <div className="min-h-8 pt-4" aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <div className="flex items-start gap-2 text-sm text-red-600">
              <ExclamationCircleIcon className="h-5 w-5 shrink-0" />
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
