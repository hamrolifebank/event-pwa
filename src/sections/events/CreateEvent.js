import {
  Box,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
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
import { createEvent } from "@redux/reducers/eventReducer";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const CreateEvent = () => {
  const { query, push } = useRouter();
  const router = useRouter();
  const { id } = query;

  const dispatch = useDispatch();

  let user = useSelector((state) => state.user);
  user = user ? user : {};

  let bloodBankOrg = useSelector((state) => state.benificiaryBloodBanks);
  bloodBankOrg = bloodBankOrg ? bloodBankOrg : [];

  let organizations = useSelector((state) => state.myJoinedOrganizations);
  organizations = organizations ? organizations : [];

  const selectedOrganization = organizations?.find(
    (org) => org.id === Number(id)
  );

  const [startDateAndTimevalue, setStartDateAndTimeValue] = useState(
    new Date(Date.now())
  );
  const [endDateAndTimevalue, setEndDateAndTimeValue] = useState(
    new Date(Date.now())
  );

  const [open, setOpen] = useState({ isOpen: false, field: null });
  const handleOpen = (field) => setOpen({ isOpen: true, field: field });
  const handleClose = () => setOpen({ isOpen: false, field: null });

  const [field, setField] = useState({
    creatorId: user.id,
    benificaryBloodBank: "",
    organization: selectedOrganization ? selectedOrganization.name : "",
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
    contractAddress: "",
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
        Create event
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack
          spacing={2}
          component="form"
          sx={{ mb: 2 }}
          onSubmit={handleSubmit}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Benificary</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              type="text"
              name="benificaryBloodBank"
              value={field.benificaryBloodBank}
              label="Benificary"
              required
              onChange={handleInput}
            >
              {bloodBankOrg?.map((org) => (
                <MenuItem key={org.id} value={org.name}>
                  {org.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {selectedOrganization ? (
            <TextField
              disabled
              value={field.organization}
              label="Organization"
            />
          ) : (
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Organization
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                type="text"
                id="demo-simple-select"
                name="organization"
                value={field.organization}
                label="Organization"
                onChange={handleInput}
              >
                {organizations?.map((org) => (
                  <MenuItem key={org.id} value={org.name}>
                    {org.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

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

          <PrimaryButton type="submit" onClick={() => handleOpen(field)}>
            submit
          </PrimaryButton>
          <SecondaryButton onClick={() => router.back()}>
            cancel
          </SecondaryButton>
        </Stack>
      </LocalizationProvider>

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
            New event{" "}
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                display: "inline",
              }}
            >
              {field?.eventName}
            </Typography>{" "}
            has been created successfully!
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

export default CreateEvent;
