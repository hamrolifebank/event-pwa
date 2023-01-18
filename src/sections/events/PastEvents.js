import { BorderlessButton, PrimaryButton } from "@components/button";
import { Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import { EventCard } from "@sections/event-card";
import React from "react";
import { useSelector } from "react-redux";

const PastEvents = () => {
  const events = useSelector((state) => state.events);
  const currentDate = new Date();
  const filteredPastEvents =
    events.length !== 0 && events.success !== false
      ? events.filter((event) => new Date(event.endTimeStamp) < currentDate)
      : [];
  return (
    <Container>
      <Typography
        display="flex"
        justifyContent="center"
        variant="h4"
        sx={{ mb: 1 }}
        color="grey.700"
      >
        PAST EVENTS
      </Typography>
      {filteredPastEvents.length >= 1 ? (
        filteredPastEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
      ) : (
        <Typography variant="h6" textAlign="center">
          There are no past events available.
        </Typography>
      )}

      <Box>
        <BorderlessButton sx={{ mt: 2, mb: 2, color: "secondary.main" }}>
          Load More Events
        </BorderlessButton>
      </Box>
    </Container>
  );
};

export default PastEvents;
