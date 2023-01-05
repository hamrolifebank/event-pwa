import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import BorderlessButton from "@components/button/BorderlessButton";
import DonorCard from "@sections/event-card/DonorCard";

const OrgDonor = () => {
  return (
    <Container>
      <Grid container justify="center" mt={2} spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Bharatpur Redcross society
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" align="center">
            DONORS
          </Typography>
        </Grid>
      </Grid>

      <Stack spacing={1} mt={2}>
        <DonorCard />
        <DonorCard />
        <DonorCard />
        <DonorCard />
      </Stack>
      <BorderlessButton sx={{ mt: 1, color: "error.dark" }}>
        Load more...
      </BorderlessButton>
    </Container>
  );
};

export default OrgDonor;
