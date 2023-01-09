import { PrismaClient } from "@prisma/client";
import withToken from "src/middleware/withToken";
const prisma = new PrismaClient({ log: ["query"] });
const jwt = require("jsonwebtoken");
import jwtDecode from "jwt-decode";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { token } = req.query;
    let decodededtoken = jwtDecode(token);
    if (decodededtoken.email_verified === true) {
      let user = await prisma.user.findUnique({
        where: { email: decodededtoken.email },
      });
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
  }

  if (req.method === "POST") {
    let decodededtoken = jwtDecode(req.body.credential);
    if (decodededtoken.email_verified === true) {
      const user = await prisma.user.create({ data: req.body.userTabledata });
      const userForToken = {
        email: user.email,
        id: user.id,
      };
      const token = jwt.sign(userForToken, process.env.SECRET);

      res.status(203).json({ user, token });
    }
  }
}
export default withToken(handler);
