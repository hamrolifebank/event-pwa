import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { useRouter } from "next/router";
import { EventDetails } from "@sections/event-details";
import { useSelector } from "react-redux";
import DisplayStats from "@sections/event-details/DisplayStats";

const PAGE_TITLE = "Event Details";

EventDetail.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function EventDetail() {
  const events = useSelector((state) => state.events);
  const router = useRouter();
  const { slug } = router.query;

  let clickedEvents = events.find((event) => event.id === Number(slug));

  return (
    <Page title={PAGE_TITLE}>
      <EventDetails clickedEvents={clickedEvents} />
      <DisplayStats clickedEvents={clickedEvents} />
    </Page>
  );
}
