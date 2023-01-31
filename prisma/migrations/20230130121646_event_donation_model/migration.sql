-- CreateTable
CREATE TABLE "EventDonation" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "donorEthAddress" VARCHAR(50) NOT NULL,
    "donorName" VARCHAR(50) NOT NULL,
    "bloodGroup" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "gender" VARCHAR(50) NOT NULL,
    "consentType" VARCHAR(50) NOT NULL,
    "consentValue" VARCHAR(50) NOT NULL,
    "bloodBagNumber" INTEGER NOT NULL,

    CONSTRAINT "EventDonation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EventDonation" ADD CONSTRAINT "EventDonation_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
