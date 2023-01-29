import withTokenExtractor from "@middleware/withTokenExtractor";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const myPendingRequests = await prisma.userOrganization.findMany({
          where: {
            userId: req.user.id,
            isApproved: false,
          },
          include: {
            organization: true,
          },
        });
        res.status(200).json({ success: true, data: myPendingRequests });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const newUserOrganization = await prisma.userOrganization.create({
          data: {
            user: {
              connect: { id: req.user.id },
            },
            organization: {
              connect: { id: Number(req.body.organizationId) },
            },
          },
        });
        const joinedOrganization = await prisma.Organization.findUnique({
          where: { id: Number(req.body.organizationId) },
        });

        res.status(201).json({ success: true, data: joinedOrganization });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}

export default withTokenExtractor(handler);
