/*
  Warnings:

  - You are about to drop the `WineCount` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WineCount" DROP CONSTRAINT "WineCount_wine_id_fkey";

-- DropTable
DROP TABLE "WineCount";

-- CreateTable
CREATE TABLE "wine_count" (
    "id" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "count" INTEGER,
    "invoice" INTEGER,
    "wine_id" TEXT NOT NULL,

    CONSTRAINT "wine_count_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "wine_count" ADD CONSTRAINT "wine_count_wine_id_fkey" FOREIGN KEY ("wine_id") REFERENCES "wines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
