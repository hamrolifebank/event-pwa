import { BorderlessButton } from "@components/button";
import { Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import DonersCard from "@sections/event-card/DonersCard";
import React from "react";

const EventDoners = () => {
  return (
    <Container>
      <Typography
        display="flex"
        justifyContent="center"
        variant="h4"
        sx={{ mt: 4 }}
        color="black"
      >
        Nayabasti Yuba club
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
        DONERS
      </Typography>

      <DonersCard />
      <DonersCard />
      <DonersCard />

      <Box>
        <BorderlessButton sx={{ mt: 2, mb: 2, color: "secondary.main" }}>
          Load More Pledgers
        </BorderlessButton>
      </Box>
    </Container>
  );
};

export default EventDoners;
