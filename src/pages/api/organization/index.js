import withTokenExtractor from "@middleware/withTokenExtractor";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const organizations = await prisma.organization.findMany({
          include: {
            UserOrganizations: {
              include: {
                user: true,
              },
            },
          },
        });

        res.status(200).json({ success: true, data: organizations });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const organization = await prisma.organization.create({
          data: req.body,
        });

        const newUserOrganization = await prisma.UserOrganization.create({
          data: {
            user: {
              connect: { id: req.user.id },
            },
            organization: {
              connect: { id: Number(organization.id) },
            },
            isApproved: true,
          },
        });

        res.status(201).json({ success: true, data: organization });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

export default withTokenExtractor(handler);
