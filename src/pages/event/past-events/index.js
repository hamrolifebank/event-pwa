import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { PastEvents } from "@sections/events";

const PAGE_TITLE = "Past Events";

PastEventsPage.getLayout = (page) => {
  return (
    <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
      {page}
    </DashboardlayoutwithFooter>
  );
};

export default function PastEventsPage() {
  return (
    <Page title={PAGE_TITLE}>
      <PastEvents />
    </Page>
  );
}
