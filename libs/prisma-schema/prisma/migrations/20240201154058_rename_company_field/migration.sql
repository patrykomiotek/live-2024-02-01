/*
  Warnings:

  - You are about to drop the column `employer` on the `JobOffer` table. All the data in the column will be lost.
  - Added the required column `company` to the `JobOffer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobOffer" DROP COLUMN "employer",
ADD COLUMN     "company" TEXT NOT NULL;
