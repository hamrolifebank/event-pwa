import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const eventsFromEventServer = await prisma.event.findMany({
          include: {
            users: {
              include: {
                event: true,
              },
            },
          },
        });

        res.status(200).json({ success: true, data: eventsFromEventServer });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
