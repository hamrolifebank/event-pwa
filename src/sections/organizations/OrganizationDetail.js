import { PrimaryButton, SecondaryButton } from "@components/button";
import WarningButton from "@components/button/WarningButton";
import Iconify from "@components/iconify/Iconify";
import { Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";

const OrganizationDetail = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 2,
        }}
      >
        <Typography
          sx={{
            color: "info.main",
          }}
        >
          Edit profile
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Typography variant="h4">Nepal Red Cross - Kathmandu</Typography>
      </Box>

      <Grid
        container
        spacing={1}
        sx={{
          mt: 2,
          padding: "10px 50px 10px 50px",
        }}
      >
        <Grid item xs={3} md={6}>
          <Iconify icon="eva:phone-call-fill" sx={{ color: "error.dark" }} />
        </Grid>
        <Grid item xs={9} md={6}>
          <Typography variant="subtitle1">9808563636</Typography>
        </Grid>
        <Grid item xs={3} md={6}>
          <Iconify icon="material-symbols:mail" sx={{ color: "error.dark" }} />
        </Grid>
        <Grid item xs={9} md={6}>
          <Typography variant="subtitle1">sudesh7443@gmail.com</Typography>
        </Grid>
        <Grid item xs={3} md={6}>
          <Iconify icon="mdi:address-marker" sx={{ color: "error.dark" }} />
        </Grid>
        <Grid item xs={9} md={6}>
          <Typography variant="subtitle1">Kopundole,Lalitpur</Typography>
        </Grid>
      </Grid>

      <Stack spacing={2} sx={{ mt: 2 }}>
        <PrimaryButton>Create event</PrimaryButton>
        <PrimaryButton>View upcomming events</PrimaryButton>
        <PrimaryButton>View past events</PrimaryButton>
        <PrimaryButton>View donors</PrimaryButton>
        <PrimaryButton>View members</PrimaryButton>
        <WarningButton>Leave organization</WarningButton>
      </Stack>
    </Container>
  );
};

export default OrganizationDetail;
