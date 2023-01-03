import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import OrganizationDetail from "@sections/organizations/OrganizationDetail";

const PAGE_TITLE = "OrganizationDetail";

OrganizationDetailPage.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function OrganizationDetailPage() {
  return (
    <Page title={PAGE_TITLE}>
      <OrganizationDetail />
    </Page>
  );
}
