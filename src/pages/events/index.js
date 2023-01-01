import Page from "@components/Page";
import DashboardLayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { Events } from "@sections/events";
// import { Events } from "src/sections/events";

const PAGE_TITLE = "Events";

EventsPage.getLayout = (page) => (
  <DashboardLayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardLayoutwithFooter>
);

export default function EventsPage() {
  return (
    <Page title={PAGE_TITLE}>
      <Events />
    </Page>
  );
}
