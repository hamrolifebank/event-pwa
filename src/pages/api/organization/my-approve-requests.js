import withTokenExtractor from "@middleware/withTokenExtractor";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      // try {
      const myPendingRequests = await prisma.UserOrganization.findMany({
        where: {
          AND: [
            {
              organization: {
                id: {
                  in: prisma.UserOrganization.findMany({
                    where: {
                      AND: [{ userId: req.user.id }, { isApproved: true }],
                    },
                  }).orgId,
                },
              },
            },
            {
              isApproved: false,
            },
          ],
        },
        include: {
          user: true,
          organization: true,
        },
      });
      res.status(200).json({ success: true, data: myPendingRequests });
    // } catch (error) {
    //   res.status(400).json({ success: false });
    // }
  }
}

export default withTokenExtractor(handler);
