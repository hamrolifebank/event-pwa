import { BorderlessButton, PrimaryButton } from "@components/button";
import { Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import { EventCard } from "@sections/event-card";
import React from "react";

const PastEvents = () => {
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
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <Box>
        <BorderlessButton sx={{ mt: 2, mb: 2, color: "secondary.main" }}>
          Load More Events
        </BorderlessButton>
      </Box>
    </Container>
  );
};

export default PastEvents;
