import { PrismaClient } from "@prisma/client";

import axios from "axios";

const eventPledgersUrl = process.env.registryAppApi;

const prisma = new PrismaClient({ log: ["query"] });
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const allEventPledgers = await axios.get(
          `${eventPledgersUrl}/api/eventPledgers`
        );

        res.status(200).json(allEventPledgers.data);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
