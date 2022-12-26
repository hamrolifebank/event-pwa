import Page from "@components/Page";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import DashboardLayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const PAGE_TITLE = "Home";

Home.getLayout = (page) => (
  // <DashboardLayout pageTitle={PAGE_TITLE}> {page} </DashboardLayout>

  <DashboardLayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardLayoutwithFooter>
);

export default function Home() {
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

  return <Page title={PAGE_TITLE}>Event App</Page>;
}
