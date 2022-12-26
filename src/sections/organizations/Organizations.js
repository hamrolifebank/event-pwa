import { Button, Card, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Icon } from "@iconify/react";
import React from "react";
import OrgCard from "./OrgCard";

export default function Organizations() {
  return (
    <Container>
      <Button variant="contained" fullWidth sx={{ mb: 2, mt: 2 }}>
        Create organization
      </Button>
      <Button variant="contained" fullWidth sx={{ mb: 2 }}>
        Join organization
      </Button>
      <hr style={{ border: "0.5px dashed black" }} />
      <Grid container gap={1}>
        <Grid item xs>
          <OrgCard />
        </Grid>
        <Grid item xs>
          <OrgCard />
        </Grid>
      </Grid>
    </Container>
  );
}
