import { Button, Box, Typography, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { Container, display } from "@mui/system";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import { createUser } from "@services/createUser";
import { Icon } from "@iconify/react";

import uploadFile from "./driveupload";
var { ethers } = require("ethers");

export default function LoginPage() {
  const theme = useTheme();
  const router = useRouter();

  const handleCreateWallet = async () => {
    const wallet = ethers.Wallet.createRandom();
    return wallet;
  };

  const handlecallbackresponse = async (response) => {
    console.log("the token is", response.credential);
    const decodeddata = jwtDecode(response.credential);
    console.log(decodeddata);
    let userwalletaddress = await handleCreateWallet();
    const userTabledata = {
      firstname: decodeddata.name,
      lastname: decodeddata.name,
      email: decodeddata.email,
      phone: "test",
      userethaddress: userwalletaddress.address,
    };
    await createUser(userTabledata);
    // userwalletaddress = JSON.parse(userwalletaddress);
    // uploadFile(userwalletaddress);
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
      alignItems: "center",
    });
  }, []);

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%", height: "60" }}>
            <img
              src="https://assets.rumsan.com/esatya/hlb-blk-rumsan.png"
              alt="logo"
            />
          </Box>
          <Box>
            <Typography variant="subtitle2">Vein-to-Vein</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#C72020",
            color: "white",
            mt: "20px",
            pt: "10px",
            pb: "10px",
            mb: "20px",
          }}
        >
          <Typography>Your Blood</Typography>
          <Typography>Donation Journey</Typography>
          <Typography>is Getting Smarter</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography> Please choose login method </Typography>

          <Button id="signInbutton" onClick={() => handlecallbackresponse()}>
            <Icon icon="logos:google-icon" />
          </Button>
        </Box>
      </Container>
    </>
  );
}
