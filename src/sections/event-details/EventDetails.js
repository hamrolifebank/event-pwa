import { Typography, Grid, Chip, Stack, Button, Tab } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { PrimaryButton } from "@components/button";
import { PATH_EVENTS } from "@routes/paths";

const EventDetails = ({ clickedEvents }) => {
  const router = useRouter();
  const { push } = router;

  const selectedEvent = clickedEvents ? clickedEvents : [];
  const currentDate = new Date();
  const eventdate = new Date(selectedEvent.date);
  if (currentDate >= eventdate) {
    selectedEvent.is_closed = true;
  }
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let chipLabel = selectedEvent
    ? selectedEvent.is_closed
      ? "Closed"
      : "Active"
    : null;
  let chipColor = chipLabel === "Active" ? "success.main" : "warning.main";
  let chipTextColor = chipLabel === "Active" ? "grey.0" : "grey.800";

  const addManagersNavigator = () => {
    push(`${PATH_EVENTS.addManagers}/${selectedEvent.id}`);
  };

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} m={1}>
        <Typography variant="h6">{selectedEvent?.eventName}</Typography>{" "}
        <Stack spacing={0} direction="row" item xs={8}>
          <PrimaryButton
            sx={{
              p: "3px 11px",
              backgroundColor: "grey.400",
              color: "#3366FF",
            }}
            onClick={() => handleEdit}
          >
            Edit
          </PrimaryButton>

          <PrimaryButton
            sx={{
              p: "3px 11px",
              backgroundColor: "grey.400",
              color: "error.dark",
            }}
            onClick={() => handleDelete}
          >
            Delete
          </PrimaryButton>
        </Stack>
      </Box>
      <Grid container item xs={12} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={8}>
          <Typography variant="body2">
            {new Date(selectedEvent?.startTimeStamp).toLocaleString(
              "en-US",
              options
            )}
          </Typography>
          <Typography variant="body2">
            {new Date(selectedEvent?.startTimeStamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
            -{" "}
            {new Date(selectedEvent?.endTimeStamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </Grid>
        <Chip
          label={chipLabel}
          sx={{
            p: "0px 6px",
            backgroundColor: `${chipColor}`,
            color: `${chipTextColor}`,
          }}
        />
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} pt={3}>
        <Grid container item xs={12}>
          <Grid item xs={6}>
            <Stack
              direction="row"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography>
                <Icon icon="material-symbols:person" />
                {" " + selectedEvent?.contactPerson}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Typography>
              <Icon icon="material-symbols:call-sharp" />
              {" " + selectedEvent?.contactNumber}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>
              <Icon icon="zondicons:target" />
              {" " + selectedEvent.noOfTarget}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>
              <Icon icon="mdi:locations" />
              {" " + selectedEvent.benificaryBloodBank}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>
              <Icon icon="ooui:user-group-rtl" />
              {" " + "Blood partner"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Stack
        sx={{ display: "flex", justifyContent: "center", p: 3 }}
        direction="row"
      >
        <Button size="large" variant="contained" color="primary">
          Donors
        </Button>
        <Button size="large" variant="contained" color="primary">
          Pledgers
        </Button>
        <Button
          onClick={addManagersNavigator}
          size="large"
          variant="contained"
          color="primary"
        >
          Managers
        </Button>
      </Stack>
    </Container>
  );
};

export default EventDetails;
