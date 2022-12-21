import React from "react";
import PropTypes from "prop-types";
import { LoginPage } from "@sections/loginPage";
import GuestGuard from "@guards/GuestGuard";


const Login = (props) => {
  return (
    <div>
      <GuestGuard>{LoginPage}</GuestGuard>
    </div>
  );
};

Login.propTypes = {};

export default Login;
