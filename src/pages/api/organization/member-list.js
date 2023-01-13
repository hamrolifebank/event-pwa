import withTokenExtractor from "@middleware/withTokenExtractor";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const member = await prisma.user.findMany({
          where: {
            UserOrganizations: {
              organizationId: req.body.organizationId,
              isApproved: true,
            },
          },
        });
        res.status(200).json({ success: true, data: member });
      } catch (error) {
        res.status(400).json({ success: false });
      }
  }
}

export default handler;
