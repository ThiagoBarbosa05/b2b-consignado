-- CreateTable
CREATE TABLE "wines" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT,
    "region" TEXT,
    "price" INTEGER NOT NULL,
    "type_id" TEXT NOT NULL,

    CONSTRAINT "wines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wine_type" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "wine_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WineCount" (
    "id" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "count" INTEGER,
    "invoice" INTEGER,
    "wine_id" TEXT NOT NULL,

    CONSTRAINT "WineCount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "wines" ADD CONSTRAINT "wines_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "wine_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WineCount" ADD CONSTRAINT "WineCount_wine_id_fkey" FOREIGN KEY ("wine_id") REFERENCES "wines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
