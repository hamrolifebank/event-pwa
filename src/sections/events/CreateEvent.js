import {
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Stack } from "@mui/system";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { PrimaryButton, SecondaryButton } from "@components/button";
import { PATH_EVENTS } from "@routes/paths";
import { createEvent } from "@redux/reducers/eventReducer";

import library from "@utils/wallet";
import { useDispatch, useSelector } from "react-redux";

const CreateEvent = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();

  let user = useSelector((state) => state.user);
  user = user ? user : [];

  const [startDateAndTimevalue, setStartDateAndTimeValue] = useState(
    new Date("2014-08-18T21:11:54")
  );
  const [endDateAndTimevalue, setEndDateAndTimeValue] = useState(
    new Date("2014-08-18T21:09:34")
  );

  const dummyContractAddress = Math.floor(1000 + Math.random() * 9000);
  const stringifiedContractAddress = JSON.stringify(dummyContractAddress);

  const [field, setField] = useState({
    creatorId: 3652145,
    benificaryBloodBank: "",
    organization: "",
    eventName: "",
    contactPerson: "",
    contactNumber: "",
    noOfTarget: 0,
    location: "",
    latitude: "",
    longitude: "",
    startTimeStamp: "",
    endTimeStamp: "",
    createrEthAddress: user.userethaddress,
    contractAddress: stringifiedContractAddress,
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
      creatorId: field.creatorId,
      createrEthAddress: field.createrEthAddress,
      contractAddress: field.contractAddress,
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
    await dispatch(createEvent(event));
  };

  return (
    <Container>
      <Typography
        display="flex"
        justifyContent="center"
        variant="h3"
        sx={{ mt: 2, mb: 2 }}
      >
        Create event
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack
          spacing={2}
          component="form"
          sx={{ mb: 2 }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Benificary"
            type="text"
            name="benificaryBloodBank"
            value={field.benificaryBloodBank}
            onChange={handleInput}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon="mdi:blood-bag" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Oragnization"
            type="text"
            name="organization"
            value={field.organization}
            onChange={handleInput}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon="octicon:organization-24" />
                </InputAdornment>
              ),
            }}
          />
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
            type="text"
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
            type="text"
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
            type="text"
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

          <PrimaryButton type="submit">submit</PrimaryButton>
          <SecondaryButton onClick={() => push(PATH_EVENTS.root)}>
            cancel
          </SecondaryButton>
        </Stack>
      </LocalizationProvider>
    </Container>
  );
};

export default CreateEvent;
