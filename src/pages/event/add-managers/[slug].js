import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { AddManagers } from "@sections/events";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const PAGE_TITLE = "Add managers";

AddManagersPage.getLayout = (page) => {
  return (
    <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
      {page}
    </DashboardlayoutwithFooter>
  );
};

export default function AddManagersPage() {
  const events = useSelector((state) => state.events);
  const router = useRouter();
  const { slug } = router.query;

  const ClickedEvents = events.find((event) => event.id === Number(slug));

  return (
    <Page title={PAGE_TITLE}>
      <AddManagers ClickedEvents={ClickedEvents} />
    </Page>
  );
}
