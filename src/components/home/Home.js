import React, { useEffect } from "react";

import { Box, Link, Typography } from "@mui/material";

import QRCode from "react-qr-code";
import { Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "@sections/event-card/EventCard";
import { useRouter } from "next/router";
import { PATH_EVENTS } from "@routes/paths";
import { checkUserwithtoken } from "@services/createUser";
import { LoginwithToken } from "@redux/reducers/userReducer";

const Home = () => {
  let user = useSelector((state) => state.user);
  let events = useSelector((state) => state.events);
  const currentDate = new Date();

  let requiredEvents = events
    ?.filter((event) => new Date(event.endTimeStamp) >= currentDate)
    .slice(0, 3);
  user = user
    ? user
    : {
        firstname: "",
        lastname: "",
        userethaddress: "",
      };
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
      {requiredEvents.map((event) => (
        <Link
          onClick={() => push(`/event/${event.id}`)}
          style={{ textDecoration: "none" }}
          key={event.id}
        >
          <EventCard user={user} event={event} />
        </Link>
      ))}

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
