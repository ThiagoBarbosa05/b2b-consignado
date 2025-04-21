"use server"
// import prisma from "@/app/lib/prisma"

export async function saveCount(count: {
    wineId: string, 
    count: number, 
  }[]
) {
  console.log(count)
  // await prisma.consigned.update({
  //   where:{
  //     id: consignedId
  //   },
  //   data: {
  //     winesOnConsigned
  //   }
  // })
}