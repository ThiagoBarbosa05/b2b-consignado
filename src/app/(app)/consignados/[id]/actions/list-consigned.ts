import prisma from "@/app/lib/prisma";

export async function listConsigned(customerId: string) {

  const consigned = await prisma.consigned.findMany({
    where: {
      customerId
    },
    include: {
      customer: true,
      winesOnConsigned: {
        include: {
          wines: {
            include: {
              type: true
            }
          }
        }
      }
    }
  })
  
  return consigned

}