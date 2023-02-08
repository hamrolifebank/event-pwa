import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { eventId, userId, userType } = req.body;

        const newManager = await prisma.userEvent.create({
          data: {
            userId,
            eventId,
            userType,
          },
        });

        res.status(201).json({ success: true, data: newManager });
      } catch (error) {
        res.status(400).json({ success: false, msg: error });
      }
      break;
    case "GET":
      try {
        const eventManagers = await prisma.userEvent.findMany({
          where: {
            userType: "Manager",
          },
        });

        res.status(200).json({ success: true, data: eventManagers });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
