import {
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { PrimaryButton, SecondaryButton } from "@components/button";
import { PATH_EVENTS } from "@routes/paths";

const CreateEvent = () => {
  const { push } = useRouter();
  const [field, setField] = useState({
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
    eventEthAddress: "",
    createrEthAddress: "",
    contractAddress: "",
  });

  const formTextfields = [
    {
      label: "Benificary",
      name: "benificaryBloodBank",
      value: field.benificaryBloodBank,
      type: "text",
      adornmentIcon: "mdi:blood-bag",
    },
    {
      label: "Organization",
      name: "organization",
      value: field.organization,
      type: "text",
      adornmentIcon: "octicon:organization-24",
    },
    {
      label: "Event",
      name: "eventName",
      value: field.eventName,
      type: "text",
      adornmentIcon: "material-symbols:event",
    },
    {
      label: "Contact Person",
      name: "contactPerson",
      value: field.contactPerson,
      type: "text",
      adornmentIcon: "material-symbols:person",
    },
    {
      label: "Contact Number",
      name: "contactNumber",
      value: field.contactNumber,
      type: "text",
      adornmentIcon: "ic:outline-contact-phone",
    },
    {
      label: "Target",
      name: "noOfTarget",
      value: field.noOfTarget,
      type: "number",
      adornmentIcon: "mdi:target-arrow",
    },
    {
      label: "Location",
      name: "location",
      value: field.location,
      type: "text",
      adornmentIcon: "octicon:location-24",
    },
    {
      label: "Latitude",
      name: "latitude",
      value: field.latitude,
      type: "text",
      adornmentIcon: "mdi:compass-outline",
    },
    {
      label: "Longitude",
      name: "longitude",
      value: field.longitude,
      type: "text",
      adornmentIcon: "mdi:compass-outline",
    },
    {
      label: "Start Time",
      name: "startTimeStamp",
      value: field.startTimeStamp,
      type: "date",
      adornmentIcon: "clarity:date-line",
    },
    {
      label: "End Time",
      name: "endTimeStamp",
      value: field.endTimeStamp,
      type: "date",
      adornmentIcon: "clarity:date-line",
    },
    {
      label: "Event EthAddress",
      name: "eventEthAddress",
      value: field.eventEthAddress,
      type: "text",
      adornmentIcon: "ic:outline-generating-tokens",
    },
    {
      label: "Creator EthAddress",
      name: "createrEthAddress",
      value: field.createrEthAddress,
      type: "text",
      adornmentIcon: "ic:outline-generating-tokens",
    },
    {
      label: "Contract EthAddress",
      name: "contractAddress",
      value: field.contractAddress,
      type: "text",
      adornmentIcon: "ic:outline-generating-tokens",
    },
  ];
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

      <Stack spacing={2} component="form" sx={{ mb: 2 }}>
        {formTextfields.map((field, i) => (
          <TextField
            key={i}
            label={field.label}
            name={field.name}
            type={field.type}
            value={field.value}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon={field.adornmentIcon} />
                </InputAdornment>
              ),
            }}
          />
        ))}
        <PrimaryButton type="submit">submit</PrimaryButton>
        <SecondaryButton onClick={() => push(PATH_EVENTS.root)}>
          cancel
        </SecondaryButton>
      </Stack>
    </Container>
  );
};

export default CreateEvent;
