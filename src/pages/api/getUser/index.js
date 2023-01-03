import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function checkUser(req, res) {
  console.log("the method is", req.method);
  if (req.method === "POST") {
    console.log("the req.method checkuser");
    const { email } = req.body;
    let user = await prisma.user.findFirst({ where: { email } });
    res.status(200).send(user)
  }
}
