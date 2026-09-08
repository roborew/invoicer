import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import QuibillLogo from "@/app/ui/quibill-logo";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";

export default function SideNav() {
  return (
    <div className="flex min-h-0 flex-col px-4 py-5 md:h-full md:px-5 md:py-6">
      <Link
        className="mb-8 flex items-center rounded-xl focus-visible:outline-brand-600"
        href="/"
        aria-label="Quibill home"
      >
        <QuibillLogo />
      </Link>

      <div className="flex min-h-0 flex-1 flex-col">
        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-sand-800/60">
          Workspace
        </p>

        <nav
          className="flex flex-row gap-2 md:flex-col"
          aria-label="Main navigation"
        >
          <NavLinks />
        </nav>

        <div className="hidden flex-1 md:block" />

        <div className="mt-auto border-t border-sand-200 pt-4">
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button
              type="submit"
              className="flex h-11 w-full items-center justify-start gap-3 rounded-xl border border-sand-200 bg-sand-50 px-3 text-sm font-semibold text-sand-800 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5 shrink-0" />
              <span>Sign out</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
