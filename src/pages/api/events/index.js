import { PrismaClient } from "@prisma/client";

import axios from "axios";
import library from "@utils/wallet";

const eventRegistrationUrl = process.env.registryAppApi;

const prisma = new PrismaClient({ log: ["query"] });
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const allEvents = await axios.get(eventRegistrationUrl);

        res.status(200).json(allEvents.data);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        let wallet = await library.createWallet();
        let eventEthAddress = wallet.publicKey;
        let eventPrivateKey = wallet.privateKey;

        const {
          creatorId,
          benificaryBloodBank,
          createrEthAddress,
          organization,
          eventName,
          contactPerson,
          contactNumber,
          contractAddress,
          noOfTarget,
          location,
          latitude,
          longitude,
          startTimeStamp,
          endTimeStamp,
        } = req.body;
        await prisma.event.create({
          data: {
            creatorId,
            eventEthAddress: eventEthAddress,
            eventPrivateKey: eventPrivateKey,
          },
        });

        const registeredEvent = await axios.post(
          `${eventRegistrationUrl}/register`,
          {
            benificaryBloodBank,
            eventEthAddress,
            createrEthAddress,
            organization,
            eventName,
            contactPerson,
            contactNumber,
            contractAddress,
            noOfTarget,
            location,
            latitude,
            longitude,
            startTimeStamp,
            endTimeStamp,
          }
        );

        res.status(201).json({
          registeredEvent: registeredEvent.data,
          status: registeredEvent.status,
        });
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
