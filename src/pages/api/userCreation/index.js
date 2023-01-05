import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

export default async function userCreation(req, res) {
  if (req.method === "POST") {
    const user = await prisma.user.create({ data: req.body.userTabledata });
    const userForToken = {
      email: user.email,
      id: user.id,
    };
    const token = jwt.sign(userForToken, process.env.SECRET);

    res.status(203).json({ user, token });
  }
}
