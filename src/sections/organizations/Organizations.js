import { Button, Card, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import OrgCard from "./OrgCard";
import { PrimaryButton } from "@components/button";
import { useRouter } from "next/router";
import { PATH_JOINORG } from "@routes/paths";

export default function Organizations() {
  const { push } = useRouter();

  const handleJoin = () => {
    push(PATH_JOINORG.joinOrg);
  };
  return (
    <Container>
      <PrimaryButton sx={{ mt: 2, mb: 2 }}>Create organization</PrimaryButton>
      <PrimaryButton sx={{ mb: 2 }} onClick={handleJoin}>
        Join organization
      </PrimaryButton>
      <hr style={{ border: "0.5px dashed black" }} />
      <Grid container item xs={12} gap={1}>
        <Grid item xs={6}>
          <OrgCard />
        </Grid>
      </Grid>
    </Container>
  );
}
