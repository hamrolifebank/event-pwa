import axios from "axios";

const eventDonersUrl = process.env.registryAppApi;

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const allEventDoners = await axios.get(
          `${eventDonersUrl}/api/eventPledgers`
        );

        res.status(200).json(allEventDoners.data);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
