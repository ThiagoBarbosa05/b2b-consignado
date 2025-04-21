-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "register" TEXT NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

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

-- AddForeignKey
ALTER TABLE "wines" ADD CONSTRAINT "wines_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "wine_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
