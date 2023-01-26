import { BorderlessButton } from "@components/button";
import { IconButton, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { useRouter } from "next/router";
import { PledgersCard } from "@sections/event-card";

const EventPledgers = ({ ClickedEvents }) => {
  const router = useRouter();
  const eventPledgers = ClickedEvents.eventPledgers;
  // const eventEthAddress = ClickedEvents.eventEthAddress;

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
        PLEDGERS
      </Typography>

      {eventPledgers.length !== 0 ? (
        eventPledgers.map((eventPledger) => (
          <>
            <PledgersCard
              key={eventPledger.id}
              eventPledger={eventPledger}
              // eventEthAddress={eventEthAddress}
            />
          </>
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
            color="grey.600"
          >
            This event have no pledgers.
          </Typography>
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

export default EventPledgers;
