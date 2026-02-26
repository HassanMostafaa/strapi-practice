"use client";

import Link from "next/link";

interface Breadcrumb {
  name: string;
  href?: string | null;
}

interface Props {
  items: Breadcrumb[];
}

export const ServiceBreadcrumbs = ({ items }: Props) => (
  <nav className="flex flex-wrap items-center gap-2 text-sm text-foreground-secondary">
    {items.map((crumb, i) => (
      <div key={`${crumb.href ?? ""}-${i}`} className="flex items-center gap-2">
        {i !== 0 && <span>/</span>}
        {crumb.href ? (
          <Link
            href={crumb.href}
            className="hover:text-primary font-bold transition"
          >
            {crumb.name}
          </Link>
        ) : (
          <span className="text-foreground/70 capitalize">{crumb.name}</span>
        )}
      </div>
    ))}
  </nav>
);
