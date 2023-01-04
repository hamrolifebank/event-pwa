import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function userCreation(req, res) {
  if (req.method === "POST") {
    const user = await prisma.user.create({ data: req.body.userTabledata });
    res.status(203).json(user);
  }
}
