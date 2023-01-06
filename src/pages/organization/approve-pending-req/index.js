import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { ApprovePendingRequest } from "@sections/organizations";
import MyPendingRequest from "src/sections/organizations/MyPendingRequest";

const PAGE_TITLE = "Approve Pending Requests";

ApprovePendingRequests.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function ApprovePendingRequests() {
  return (
    <Page title={PAGE_TITLE}>
      <ApprovePendingRequest />
    </Page>
  );
}
