import { Button, Box, Typography, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { Container } from "@mui/system";
import { Icon } from "@iconify/react";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
// import { PrimaryButton, SecondaryButton } from "@components/Button";
import library from "@utils/wallet";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const theme = useTheme();
  const router = useRouter();
  const dispatch=useDispatch()
  // const { addPublicAddress, addWallet } = useAppAuthContext();

  const handleCreateWallet = async () => {
    const wallet = await library.createWallet();

   
  };
  
  const handlecallbackresponse = (response) => {
    console.log("the token is", response.credential);
    const decodeddata = jwtDecode(response.credential);
    console.log(decodeddata);
    if(decodeddata.email_verified===true){
      handleCreateWallet()
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
