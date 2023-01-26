import { PrismaClient } from "@prisma/client";

import axios from "axios";
import library from "@utils/wallet";

const eventRegistrationUrl = process.env.registryAppApi;

const prisma = new PrismaClient({ log: ["query"] });
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "PUT":
      try {
        const updatedEvent = await axios.put(
          `${eventRegistrationUrl}/edit/${req.query.id}`,
          req.body
        );
        res.status(200).json(updatedEvent.data);
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const allEvents = await axios.get(eventRegistrationUrl);
        const reqdevent = allEvents.data.find(
          (event) => event.id === Number(req.query.id)
        );
        const data = await prisma.event.findFirst({
          where: {
            eventEthAddress: reqdevent.eventEthAddress,
          },
        });
        const deleteLocalServer = await prisma.event.delete({
          where: {
            id: data.id,
          },
        });

        const deletedEvent = await axios.delete(
          `${eventRegistrationUrl}/delete/${req.query.id}`
        );

        res.status(200).json({ success: true, data: deletedEvent.data });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
