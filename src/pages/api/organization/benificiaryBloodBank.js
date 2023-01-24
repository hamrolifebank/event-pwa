import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const benificiaryBloodBank = await prisma.organization.findMany({
          where: {
            isBloodBank: true,
          },
          include: {
            UserOrganizations: {
              include: {
                user: true,
              },
            },
          },
        });

        res.status(200).json({ success: true, data: benificiaryBloodBank });
      } catch (error) {
        res.status(400).json({ success: false });
      }
  }
}
