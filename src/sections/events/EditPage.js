import React, { useState } from "react";

import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Stack } from "@mui/system";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { PrimaryButton, SecondaryButton } from "@components/button";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { updEvent } from "@redux/reducers/eventReducer";
import { off } from "process";

const EditPage = ({ eventEditDetail }) => {
  const { query, push } = useRouter();
  const editEventData = eventEditDetail ? eventEditDetail : [];
  const router = useRouter();
  const id = query.slug;
  const [open, setOpen] = useState({ isOpen: false, field: null });

  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  user = user ? user : {};
  const [startDateAndTimevalue, setStartDateAndTimeValue] = useState(
    new Date(editEventData.startTimeStamp)
  );
  const [endDateAndTimevalue, setEndDateAndTimeValue] = useState(
    new Date(editEventData.endTimeStamp)
  );

  const handleOpen = (field) => setOpen({ isOpen: true, field: field });
  const handleClose = () => setOpen({ isOpen: false, field: null });

  const [field, setField] = useState({
    benificaryBloodBank: editEventData.benificaryBloodBank,
    eventName: editEventData.eventName,
    contactPerson: editEventData.contactPerson,
    contactNumber: editEventData.contactNumber,
    noOfTarget: editEventData.noOfTarget,
    location: editEventData.location,
    latitude: editEventData.latitude,
    longitude: editEventData.longitude,
    startTimeStamp: editEventData.startTimeStamp,
    endTimeStamp: editEventData.endTimeStamp,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setField({ ...field, [name]: value });
  };

  const handleStart = (newValue) => {
    setStartDateAndTimeValue(newValue);
  };

  const handleEnd = (newValue) => {
    setEndDateAndTimeValue(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const event = {
      benificaryBloodBank: field.benificaryBloodBank,
      organization: field.organization,
      eventName: field.eventName,
      contactPerson: field.contactPerson,
      contactNumber: field.contactNumber,
      noOfTarget: Number(field.noOfTarget),
      location: field.location,
      latitude: Number(field.latitude),
      longitude: Number(field.longitude),
      startTimeStamp: startDateAndTimevalue,
      endTimeStamp: endDateAndTimevalue,
    };

    await dispatch(updEvent(id, event));
  };

  return (
    <Container sx={{ mb: 4 }}>
      <IconButton color="primary" onClick={() => router.back()}>
        <ArrowBackIosIcon />
      </IconButton>
      <Typography
        display="flex"
        justifyContent="center"
        variant="h3"
        sx={{ mb: 2 }}
      >
        Edit event
      </Typography>
      <Stack
        spacing={2}
        component="form"
        sx={{ mb: 2 }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Event Name"
          type="text"
          name="eventName"
          value={field.eventName}
          onChange={handleInput}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="material-symbols:event" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Contact Person"
          type="text"
          name="contactPerson"
          value={field.contactPerson}
          onChange={handleInput}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="material-symbols:person" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Contact Number"
          type="text"
          name="contactNumber"
          value={field.contactNumber}
          onChange={handleInput}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="ic:outline-contact-phone" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Target"
          type="number"
          name="noOfTarget"
          value={field.noOfTarget}
          onChange={handleInput}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="mdi:target-arrow" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Location"
          type="text"
          name="location"
          value={field.location}
          onChange={handleInput}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="octicon:location-24" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Latitude"
          type="number"
          name="latitude"
          value={field.latitude}
          onChange={handleInput}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="mdi:compass-outline" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Longitude"
          type="number"
          name="longitude"
          value={field.longitude}
          onChange={handleInput}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="mdi:compass-outline" />
              </InputAdornment>
            ),
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Start Time"
            value={startDateAndTimevalue}
            onChange={handleStart}
            renderInput={(params) => <TextField {...params} />}
          />
          <DateTimePicker
            label="End Time"
            value={endDateAndTimevalue}
            onChange={handleEnd}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <PrimaryButton type="submit" onClick={() => handleOpen(field)}>
          submit
        </PrimaryButton>
        <SecondaryButton onClick={() => router.back()}>cancel</SecondaryButton>
      </Stack>
      <Modal
        open={open.isOpen}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            boxShadow: 30,
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Event
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                display: "inline",
              }}
            >
              {" " + field?.eventName}
            </Typography>{" "}
            has been updated successfully!
          </Typography>
          <Stack id="modal-description" sx={{ mt: 2 }}>
            <SecondaryButton
              onClick={() => {
                handleClose();
                push("/event");
              }}
            >
              ok
            </SecondaryButton>
          </Stack>
        </Box>
      </Modal>
    </Container>
  );
};

export default EditPage;
