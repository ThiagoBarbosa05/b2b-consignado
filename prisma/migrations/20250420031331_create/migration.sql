-- CreateTable
CREATE TABLE "consigned" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,

    CONSTRAINT "consigned_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wine_on_consigned" (
    "consignedId" TEXT NOT NULL,
    "winesId" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "count" INTEGER,

    CONSTRAINT "wine_on_consigned_pkey" PRIMARY KEY ("consignedId","winesId")
);

-- AddForeignKey
ALTER TABLE "consigned" ADD CONSTRAINT "consigned_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wine_on_consigned" ADD CONSTRAINT "wine_on_consigned_consignedId_fkey" FOREIGN KEY ("consignedId") REFERENCES "consigned"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wine_on_consigned" ADD CONSTRAINT "wine_on_consigned_winesId_fkey" FOREIGN KEY ("winesId") REFERENCES "wines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
