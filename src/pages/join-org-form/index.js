import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import JoinOrg from "src/sections/organizations/JoinOrg";

const PAGE_TITLE = "Join_Organizations";

JoinOrganizationPage.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function JoinOrganizationPage() {
  return (
    <Page title={PAGE_TITLE}>
      <JoinOrg />
    </Page>
  );
}
