import prisma from "@/app/lib/prisma";

export async function listCustomers() {
  const customers = await prisma.customer.findMany()
  return customers
}