import prisma from "@/app/lib/prisma"


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
  
//  const consigned = await prisma.consigned.create({
//     data: {
//       customerId: "3c693507-3fe5-40c3-b426-fadb1d431b66",
//     },
//   })

  await prisma.wineOnConsigned.createMany({

      data: [
        {
          wineId: "1a493a04-d086-4832-a8f7-0f1c56abc4a7", 
          balance: 4, 
          count: 0,
          consignedId: "9312a9ac-3819-4245-8529-cf4b5657d766"
        },
        {
          wineId: "1f392d98-5e74-4b60-9ae2-c2941865e122", 
          balance: 3, 
          count: 0,
          consignedId: "9312a9ac-3819-4245-8529-cf4b5657d766"
        },
        {
          wineId: "3c33f093-1f2b-497c-a73a-955bb859df7b", 
          balance: 3, 
          count: 0,
          consignedId: "9312a9ac-3819-4245-8529-cf4b5657d766"
        },
        {
          wineId: "466df961-bbb9-4c56-8fcb-68d277e907bd", 
          balance: 3, 
          count: 0,
          consignedId: "9312a9ac-3819-4245-8529-cf4b5657d766"
        },
        {
          wineId: "516987d3-9afe-47a5-9ac2-239ecca8c47b", 
          balance: 3, 
          count: 0,
          consignedId: "9312a9ac-3819-4245-8529-cf4b5657d766"
        },
        {
          wineId: "541f38ad-6dae-45d8-a401-0db80f2767f3", 
          balance: 3, 
          count: 0,
          consignedId: "9312a9ac-3819-4245-8529-cf4b5657d766"
        },
        {
          wineId: "95beac38-0526-481c-96d2-dcf4cf3838d5", 
          balance: 3, 
          count: 0,
          consignedId: "9312a9ac-3819-4245-8529-cf4b5657d766"
        },
        {
          wineId: "992f185f-95c1-4695-a571-ae90bcd1a959", 
          balance: 3, 
          count: 0,
          consignedId: "9312a9ac-3819-4245-8529-cf4b5657d766"
        },
        {
          wineId: "9942ef93-84b8-40e4-a23c-0cf3583ab2ed", 
          balance: 3, 
          count: 0,
          consignedId: "9312a9ac-3819-4245-8529-cf4b5657d766"
        },
        {
          wineId: "b0e09077-3f62-4924-bf2e-7059cb98ff26", 
          balance: 3, 
          count: 0,
          consignedId: "9312a9ac-3819-4245-8529-cf4b5657d766"
        },
        {
          wineId: "b1b0160d-d11e-41e3-8121-d36f34ceb5be", 
          balance: 3, 
          count: 0,
          consignedId: "9312a9ac-3819-4245-8529-cf4b5657d766"
        },
        {
          wineId: "e189391f-f1d3-4e3e-b598-7b3a35129d45", 
          balance: 3, 
          count: 0,
          consignedId: "9312a9ac-3819-4245-8529-cf4b5657d766"
        },
        {
          wineId: "f1423257-50fb-4ab9-a388-c1dec2f4b40a", 
          balance: 3, 
          count: 0,
          consignedId: "9312a9ac-3819-4245-8529-cf4b5657d766"
        },
      ]
    
  })
}

seed()