import { PrismaClient } from "@prisma/client";
import axios from "axios";
import library from "@utils/wallet";

const eventRegistrationUrl = "http://localhost:5000/api/events/register";

const prisma = new PrismaClient({ log: ["query"] });
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const events = await prisma.event.findMany();

        res.status(200).json({ success: true, data: events });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const createEventWallet = async () => {
          return await library.createWallet();
        };
        let wallet = await createEventWallet();
        let eventEthAddress = wallet.address;
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

        const registeredEvent = await axios.post(eventRegistrationUrl, {
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
        });

        res.status(201).json({ registeredEvent: registeredEvent.data });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
