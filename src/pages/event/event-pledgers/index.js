import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { EventPledgers } from "@sections/events";

const PAGE_TITLE = "Event Pledgers";

EventPledgersPage.getLayout = (page) => {
  return (
    <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
      {page}
    </DashboardlayoutwithFooter>
  );
};

export default function EventPledgersPage() {
  return (
    <Page title={PAGE_TITLE}>
      <EventPledgers />
    </Page>
  );
}
