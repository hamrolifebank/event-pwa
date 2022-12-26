import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      firstname: "test",
      lastname: "test",
      email: "test",
      phone: "test",
      userethaddres: "test",
    },
  });
  console.log(user);
}

main()
  .catch((e) => {})
  .finally(async () => {
    await prisma.$disconnect();
  });
