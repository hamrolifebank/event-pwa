import {
  Typography,
  Grid,
  Chip,
  Stack,
  Button,
  Tab,
  IconButton,
  ButtonGroup,
  Modal,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { PrimaryButton, SecondaryButton } from "@components/button";
import { PATH_EVENTS } from "@routes/paths";
import { delEvent } from "@redux/reducers/eventReducer";
import { useDispatch } from "react-redux";
import WarningButton from "@components/button/WarningButton";

const EventDetails = ({ clickedEvents }) => {
  const router = useRouter();
  const { push } = useRouter();
  const dispatch = useDispatch();

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    boxShadow: 30,
    p: 4,
  };

  const eventDonorsNavigator = () => {
    push(`${PATH_EVENTS.eventDonors}/${selectedEvent.id}`);
  };

  const addManagerNavigator = () => {
    push(`${PATH_EVENTS.addManager}/${selectedEvent.id}`);
  };
  const handleEdit = (id) => {
    router.push(`${PATH_EVENTS.editEvent}/${selectedEvent.id}`);
  };

  const handleDelete = async (event) => {
    const deleteTheEvent = await dispatch(delEvent(event));
  };

  const eventPledgersNavigator = () => {
    push(`${PATH_EVENTS.eventPledgers}/${selectedEvent.id}`);
  };

  return (
    <Container>
      <IconButton color="primary" onClick={() => router.back()}>
        <ArrowBackIosIcon />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        m={1}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ mb: 2, alignSelf: "stretch" }} variant="h4">
            {selectedEvent?.eventName}
          </Typography>
          <Grid item xs={12}>
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
              -
              {new Date(selectedEvent?.endTimeStamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Typography>
          </Grid>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mr: 2 }}>
          <ButtonGroup spacing={2} direction="row">
            <PrimaryButton
              sx={{
                p: "3px 11px",
                backgroundColor: "grey.400",
                color: "#3366FF",
              }}
              onClick={handleEdit}
            >
              Edit
            </PrimaryButton>
            <PrimaryButton
              sx={{
                p: "3px 11px",
                backgroundColor: "grey.400",
                color: "error.dark",
              }}
              onClick={() => {
                handleOpen();
              }}
            >
              Delete
            </PrimaryButton>
          </ButtonGroup>
          <Modal
            open={open}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-title" variant="h6" component="h2">
                Are you sure you want to delete this event?
              </Typography>
              <Typography id="modal-description" sx={{ mt: 3 }}>
                <WarningButton
                  onClick={() => {
                    handleDelete(selectedEvent);
                    push("/event");
                  }}
                >
                  Yes
                </WarningButton>
                <SecondaryButton
                  onClick={() => {
                    handleClose();
                  }}
                >
                  No
                </SecondaryButton>
              </Typography>
            </Box>
          </Modal>
          <Grid
            container
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end", pt: 3 }}
          >
            <Chip
              label={chipLabel}
              sx={{
                p: "0px 6px",
                backgroundColor: `${chipColor}`,
                color: `${chipTextColor}`,
              }}
            />
          </Grid>
        </Box>
      </Box>

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
      <ButtonGroup
        sx={{ display: "flex", justifyContent: "center", p: 3 }}
        direction="row"
      >
        <Button
          onClick={eventDonorsNavigator}
          size="large"
          variant="contained"
          color="primary"
        >
          Donors
        </Button>
        <Button
          onClick={eventPledgersNavigator}
          size="large"
          variant="contained"
          color="primary"
        >
          Pledgers
        </Button>
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={addManagerNavigator}
        >
          Managers
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default EventDetails;
