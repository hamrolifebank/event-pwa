import Page from "@components/Page";
import { HomePage } from "@components/home";
import DashboardLayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";

const PAGE_TITLE = "home";
Home.getLayout = (page) => (
  <DashboardLayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardLayoutwithFooter>
);
export default function Home() {
  return (
    <Page title={PAGE_TITLE}>
      <HomePage />
    </Page>
  );
}
