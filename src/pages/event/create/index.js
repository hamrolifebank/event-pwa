import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { CreateEvent } from "@sections/events";

const PAGE_TITLE = "Create Event";

CreateEventPage.getLayout = (page) => {
  return (
    <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
      {page}
    </DashboardlayoutwithFooter>
  );
};

export default function CreateEventPage() {
  return (
    <Page title={PAGE_TITLE}>
      <CreateEvent />
    </Page>
  );
}
