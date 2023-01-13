import { PrismaClient } from "@prisma/client";
import withTokenExtractor from "@middleware/withTokenExtractor";

const prisma = new PrismaClient({ log: ["query"] });
async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const newUserOrganization = await prisma.UserOrganization.create({
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
  }
}

export default withTokenExtractor(handler);
