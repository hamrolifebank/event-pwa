import Page from "@components/Page";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import DashboardLayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";

const PAGE_TITLE = "Home";

Home.getLayout = (page) => (
  // <DashboardLayout pageTitle={PAGE_TITLE}> {page} </DashboardLayout>

  <DashboardLayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardLayoutwithFooter>
);

export default function Home() {
  return <Page title={PAGE_TITLE}>Event App</Page>;
}
