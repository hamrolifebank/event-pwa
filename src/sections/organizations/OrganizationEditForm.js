import { PrimaryButton, SecondaryButton } from "@components/button";
import Iconify from "@components/iconify/Iconify";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { updateOrg } from "@redux/reducers/organizationReducer";

const OrganizationEditForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { push, query } = useRouter();
  const { id } = query;

  const myOrganization = useSelector((state) => state.myJoinedOrganizations);
  const selectedOrganization = myOrganization?.find(
    (org) => org.id === Number(id)
  );

  const [field, setField] = useState({
    name: selectedOrganization ? selectedOrganization.name : "",
    email: selectedOrganization ? selectedOrganization.email : "",
    phone: selectedOrganization ? selectedOrganization.phone : "",
    address: selectedOrganization ? selectedOrganization.address : "",
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
    await dispatch(updateOrg(id, newOrganization));
  };

  return (
    <Container>
      <IconButton color="primary" onClick={() => router.back()}>
        <ArrowBackIosIcon />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Edit Organization Profile</Typography>
      </Box>
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
        <PrimaryButton type="submit" onClick={() => push("/organization")}>
          submit
        </PrimaryButton>
        <SecondaryButton onClick={() => router.back()}>cancel</SecondaryButton>
      </Stack>
    </Container>
  );
};

export default OrganizationEditForm;
