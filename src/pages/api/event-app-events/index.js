import withTokenExtractor from "@middleware/withTokenExtractor";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const eventAppTblEvents = await prisma.event.findMany();
        res.status(200).json({ success: true, data: eventAppTblEvents });
      } catch (error) {
        res.status(400).json({ success: false });
      }
  }
}

export default withTokenExtractor(handler);
