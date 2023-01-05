import React from "react";

import { Box, Link, Typography } from "@mui/material";

import QRCode from "react-qr-code";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import EventCard from "@sections/event-card/EventCard";
import { useRouter } from "next/router";
import { PATH_EVENTS } from "@routes/paths";

const Home = () => {
  let publicAddress = useSelector((state) => state.user);
  const { push } = useRouter();

  return (
    <Container>
      <Box
        sx={{
          mt: 1,
          border: 1,
          borderRadius: 1,
          boxShadow: 6,
          p: 1,
        }}
      >
        <Box display="flex" justifyContent="center">
          <QRCode
            title="Organization QR-code"
            value={`${publicAddress}`}
            level="M"
            bgColor={"#FFFFFF"}
            fgColor={"#000000"}
            size={200}
            padding={1}
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography variant="h3">UserName</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography
            variant="subtitle2"
            sx={{ textDecorationLine: "underline" }}
          >{`${publicAddress}`}</Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          mt: 1,
          mb: 1,
          fontSize: "h7.fontSize",
          fontWeight: "subtitle1.fontWeight",
          textAlign: "center",
          textTransform: "uppercase",
          color: "grey.600",
        }}
      >
        Your upcoming events
      </Typography>
      <EventCard publicaddress={publicAddress} />
      <Link
        variant="h6"
        component="h2"
        sx={{ color: "#CF3D3C", textAlign: "center", underline: "hover" }}
        onClick={() => push(PATH_EVENTS.root)}
      >
        Load more events
      </Link>
    </Container>
  );
};
export default Home;
