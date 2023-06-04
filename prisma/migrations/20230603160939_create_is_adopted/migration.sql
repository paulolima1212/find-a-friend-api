/*
  Warnings:

  - Added the required column `age` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "age" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "energy" TEXT,
ADD COLUMN     "independency" TEXT,
ADD COLUMN     "is_adopted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "weight" TEXT;
