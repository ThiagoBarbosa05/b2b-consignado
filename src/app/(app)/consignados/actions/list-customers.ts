import prisma from "@/lib/prisma"

export async function listCustomers() {
  const customers = await prisma.customer.findMany()
  return customers
}