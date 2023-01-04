import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function checkUser(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    let user = await prisma.user.findUnique({ where: { email: email } });
    res.status(200).send(user);
  }
}
