import PropTypes from "prop-types";
import { Box, Paper, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { PrimaryButton } from "@components/button";

const EventCard = () => {
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          mb: 1,
          justifyContent: "space-between",

          padding: "12px 20px 12px 12px",

          backgroundColor: "grey.200",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "black",
              fontSize: "subtitle1.fontSize",
              fontWeight: "subtitle1.fontWeight",
              lineHeight: "subtitle1.lineHeight",
            }}
          >
            HBL doner center
          </Typography>
          <Typography
            sx={{
              fontSize: "subtitle2.fontSize",
              color: "grey.600",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Icon icon="mdi:clock-time-eight-outline" />
            20 Nov 2022
          </Typography>

          <Typography
            sx={{
              fontSize: "subtitle2.fontSize",
              display: "flex",
              gap: "5px",
              alignItems: "center",
              textDecoration: "underline",
              color: "secondary.main",
            }}
          >
            <Icon icon="material-symbols:location-on" />
            Shankamul, Kathmandu
          </Typography>
        </Box>
        <Box>
          <PrimaryButton>QR code</PrimaryButton>
        </Box>
      </Paper>
    </>
  );
};

export default EventCard;
