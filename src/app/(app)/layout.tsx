import { SidebarTrigger } from "@/components/ui/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 mt-8 px-8 pb-6">{children}</div>;
}
