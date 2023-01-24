import withTokenExtractor from "@middleware/withTokenExtractor";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "PUT":
      try {
        const updatedOrganization = await prisma.organization.update({
          where: { id: Number(req.query.id) },
          data: req.body,
        });

        res.status(200).json({ success: true, data: updatedOrganization });
      } catch (error) {
        res.status(400).json({ success: false });
      }
  }
}

export default withTokenExtractor(handler);
