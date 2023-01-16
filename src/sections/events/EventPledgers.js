import { BorderlessButton } from "@components/button";
import { Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import PledgersCard from "@sections/event-card/PledgersCard";
import React from "react";

const EventPledgers = () => {
  return (
    <Container>
      <Typography
        display="flex"
        justifyContent="center"
        variant="h4"
        sx={{ mt: 4 }}
        color="black"
      >
        HBL Doner center
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
      <PledgersCard />
      <PledgersCard />
      <PledgersCard />

      <Box>
        <BorderlessButton sx={{ mt: 2, mb: 2, color: "secondary.main" }}>
          Load More Pledgers
        </BorderlessButton>
      </Box>
    </Container>
  );
};

export default EventPledgers;
