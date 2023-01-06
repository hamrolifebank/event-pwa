import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { YourPendingRequest } from "@sections/organizations";

const PAGE_TITLE = "Your Pending Request";

YourPendingRequests.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function YourPendingRequests() {
  return (
    <Page title={PAGE_TITLE}>
      <YourPendingRequest />
    </Page>
  );
}
