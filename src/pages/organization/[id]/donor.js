import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import OrgDonor from "@sections/organizations/OrgDonor";

const PAGE_TITLE = "Donor";

OrganizationsDonor.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function OrganizationsDonor() {
  return (
    <Page title={PAGE_TITLE}>
      <OrgDonor />
    </Page>
  );
}
