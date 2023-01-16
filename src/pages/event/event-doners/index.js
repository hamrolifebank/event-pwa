import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { EventDoners } from "@sections/events";

const PAGE_TITLE = "Event Doners";

EventDonersPage.getLayout = (page) => {
  return (
    <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
      {page}
    </DashboardlayoutwithFooter>
  );
};

export default function EventDonersPage() {
  return (
    <Page title={PAGE_TITLE}>
      <EventDoners />
    </Page>
  );
}
