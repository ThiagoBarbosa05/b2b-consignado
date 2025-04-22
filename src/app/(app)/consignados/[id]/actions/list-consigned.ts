import prisma from "@/lib/prisma"
import { unstable_cache } from "next/cache"

export const listConsigned = unstable_cache(async (customerId: string) => {
  return await prisma.consigned.findMany({
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
}, ["consigned"], {tags: ["consigned"]})