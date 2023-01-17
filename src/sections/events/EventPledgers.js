import { BorderlessButton } from "@components/button";
import { Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import PledgersCard from "@sections/event-card/PledgersCard";
import React from "react";
import { useSelector } from "react-redux";

const EventPledgers = ({ ClickedEvents }) => {
  // const eventPledgers = useSelector((state) => state.eventPledgers);

  const pledgersFromClickedEvents = ClickedEvents?.eventPledgers;

  return (
    <Container>
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
        PLEDGERS
      </Typography>
      {pledgersFromClickedEvents.length !== 0 ? (
        pledgersFromClickedEvents.map((eventPledger) => (
          <PledgersCard key={eventPledger.id} eventPledger={eventPledger} />
        ))
      ) : (
        <>
          <Typography
            display="flex"
            justifyContent="center"
            sx={{
              mb: 2,
              fontSize: "h6.fontSize",
              fontWeight: "h6.fontWeight",
              lineHeight: "h6.lineHeight",
            }}
          >
            This event have no pledgers yet.
          </Typography>
        </>
      )}

      <Box>
        <BorderlessButton sx={{ mt: 2, mb: 2, color: "secondary.main" }}>
          Load More Pledgers
        </BorderlessButton>
      </Box>
    </Container>
  );
};

export default EventPledgers;
