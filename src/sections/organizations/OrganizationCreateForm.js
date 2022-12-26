import { PrimaryButton } from "@components/button";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  dividerClasses,
  FormControlLabel,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const OrganizationCreateForm = () => {
  const [field, setField] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    isBloodBank: false,
  });

  const formTextfields = [
    {
      label: "Name of Organization",
      name: "name",
      value: field.name,
      type: "text",
      adornmentIcon: "octicon:organization-24",
    },
    {
      label: "Email",
      name: "email",
      value: field.email,
      type: "email",
      adornmentIcon: "octicon:mail-24",
    },
    {
      label: "Phone no.",
      name: "phone",
      value: field.phone,
      type: "number",
      adornmentIcon: "octicon:device-mobile-24",
    },
    {
      label: "Address",
      name: "address",
      value: field.address,
      type: "text",
      adornmentIcon: "octicon:location-24",
    },
  ];

  const handleFieldChange = (e) => {
    if (e.target.name === "is-blood-bank") {
      setField({ ...field, isBloodBank: e.target.checked });
    } else {
      setField({ ...field, [e.target.name]: e.target.value });
    }
  };

  const handleFromSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Create Organization</Typography>
      </Box>
      <Divider />

      <Stack mt={4} spacing={2} component="form" onSubmit={handleFromSubmit}>
        {formTextfields.map((field, i) => (
          <TextField
            key={i}
            label={field.label}
            name={field.name}
            type={field.type}
            value={field.value}
            onChange={handleFieldChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon={field.adornmentIcon} />
                </InputAdornment>
              ),
            }}
          />
        ))}
        <FormControlLabel
          control={
            <Checkbox
              value={field.isBloodBank}
              name="is-blood-bank"
              onChange={handleFieldChange}
            />
          }
          label="Is Blood Bank?"
        />

        <PrimaryButton type="submit">submit</PrimaryButton>
      </Stack>
    </Container>
  );
};

export default OrganizationCreateForm;
