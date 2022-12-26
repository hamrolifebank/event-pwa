import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { Organizations } from "src/sections/organizations";

const PAGE_TITLE = "Organizations";

OrganizationPage.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function OrganizationPage() {
  return (
    <Page title={PAGE_TITLE}>
      <Organizations />
    </Page>
  );
}
