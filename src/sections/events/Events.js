import { BorderlessButton, PrimaryButton } from "@components/button";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { PATH_EVENTS } from "@routes/paths";
import EventCard from "@sections/event-card/EventCard";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const Events = () => {
  let events = useSelector((state) => state.events);
  const currentDate = new Date();

  const filteredUpcomingEvents =
    events.length !== 0 && events.success !== false
      ? events.filter((event) => new Date(event.endTimeStamp) >= currentDate)
      : [];

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

      {filteredUpcomingEvents.length !== 0
        ? filteredUpcomingEvents.slice(0, 2).map((event) => (
            <Link
              href={`/event/${event.id}`}
              style={{ textDecoration: "none" }}
              key={event.id}
            >
              <EventCard key={event.id} event={event} />{" "}
            </Link>
          ))
        : null}

      <Box>
        <BorderlessButton
          onClick={upcomingEventNavigator}
          sx={{ mt: 2, mb: 2, color: "secondary.main" }}
        >
          Load More Events
        </BorderlessButton>
      </Box>
    </Container>
  );
};

export default Events;
