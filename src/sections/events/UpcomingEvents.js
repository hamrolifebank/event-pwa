import { BorderlessButton } from "@components/button";
import { IconButton, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import { EventCard } from "@sections/event-card";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const UpcomingEvents = () => {
  const router = useRouter();
  const events = useSelector((state) => state.events);
  const currentDate = new Date();
  const [showMore, setShowMore] = useState(false);
  const [eventsToShow, setEventsToShow] = useState(5);
  const filteredUpcomingEvents =
    events.length !== 0 && events.success !== false
      ? events.filter((event) => new Date(event.endTimeStamp) >= currentDate)
      : [];

  const handleLoadMore = () => {
    if (eventsToShow < filteredUpcomingEvents.length) {
      setEventsToShow(eventsToShow + 5);
      if (!showMore) {
        setShowMore(true);
      }
    }
  };
  return (
    <Container>
      <IconButton color="primary" onClick={() => router.back()}>
        <ArrowBackIosIcon />
      </IconButton>
      <Typography
        display="flex"
        justifyContent="center"
        variant="h4"
        sx={{ mb: 1 }}
        color="grey.700"
      >
        UPCOMING EVENTS
      </Typography>
      {filteredUpcomingEvents.length >= 1 ? (
        filteredUpcomingEvents
          .slice(0, eventsToShow)
          .map((event) => <EventCard key={event.id} event={event} />)
      ) : (
        <Typography variant="h6" textAlign="center">
          No upcoming Events.
        </Typography>
      )}
      {filteredUpcomingEvents.length > 5 &&
        eventsToShow < filteredUpcomingEvents.length && (
          <Box>
            <BorderlessButton
              sx={{ mt: 2, mb: 2, color: "secondary.main" }}
              onClick={handleLoadMore}
            >
              Load More Events
            </BorderlessButton>
          </Box>
        )}
    </Container>
  );
};

export default UpcomingEvents;
