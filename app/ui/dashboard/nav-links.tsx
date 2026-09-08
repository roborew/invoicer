"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: UserGroupIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        const isActive =
          pathname === link.href ||
          (link.href !== "/dashboard" && pathname.startsWith(`${link.href}/`));

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-11 flex-1 items-center justify-center gap-3 rounded-xl px-3 text-sm font-medium text-sand-800 transition-colors hover:bg-sand-100 hover:text-sand-900 focus-visible:outline-brand-600 md:flex-none md:justify-start",
              {
                "bg-brand-50 text-brand-700": isActive,
              },
            )}
          >
            <LinkIcon className="h-5 w-5 shrink-0" />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
