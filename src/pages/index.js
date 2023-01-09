import Page from "@components/Page";
import { HomePage } from "@components/home";
import DashboardLayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllEvents } from "@redux/reducers/eventReducer";

const PAGE_TITLE = "home";
Home.getLayout = (page) => (
  <DashboardLayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardLayoutwithFooter>
);

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("from useEffect");
    dispatch(getAllEvents());
  }, []);
  return (
    <Page title={PAGE_TITLE}>
      <HomePage />
    </Page>
  );
}
