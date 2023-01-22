import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { CreateEvent } from "@sections/events";

const PAGE_TITLE = "Create Events";

OragnizationCreateEvents.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function OragnizationCreateEvents() {
  return (
    <Page title={PAGE_TITLE}>
      <CreateEvent />
    </Page>
  );
}
