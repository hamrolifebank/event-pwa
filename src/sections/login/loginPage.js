import { Button, Box, Typography, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { Container } from "@mui/system";
import { Icon } from "@iconify/react";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";

import library from "@utils/wallet";
import { useDispatch } from "react-redux";
import { storeWallet } from "@redux/reducers/userReducer";
export default function LoginPage() {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleCreateWallet = async () => {
    const wallet = await library.createWallet();
    dispatch(storeWallet(wallet.publicKey));
  };

  const handlecallbackresponse = (response) => {
    const decodeddata = jwtDecode(response.credential);
    if (decodeddata.email_verified === true) {
      handleCreateWallet();
    }
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "27150830036-8p5j941rqteiet6eed3tir991911eajs.apps.googleusercontent.com",
      callback: handlecallbackresponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInbutton"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <Container>
      <Container id="signInbutton" />
    </Container>
  );
}
