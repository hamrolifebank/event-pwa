import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import EventCard from "@sections/event-card/EventCard";
import BorderlessButton from "@components/button/BorderlessButton";

const UpcomingEvents = () => {
  return (
    <Container>
      <Grid container justify="center" mt={2} spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Bharatpur Redcross society
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" align="center">
            UPCOMMING EVENTS
          </Typography>
        </Grid>
      </Grid>

      <Stack spacing={1} mt={2}>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </Stack>
      <BorderlessButton sx={{ color: "error.dark" }}>
        Load more...
      </BorderlessButton>
    </Container>
  );
};

export default UpcomingEvents;
