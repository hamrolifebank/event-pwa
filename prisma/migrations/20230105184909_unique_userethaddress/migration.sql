/*
  Warnings:

  - A unique constraint covering the columns `[userethaddress]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_email_idx";

-- CreateIndex
CREATE UNIQUE INDEX "User_userethaddress_key" ON "User"("userethaddress");

-- CreateIndex
CREATE INDEX "User_email_userethaddress_idx" ON "User"("email", "userethaddress");
