import React from "react";
import LoginPage from "@sections/login/loginPage";
import DashboardLayout from "@layouts/dashboard";

const PAGE_TITLE = "Login";
Login.getLayout = (page) => (
  <DashboardLayout pageTitle={PAGE_TITLE}>{page}</DashboardLayout>
);
export default function Login() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}
