/*
  Warnings:

  - You are about to drop the column `caracteristics` on the `pets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pets" DROP COLUMN "caracteristics",
ADD COLUMN     "characteristics" TEXT[];
