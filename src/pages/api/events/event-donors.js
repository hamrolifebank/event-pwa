import axios from "axios";

const eventDonorsUrl = process.env.registryAppApi;

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const allEventDonors = await axios.get(
          `${eventDonorsUrl}/api/eventPledgers`
        );

        res.status(200).json(allEventDonors.data);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
