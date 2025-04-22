"use server"

import prisma from "@/lib/prisma"
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

// import prisma from "@/app/lib/prisma"

enum ActionStatus {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export async function saveCount(counts: {
  wineId: string, 
  count: number, 
  consignedId: string 
}[],
customerId: string ) {

  try {
    await prisma.$transaction(
        counts.map((wine) =>
          prisma.wineOnConsigned.update({
            where: {
              consignedId_wineId: {
                consignedId: wine.consignedId,
                wineId: wine.wineId,
              },
            },
            data: {
              count: wine.count,
              consigned: {
                update: {
                  completedIn: new Date(),
                  status: "CONCLUÍDO"
                }
              }
            },
          })
        ),
    );

    const updatedWines = await prisma.wineOnConsigned.findMany({
      where: {
        OR: counts.map(({consignedId }) => ({
          consignedId,
        })),
      },      
      include: {
        wines: true,
        consigned: true,
      }
    })

    await prisma.consigned.create({
      data: {
        customerId: updatedWines[0].consigned.customerId,
        winesOnConsigned: {
          createMany: {
            data: updatedWines.map(wine => ({
              balance: wine.count ?? wine.balance,
              wineId: wine.wineId,
              count: wine.count
            }))
          }
        }
      }
    })  
  } catch (error) {

    console.error("Erro ao salvar os dados:", error)
    return {
      status: ActionStatus.ERROR,
      message: "Falha ao salvar os dados. Tente novamente",
      error: error
    }
  }

    revalidateTag("consigned")
    redirect(`/consignados/${customerId}`)
}