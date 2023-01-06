import { PrimaryButton } from "@components/button";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { PATH_EVENTS } from "@routes/paths";
import EventCard from "@sections/event-card/EventCard";
import { useRouter } from "next/router";
import React from "react";

const Events = () => {
  const { push } = useRouter();
  const createEventNavigator = () => {
    push(PATH_EVENTS.createEvent);
  };
  const pastEventNavigator = () => {
    push(PATH_EVENTS.pastEvents);
  };
  const upcomingEventNavigator = () => {
    push(PATH_EVENTS.upcomingEvents);
  };
  return (
    <Container>
      <PrimaryButton sx={{ mt: 2 }} onClick={createEventNavigator}>
        Create event
      </PrimaryButton>

      <PrimaryButton sx={{ mt: 2, mb: 2 }} onClick={upcomingEventNavigator}>
        View upcoming event
      </PrimaryButton>
      <PrimaryButton sx={{ mb: 2 }} onClick={pastEventNavigator}>
        View past event
      </PrimaryButton>
      <Typography display="flex" justifyContent="center" sx={{ mb: 1 }}>
        UPCOMING EVENTS
      </Typography>
      <EventCard />
      <EventCard />
      <EventCard />
    </Container>
  );
};

export default Events;
