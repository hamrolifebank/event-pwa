import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const allUsers = await prisma.user.findMany({
          include: {
            UserEvents: {
              include: {
                event: true,
              },
            },
          },
        });

        res.status(200).json({ success: true, data: allUsers });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
