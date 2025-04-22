import prisma from "@/lib/prisma"


async function seed() {

  // await prisma.wineType.createMany({
  //   data: [
  //     {
  //       name: "Tinto"
  //     },
  //     {
  //       name: "Branco"
  //     },
  //     {
  //       name: "Rose"
  //     },
  //     {
  //       name: "Espumante"
  //     },
  //     { name: "Outro"}
  //   ]
  // })

  // await prisma.wines.createMany({
  //   data: [
  //     {
  //       name: "Nocturno Brut",
  //       price: 8490,
  //       country: "Argentina",
  //       region: "Mendoza",
  //       typeId: "c9fd011b-a4a0-4856-99df-73827c3b46b2"
  //     },
  //     {
  //       name: "Nocturno Brut Rose",
  //       price: 8490,
  //       country: "Argentina",
  //       region: "Mendoza",
  //       typeId: "c9fd011b-a4a0-4856-99df-73827c3b46b2"
  //     },
  //     {
  //       name: "Fuzion Chardonnay",
  //       price: 9790,
  //       country: "Argentina",
  //       region: "Mendoza",
  //       typeId: "638201fb-8552-43fe-ac91-9e0eb2d35aa6"
  //     },
  //     {
  //       name: "Terrapura Classic Sauvignon Blanc",
  //       price: 8590,
  //       country: "Chile",
  //       region: "Vale Central",
  //       typeId: "638201fb-8552-43fe-ac91-9e0eb2d35aa6"
  //     },
  //     {
  //       name: "La Flor de Algairem Chardonnay",
  //       price: 9190,
  //       country: "Espanha",
  //       typeId: "638201fb-8552-43fe-ac91-9e0eb2d35aa6"
  //     },
  //     {
  //       name: "Miluna Puglia Bianco",
  //       price: 7390,
  //       country: "Itália",
  //       region: "Puglia",
  //       typeId: "638201fb-8552-43fe-ac91-9e0eb2d35aa6"
  //     },
  //     {
  //       name: "Mancura Etnia Rose",
  //       price: 6290,
  //       country: "Chile",
  //       region: "Vale Central",
  //       typeId: "2104b5a0-e58a-4a4d-8f13-9e0663fd4b0e"
  //     },
  //     {
  //       name: "Brise Marine Rose",
  //       price: 11590,
  //       country: "França",
  //       region: "Provence",
  //       typeId: "2104b5a0-e58a-4a4d-8f13-9e0663fd4b0e"
  //     },
  //     {
  //       name: "Mannara Pinot Grigio",
  //       price: 9790,
  //       country: "Itália",
  //       region: "Sicilia",
  //       typeId: "2104b5a0-e58a-4a4d-8f13-9e0663fd4b0e"
  //     },
  //     {
  //       name: "Circus Malbec",
  //       price: 8490,
  //       country: "Argentina",
  //       region: "Mendoza",
  //       typeId: "2e0577fa-43da-431f-82e9-1575370b0b7c"
  //     },
  //     {
  //       name: "Leyda Reserva Carmenere",
  //       price: 11590,
  //       country: "Chile",
  //       region: "Valle do Leyda",
  //       typeId: "2e0577fa-43da-431f-82e9-1575370b0b7c"
  //     },
  //     {
  //       name: "Miluna Puglia Rosso",
  //       price: 7390,
  //       country: "Itália",
  //       region: "Puglia",
  //       typeId: "2e0577fa-43da-431f-82e9-1575370b0b7c"
  //     },
  //     {
  //       name: "Talma Garnacha",
  //       price: 7990,
  //       country: "Espanha",
  //       region: "Murcia",
  //       typeId: "2e0577fa-43da-431f-82e9-1575370b0b7c"
  //     }
  //   ]
  // })

  // await prisma.customer.create({
  //   data: {
  //     name: "INSÓLITO HOTEL LTDA",
  //     register: "09.081.458/0001-97"
  //   }
  // })
  
 const consigned = await prisma.consigned.create({
    data: {
      customerId: "463232c2-9107-4cc8-b25f-d6421b9207c2",
    },
  })

  const wines = await prisma.wines.findMany()

  await prisma.wineOnConsigned.createMany({
      data: wines.map(wine => {
        return {
          consignedId: consigned.id,
          wineId: wine.id,
          count: 0,
          balance: 5
        }
      })
  })
}

seed()