-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "eventPrivateKey" VARCHAR(255) NOT NULL,
    "eventEthAddress" VARCHAR(255) NOT NULL,
    "creatorId" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserEvent" (
    "userId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "userType" VARCHAR(255) NOT NULL,

    CONSTRAINT "UserEvent_pkey" PRIMARY KEY ("userId","eventId")
);

-- AddForeignKey
ALTER TABLE "UserEvent" ADD CONSTRAINT "UserEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEvent" ADD CONSTRAINT "UserEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
