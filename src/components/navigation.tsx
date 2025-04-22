"use client";

import { CircleDollarSign, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

const navlinks = [
  {
    name: "Consignados",
    href: "/consignados",
    icon: <CircleDollarSign className="size-7" />,
  },
  { name: "Usuários", href: "/usuarios", icon: <Users className="size-7" /> },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      {navlinks.map((link) => {
        const isActive =
          pathname === link.href || pathname.startsWith(link.href);

        return (
          <SidebarMenuItem key={link.href}>
            <SidebarMenuButton
              className="hover:bg-transparent active:bg-transparent"
              asChild
            >
              <Link
                href={link.href}
                className={twMerge("", isActive && "bg-accent")}
              >
                {link.icon}
                {link.name}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </nav>
  );
}
