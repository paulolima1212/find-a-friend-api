/*
  Warnings:

  - You are about to drop the column `type` on the `orgs` table. All the data in the column will be lost.
  - Added the required column `type` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orgs" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "type" "Type" NOT NULL;
