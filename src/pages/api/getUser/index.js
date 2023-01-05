import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

export default async function getUser(req, res) {
  if (req.method === "GET") {
    const { email } = req.query;
    let user = await prisma.user.findUnique({ where: { email: email } });
    const userForToken = {
      email: user.email,
      id: user.id,
    };

    const token = jwt.sign(userForToken, process.env.SECRET);
    res.status(200).send({ user, token });
  }
}
