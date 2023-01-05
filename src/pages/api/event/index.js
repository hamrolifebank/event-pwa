import { PrismaClient } from "@prisma/client";

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
        const event = await prisma.event.create({
          data: req.body,
        });

        res.status(201).json({ success: true, data: event });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
