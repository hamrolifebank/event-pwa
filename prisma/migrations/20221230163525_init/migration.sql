-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "isBloodBank" BOOLEAN NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);
