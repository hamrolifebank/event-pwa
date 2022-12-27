import { Button, Box, Typography, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { Container } from "@mui/system";
import { Icon } from "@iconify/react";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import { createUser } from "@services/createUser";
export default function LoginPage() {
  const theme = useTheme();
  const router = useRouter();

  const handleCreateWallet = async () => {
    const wallet = await library.createWallet();
    return wallet.address;
  };

  const handlecallbackresponse = async (response) => {
    console.log("the token is", response.credential);
    const decodeddata = jwtDecode(response.credential);
    console.log(decodeddata);
    const userwalletaddress = await handleCreateWallet();
    const userTabledata = {
      firstname: decodeddata.name,
      lastname: decodeddata.name,
      email: decodeddata.email,
      phone: "test",
      userethaddress: "test",
    };
    createUser(userTabledata);
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
