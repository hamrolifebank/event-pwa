import { BorderlessButton } from "@components/button";
import { IconButton, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DonorsCard from "@sections/event-card/DonorsCard";
import React from "react";
import { useRouter } from "next/router";

const EventDoners = () => {
  const eventDoners = useSelector((state) => state.eventDoners);
  return (
    <Container>
      <IconButton color="primary" onClick={() => router.back()}>
        <ArrowBackIosIcon />
      </IconButton>
      <Typography
        display="flex"
        justifyContent="center"
        variant="h4"
        sx={{ mt: 4 }}
        color="black"
      >
        {ClickedEvents?.eventName}
      </Typography>
      <Typography
        display="flex"
        justifyContent="center"
        sx={{
          mb: 2,
          fontSize: "subtitle1.fontSize",
          fontWeight: "subtitle1.fontWeight",
          lineHeight: "subtitle1.lineHeight",
        }}
        color="grey.600"
      >
        DONORS
      </Typography>
      {eventDoners.length !== 0 ? (
        eventDoners.map((eventDoner) => (
          <DonersCard key={eventDoner.id} eventDoner={eventDoner} />
        ))
      ) : (
        <>
          <p>This event have no doners yet.</p>
        </>
      )}

      <Box>
        <BorderlessButton sx={{ mt: 2, mb: 2, color: "error.main" }}>
          Load more...
        </BorderlessButton>
      </Box>
    </Container>
  );
};

export default EventDoners;
