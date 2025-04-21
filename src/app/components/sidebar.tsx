import { Navigation } from "./navigation";

export function Sidebar() {
  return (
    <aside className="border-r border-border px-6 py-8 min-w-[311px]">
      <div className="font-bold text-2xl underline text-zinc-100 border-b border-border pb-6">
        Logo
      </div>
      <Navigation />
    </aside>
  );
}
