import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import MyPendingRequest from "@sections/organizations/YourPendingRequest";

const PAGE_TITLE = "pending_req";

PendingRequest.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function PendingRequest() {
  return (
    <Page title={PAGE_TITLE}>
      <MyPendingRequest />
    </Page>
  );
}
