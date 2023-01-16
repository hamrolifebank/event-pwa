import withTokenExtractor from "@middleware/withTokenExtractor";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "DELETE":
      try {
        const deletedUserOrganization = await prisma.userOrganization.delete({
          where: {
            id: Number(req.query.id),
          },
        });
        res.status(200).json({ success: true, data: deletedUserOrganization });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}

export default withTokenExtractor(handler);
