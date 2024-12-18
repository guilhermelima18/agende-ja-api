/*
  Warnings:

  - Added the required column `address` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressNumber` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "addressNumber" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "uf" TEXT NOT NULL;
