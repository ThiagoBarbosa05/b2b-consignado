import Link from "next/link";
import { listCustomers } from "./actions/list-customers";

export default async function ConsignadosPage() {
  const customers = await listCustomers();

  return (
    <div>
      <h2 className="text-3xl">Clientes</h2>

      <section className="mt-6">
        {customers.map((customer) => (
          <Link
            className="border w-full block transition hover:bg-accent max-w-[80%] border-border px-6 py-4 rounded-md"
            key={customer.id}
            href={`/consignados/${customer.id}`}
          >
            <p className="font-medium mb-1">{customer.name}</p>
            <span className="text-zinc-400 text-sm">{customer.register}</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
