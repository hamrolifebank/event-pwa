import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });
const jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { email } = req.query;
    let user = await prisma.user.findUnique({ where: { email: email } });
    if (!user) {
      return res.status(204).end();
    }
    const userForToken = {
      email: user.email,
      id: user.id,
    };

    const token = jwt.sign(userForToken, process.env.SECRET);
    res.status(200).json({ user, token });
  }

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
