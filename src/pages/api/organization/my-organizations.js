import withTokenExtractor from "@middleware/withTokenExtractor";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const myOrganization = await prisma.organization.findMany({
          where: {
            UserOrganizations: {
              some: {
                userId: req.user.id,
                isApproved: true,
              },
            },
          },
        });
        res.status(200).json({ success: true, data: myOrganization });
      } catch (error) {
        res.status(400).json({ success: false });
      }
  }
}

export default withTokenExtractor(handler);
