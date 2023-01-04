import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import UpcomingEvents from "@sections/organizations/UpcomingEvents";

const PAGE_TITLE = "Upcoming Events";

OrganizationUpcommingEvents.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function OrganizationUpcommingEvents() {
  return (
    <Page title={PAGE_TITLE}>
      <UpcomingEvents />
    </Page>
  );
}
