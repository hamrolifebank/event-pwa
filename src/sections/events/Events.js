import { PrimaryButton } from "@components/button";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import EventCard from "@sections/event-card/EventCard";
import React from "react";

const Events = () => {
  return (
    <Container>
      <PrimaryButton sx={{ mt: 2 }}>Create event</PrimaryButton>
      <PrimaryButton sx={{ mt: 2, mb: 2 }}>View upcoming event</PrimaryButton>
      <PrimaryButton sx={{ mb: 2 }}>View past event</PrimaryButton>
      <Typography display="flex" justifyContent="center" sx={{ mb: 1 }}>
        UPCOMING EVENTS
      </Typography>
      <EventCard />
    </Container>
  );
};

export default Events;
