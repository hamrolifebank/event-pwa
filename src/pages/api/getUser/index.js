import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function getUser(req, res) {
  if (req.method === "GET") {
    const { email } = req.query;
    let user = await prisma.user.findUnique({ where: { email: email } });
    res.status(200).send(user);
  }
}
