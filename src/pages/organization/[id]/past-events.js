import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import PastEvents from "@sections/organizations/PastEvents";

const PAGE_TITLE = "Past Events";

OrganizationPastEvents.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function OrganizationPastEvents() {
  return (
    <Page title={PAGE_TITLE}>
      <PastEvents />
    </Page>
  );
}
