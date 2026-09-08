import clsx from "clsx";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active ? "page" : undefined}
            className="flex items-center gap-2"
          >
            <Link
              href={breadcrumb.href}
              className={clsx(
                "transition-colors",
                breadcrumb.active
                  ? "font-medium text-sand-900"
                  : "text-sand-800/60 hover:text-brand-700",
              )}
            >
              {breadcrumb.label}
            </Link>

            {index < breadcrumbs.length - 1 ? (
              <span aria-hidden="true" className="text-sand-800/40">
                /
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
