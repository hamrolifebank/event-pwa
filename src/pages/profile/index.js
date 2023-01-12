import Page from "@components/Page";
import DashboardLayout from "@layouts/dashboard";
import DashboardLayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { Card, Container } from "@mui/material";
import { ProfilePage } from "@sections/profile";
import ProfileInfo from "./ProfileInfo";
import ProfileMenu from "./ProfileMenuList";

const PAGE_TITLE = "Profile";

Profile.getLayout = (page) => (
  <DashboardLayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardLayoutwithFooter>
);

export default function Profile() {
  return (
    <>
      <ProfilePage />
    </>
  );
}
