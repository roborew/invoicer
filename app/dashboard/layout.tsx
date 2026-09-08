import SideNav from "@/app/ui/dashboard/sidenav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoices",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-sand-50 md:grid md:h-screen md:grid-cols-[15rem_minmax(0,1fr)]">
      <aside className="border-b border-sand-200 bg-white md:h-screen md:border-b-0 md:border-r">
        <SideNav />
      </aside>
      <main className="min-w-0 overflow-x-hidden md:h-screen md:overflow-y-auto">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
