/*
  Warnings:

  - The primary key for the `wine_on_consigned` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `consignedId` on the `wine_on_consigned` table. All the data in the column will be lost.
  - You are about to drop the column `wineId` on the `wine_on_consigned` table. All the data in the column will be lost.
  - Added the required column `consigned_id` to the `wine_on_consigned` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wine_id` to the `wine_on_consigned` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "wine_on_consigned" DROP CONSTRAINT "wine_on_consigned_consignedId_fkey";

-- DropForeignKey
ALTER TABLE "wine_on_consigned" DROP CONSTRAINT "wine_on_consigned_wineId_fkey";

-- AlterTable
ALTER TABLE "wine_on_consigned" DROP CONSTRAINT "wine_on_consigned_pkey",
DROP COLUMN "consignedId",
DROP COLUMN "wineId",
ADD COLUMN     "consigned_id" TEXT NOT NULL,
ADD COLUMN     "wine_id" TEXT NOT NULL,
ADD CONSTRAINT "wine_on_consigned_pkey" PRIMARY KEY ("consigned_id", "wine_id");

-- AddForeignKey
ALTER TABLE "wine_on_consigned" ADD CONSTRAINT "wine_on_consigned_consigned_id_fkey" FOREIGN KEY ("consigned_id") REFERENCES "consigned"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wine_on_consigned" ADD CONSTRAINT "wine_on_consigned_wine_id_fkey" FOREIGN KEY ("wine_id") REFERENCES "wines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
