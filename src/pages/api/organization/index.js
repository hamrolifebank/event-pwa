import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      // try {
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
      // } catch (error) {
      //   res.status(400).json({ success: false });
      // }
      break;
    case "POST":
      try {
        const organization = await prisma.organization.create({
          data: req.body,
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
