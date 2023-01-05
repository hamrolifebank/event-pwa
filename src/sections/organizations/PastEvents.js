import { Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import BorderlessButton from "@components/button/BorderlessButton";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EventCard from "@sections/event-card/EventCard";

const PastEvents = () => {
  const router = useRouter();

  return (
    <Container>
      <IconButton color="primary" onClick={() => router.back()}>
        <ArrowBackIosIcon />
      </IconButton>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Bharatpur Redcross society
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" align="center">
            PAST EVENTS
          </Typography>
        </Grid>
      </Grid>

      <Stack spacing={1} mt={2}>
        <EventCard />
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

export default PastEvents;
