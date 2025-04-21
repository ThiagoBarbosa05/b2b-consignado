/*
  Warnings:

  - The primary key for the `wine_on_consigned` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `winesId` on the `wine_on_consigned` table. All the data in the column will be lost.
  - Added the required column `wineId` to the `wine_on_consigned` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "wine_on_consigned" DROP CONSTRAINT "wine_on_consigned_winesId_fkey";

-- AlterTable
ALTER TABLE "wine_on_consigned" DROP CONSTRAINT "wine_on_consigned_pkey",
DROP COLUMN "winesId",
ADD COLUMN     "wineId" TEXT NOT NULL,
ADD CONSTRAINT "wine_on_consigned_pkey" PRIMARY KEY ("consignedId", "wineId");

-- AddForeignKey
ALTER TABLE "wine_on_consigned" ADD CONSTRAINT "wine_on_consigned_wineId_fkey" FOREIGN KEY ("wineId") REFERENCES "wines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
