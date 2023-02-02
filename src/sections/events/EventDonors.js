import { BorderlessButton } from "@components/button";
import { IconButton, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DonorsCard from "@sections/event-card/DonorsCard";
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const EventDonors = ({ ClickedEvents }) => {
  const donorList = useSelector((state) => state.eventDonation);

  const router = useRouter();
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

      {donorList.length !== 0 ? (
        donorList?.map((donor) => (
          <DonorsCard
            key={donor.id}
            donor={donor}
            ethAddresses={ClickedEvents.eventPledgers}
          />
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
            This event has no donors.
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

export default EventDonors;
