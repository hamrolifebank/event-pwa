import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { EventDonors } from "@sections/events";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const PAGE_TITLE = "Event Donors";

EventDonorsPage.getLayout = (page) => {
  return (
    <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
      {page}
    </DashboardlayoutwithFooter>
  );
};

export default function EventDonorsPage() {
  const events = useSelector((state) => state.events);
  const router = useRouter();
  const { slug } = router.query;

  const ClickedEvents = events.find((event) => event.id === Number(slug));

  return (
    <Page title={PAGE_TITLE}>
      <EventDonors ClickedEvents={ClickedEvents} />
    </Page>
  );
}
