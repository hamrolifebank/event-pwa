import DashboardLayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { EditPage } from "@sections/edit";

const PAGE_TITLE = "Profile";

Edit.getLayout = (page) => (
  <DashboardLayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardLayoutwithFooter>
);

export default function Edit() {
  return (
    <>
      <EditPage />
    </>
  );
}
