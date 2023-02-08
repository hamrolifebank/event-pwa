/*
  Warnings:

  - The primary key for the `UserEvent` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "UserEvent" DROP CONSTRAINT "UserEvent_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "UserEvent_pkey" PRIMARY KEY ("id");
