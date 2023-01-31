import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { EditPage } from "@sections/events";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const PAGE_TITLE = "Edit Event";

EditEventPage.getLayout = (page) => {
  return (
    <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
      {page}
    </DashboardlayoutwithFooter>
  );
};

export default function EditEventPage() {
  const events = useSelector((state) => state.events);
  const router = useRouter();
  const { slug } = router.query;

  let eventEdit = events.find((event) => event.id === Number(slug));
  return (
    <Page title={PAGE_TITLE}>
      <EditPage eventEditDetail={eventEdit} />
    </Page>
  );
}
