import withTokenExtractor from "@middleware/withTokenExtractor";
import { PrismaClient } from "@prisma/client";
import myOrganizations from "../my-organizations";

const prisma = new PrismaClient({ log: ["query"] });
async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "DELETE":
      try {
        const deleteuserOrganization = await prisma.userOrganization.findFirst({
          where: {
            organizationId: Number(req.query.id),
            userId: Number(req.user.id),
          },
          select: {
            id: true,
          },
        });
        const deleteJoinedOrganization = await prisma.userOrganization.delete({
          where: {
            id: deleteuserOrganization.id,
          },
        });
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
        res.status(201).json({ success: true, data: myOrganization });
      } catch (error) {
        res.status(400).json({ success: false });
      }

      break;
  }
}

export default withTokenExtractor(handler);
