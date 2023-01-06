import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const notJoinedOrganization =
          await prisma.$queryRaw`select * from "Organization" as "o"
       where "o"."id" not in (
          select distinct "uo"."organizationId" from  "UserOrganization" as "uo" 
          where "uo"."userId" = 1);
      `;
        res.status(200).json({ success: true, data: notJoinedOrganization });
      } catch (error) {
        res.status(400).json({ success: false });
      }
  }
}
