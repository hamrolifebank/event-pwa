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
import React from "react";

const OrganizationCreateForm = () => {
  const formTextfields = [
    {
      label: "Name of Organization",
      type: "text",
      adornmentIcon: "octicon:organization-24",
    },
    {
      label: "Email",
      type: "email",
      adornmentIcon: "octicon:mail-24",
    },
    {
      label: "Phone no.",
      type: "number",
      adornmentIcon: "octicon:device-mobile-24",
    },
    {
      label: "Address",
      type: "text",
      adornmentIcon: "octicon:location-24",
    },
  ];

  const handleFromSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
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
            type={field.type}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon={field.adornmentIcon} />
                </InputAdornment>
              ),
            }}
          />
        ))}
        <FormControlLabel control={<Checkbox />} label="Is Blood Bank?" />

        <PrimaryButton type="submit">submit</PrimaryButton>
      </Stack>
    </Container>
  );
};

export default OrganizationCreateForm;
