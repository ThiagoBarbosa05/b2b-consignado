"use client";

import { CircleDollarSign, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const navlinks = [
  {
    name: "Consignados",
    href: "/consignados",
    icon: <CircleDollarSign className="size-5" />,
  },
  { name: "Usuários", href: "/usuarios", icon: <Users className="size-5" /> },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="mt-6">
      <ul className="space-y-1">
        {navlinks.map((link) => {
          const isActive =
            pathname === link.href || pathname.startsWith(link.href);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={twMerge(
                  "flex text-zinc-50 transition rounded-md items-center gap-2 px-3 py-2",
                  isActive && "bg-accent"
                )}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
