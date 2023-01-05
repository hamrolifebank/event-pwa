import React from "react";

import { Box, Link, Typography } from "@mui/material";

import QRCode from "react-qr-code";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import EventCard from "@sections/event-card/EventCard";
import { useRouter } from "next/router";
import { PATH_EVENTS } from "@routes/paths";

const Home = () => {
  let user = useSelector((state) => state.user);
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <QRCode
          title="Organization QR-code"
          value={`${user.userethaddress}`}
          level="M"
          bgColor={"#FFFFFF"}
          fgColor={"#000000"}
          size={200}
          padding={1}
        />

        <Typography variant="h3">
          {user.firstname.charAt(0).toUpperCase() +
            user.firstname.slice(1) +
            " " +
            user.lastname.charAt(0).toUpperCase() +
            user.lastname.slice(1)}
        </Typography>
        <Container sx={{ wordWrap: "inherit" }}>
          <Typography
            variant="subtitle2"
            noWrap
            sx={{ textDecorationLine: "underline" }}
          >{`${user.userethaddress}`}</Typography>
        </Container>
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
      <EventCard publicaddress={user} />
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
