import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Icon } from "@iconify/react";
import React from "react";

import { useSelector } from "react-redux";

const ManagerCard = ({ manager, ClickedEvents }) => {
  const user = useSelector((state) => state.user);
  const eventsFromServer = useSelector((state) => state.eventsFromServer);

  const events = eventsFromServer.filter((evnt) => evnt.id === manager.eventId);

  const event = events.find(
    (e) => e.eventEthAddress === ClickedEvents.eventEthAddress
  );

  if (event) {
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
              {user.firstname}
              <span style={{ color: "grey" }}>(0-)</span>
            </Typography>

            <Typography
              sx={{
                fontSize: "subtitle2.fontSize",
                display: "flex",
                gap: "5px",
                alignItems: "center",
                textDecoration: "underline",
              }}
              color="grey.600"
            >
              <Icon icon="eva:phone-call-fill" />
              {user.email}
            </Typography>
          </Box>
        </Paper>
      </>
    );
  } else {
    return null;
  }
};

export default ManagerCard;
