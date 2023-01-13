import { Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import EventCard from "@sections/event-card/EventCard";
import BorderlessButton from "@components/button/BorderlessButton";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const UpcomingEvents = () => {
  const { query, push, asPath } = useRouter();
  const router = useRouter();
  const { id } = query;
  const currentDate = new Date();
  const myOrganizations = useSelector((state) => state.organizations);
  const myevents = useSelector((state) => state.events);
  const selectedOrganization = myOrganizations?.find(
    (org) => org.id === Number(id)
  );
  const pastEvents = myevents?.filter(
    (event) => event.organization === selectedOrganization.name
  );
  const filteredPastEvents = pastEvents?.filter(
    (event) => new Date(event.startTimeStamp) < currentDate
  );

  return (
    <>
      <IconButton color="primary" onClick={() => router.back()}>
        <ArrowBackIosIcon />
      </IconButton>
      <Container>
        <Grid container justify="center" mt={2} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              {selectedOrganization.name}{" "}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" align="center">
              PAST EVENTS
            </Typography>
          </Grid>
        </Grid>

        <Stack spacing={1} mt={2}>
          {filteredPastEvents.map((pastEvent, index) => (
            <EventCard key={index} event={pastEvent} />
          ))}
        </Stack>
        <BorderlessButton sx={{ color: "error.dark" }}>
          Load more...
        </BorderlessButton>
      </Container>
    </>
  );
};

export default UpcomingEvents;
