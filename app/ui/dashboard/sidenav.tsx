import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import QuibillLogo from "@/app/ui/quibill-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
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

        <div className="mt-6 border-t border-sand-200 pt-4">
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button
              type="submit"
              className="flex h-11 w-full items-center justify-center gap-3 rounded-xl px-3 text-sm font-medium text-sand-800 transition-colors hover:bg-sand-100 hover:text-sand-900 focus-visible:outline-brand-600 md:justify-start"
            >
              <PowerIcon className="h-5 w-5 shrink-0" />
              <span>Sign out</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
