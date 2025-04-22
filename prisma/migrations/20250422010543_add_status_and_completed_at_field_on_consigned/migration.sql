-- CreateEnum
CREATE TYPE "ConsignedStatus" AS ENUM ('PENDENTE', 'CONCLUÍDO');

-- AlterTable
ALTER TABLE "consigned" ADD COLUMN     "saved_in" TIMESTAMP(3),
ADD COLUMN     "status" "ConsignedStatus" NOT NULL DEFAULT 'PENDENTE';
