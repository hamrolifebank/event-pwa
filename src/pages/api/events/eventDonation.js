import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const {
          eventId,
          donorEthAddress,
          donorName,
          bloodGroup,
          phone,
          dateOfBirth,
          gender,
          consentType,
          consentValue,
          bloodBagNumber,
        } = req.body;

        const newEventDonoation = await prisma.eventDonation.create({
          data: {
            eventId,
            donorEthAddress,
            donorName,
            bloodGroup,
            phone,
            dateOfBirth,
            gender,
            consentType,
            consentValue,
            bloodBagNumber,
          },
        });

        res.status(201).json({ success: true, data: newEventDonoation });
      } catch (error) {
        res.status(400).json({ success: false, msg: error });
      }
      break;
    case "GET":
      try {
        const eventDonation = await prisma.eventDonation.findMany({});

        res.status(200).json({ success: true, data: eventDonation });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
