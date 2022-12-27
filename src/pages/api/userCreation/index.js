import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function userCreation(req, res) {
  if (req.method === "POST") {
    console.log("the post entered", req.body.userTabledata);
    const user = await prisma.user.create({ data: req.body.userTabledata });
    console.log(user);
  }
}
