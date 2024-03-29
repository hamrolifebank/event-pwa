import withTokenExtractor from "@middleware/withTokenExtractor";
import { NumbersSharp } from "@mui/icons-material";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const member = await prisma.UserOrganization.findMany({
          where: {
            AND: [
              { organizationId: Number(req.query.id) },
              { isApproved: true },
            ],
          },
          include: { user: true },
        });
        res.status(200).json({ success: true, data: member });
      } catch (error) {
        res.status(400).json({ success: false });
      }
  }
}

export default withTokenExtractor(handler);
