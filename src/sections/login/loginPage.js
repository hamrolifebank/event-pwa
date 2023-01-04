import { Button, Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Container } from "@mui/system";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import library from "@utils/wallet";
import { checkUser, createUser, googleDrive } from "@services/createUser";

var { ethers } = require("ethers");

export default function LoginPage() {
  const theme = useTheme();
  const router = useRouter();

  const handleCreateWallet = async () => {
    const wallet = await library.createWallet();
    dispatch(storeWallet(wallet.publicKey));
  };

  const handlecallbackresponse = async (response) => {
    const decodeddata = jwtDecode(response.credential);
    let subscribedUser = await checkUser(decodeddata.email);
    if (subscribedUser) {
      return false;
    } else {
      let userwalletaddress = await handleCreateWallet();
      const userTabledata = {
        firstname: decodeddata.name,
        lastname: decodeddata.name,
        email: decodeddata.email,
        phone: "test",
        userethaddress: userwalletaddress.address,
      };
      await createUser(userTabledata);
      userwalletaddress = JSON.stringify(userwalletaddress);
      await googleDrive();
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
            backgroundColor: "#1ab394",
            color: "white",
            mt: "20px",
            pt: "20px",
            pb: "20px",
            ml: "30px",
            mr: "30px",
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

          <Button
            id="signInbutton"
            onClick={() => handlecallbackresponse()}
          ></Button>
        </Box>
      </Container>
    </>
  );
}
