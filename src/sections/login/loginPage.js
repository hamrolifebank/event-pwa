import { Button, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import { checkUser, createUser, googleDrive } from "@services/createUser";
import { useDispatch, useSelector } from "react-redux";
import { storeWallet } from "@redux/reducers/userReducer";
import library from "@utils/wallet";

export default function LoginPage() {
  const theme = useTheme();
  var router = useRouter();
  const dispatch = useDispatch();
  // const [client, setClient] = useState({});
  let client = {};
  const [userWallet, setuserWallet] = useState({});
  const handleCreateWallet = async () => {
    const wallet = await library.createWallet();
    return wallet;
  };
  const uploadDrive = () => {
    console.log("the uploaddrive", client);
    client.requestAccessToken();
  };

  const handlecallbackresponse = async (response) => {
    const decodeddata = jwtDecode(response.credential);
    let subscribedUser = await checkUser(decodeddata.email);
    if (subscribedUser) {
      dispatch(storeWallet(subscribedUser));
      router.push("/");
    } else {
      let userwalletaddress = await handleCreateWallet();
      setuserWallet(userwalletaddress);
      const userTabledata = {
        firstname: decodeddata.given_name,
        lastname: decodeddata.family_name,
        email: decodeddata.email,
        phone: "test",
        userethaddress: userwalletaddress.publicKey,
      };
      let newuser = await createUser(userTabledata);

      dispatch(storeWallet(newuser));
      await uploadDrive();
    }
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.clientIdfromgoogle,
      callback: handlecallbackresponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInbutton"), {
      theme: "outline",
      size: "large",
      alignItems: "center",
    });

    client = google.accounts.oauth2.initTokenClient({
      client_id: process.env.clientIdfromgoogle,
      scope: " https://www.googleapis.com/auth/drive",
      callback: async (tokenResponse) => {
        if (tokenResponse && tokenResponse.access_token) {
          await googleDrive(tokenResponse, userWallet);
          router.push("/");
        }
      },
    });
  }, []);

  return (
    <>
      <Container sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%", height: "60%" }}>
            <img
              src="https://assets.rumsan.com/esatya/hlb-blk-rumsan.png"
              alt="logo"
            />
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{ color: `${theme.palette.primary.main}` }}
            >
              Vein-to-Vein
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
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
            <Typography variant={"body1"}>Your Blood</Typography>
            <Typography variant={"body1"}>Donation Journey</Typography>
            <Typography variant={"body1"}>is Getting Smarter</Typography>
          </Box>
          <Container
            sx={{
              textAlign: "center",
              borderBottom: "1px solid #a1aaad",
              lineHeight: " 0.1em",
              margin: "10px 0 20px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: `${theme.palette.primary.main}`,
                background: "#fff",
                padding: " 0 5px",
              }}
            >
              Please choose login method
            </Typography>
          </Container>

          <Button
            id="signInbutton"
            onClick={() => handlecallbackresponse()}
          ></Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        ></Box>
      </Container>
    </>
  );
}
