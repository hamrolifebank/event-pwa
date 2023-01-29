/*
  Warnings:

  - Made the column `role` on table `UserOrganization` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UserOrganization" ALTER COLUMN "role" SET NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'member';
