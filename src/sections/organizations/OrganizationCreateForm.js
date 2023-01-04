import { PrimaryButton, SecondaryButton } from "@components/button";
import Iconify from "@components/iconify/Iconify";

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
import { addOrganization } from "@redux/reducers/organizationReducer";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const OrganizationCreateForm = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
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

  const handleFromSubmit = async (e) => {
    e.preventDefault();
    const newOrganization = {
      name: field.name,
      email: field.email,
      phone: field.phone,
      address: field.address,
      isBloodBank: field.isBloodBank,
    };

    await dispatch(addOrganization(newOrganization));

    push("/organization");
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
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon={field.adornmentIcon} />
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
        <SecondaryButton onClick={() => push("/organization")}>
          cancel
        </SecondaryButton>
      </Stack>
    </Container>
  );
};

export default OrganizationCreateForm;
