import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const newUserOrganization = await prisma.UserOrganization.create({
          data: {
            user: {
              connect: { id: 1 },
            },
            organization: {
              connect: { id: Number(req.body.organizationId) },
            },
          },
        });
        res.status(201).json({ success: true, data: newUserOrganization });
      } catch (error) {
        res.status(400).json({ success: false });
      }
  }
}
