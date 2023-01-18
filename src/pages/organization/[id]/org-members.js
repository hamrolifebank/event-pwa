import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import OrgMembers from "@sections/organizations/OrgMembers";

const PAGE_TITLE = "Members";

OrganizationMembers.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function OrganizationMembers() {
  return (
    <Page title={PAGE_TITLE}>
      <OrgMembers />
    </Page>
  );
}
