import { Button, Card, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import OrgCard from "./OrgCard";
import { PrimaryButton } from "@components/button";
import { useRouter } from "next/router";
import { PATH_ORGANIZATION } from "@routes/paths";

export default function Organizations() {
  const { push } = useRouter();

  const handleJoin = () => {
    push(PATH_ORGANIZATION.joinOrg);
  };

  const handleCreate = () => {
    push(PATH_ORGANIZATION.createOrg);
  };

  const handleRequest = () => {
    push(PATH_ORGANIZATION.pendingRequest);
  };
  const handleYourRequest = () => {
    push(PATH_ORGANIZATION.yourPendingRequest);
  };

  return (
    <Container>
      <PrimaryButton sx={{ mt: 2, mb: 2 }} onClick={handleCreate}>
        Create organization
      </PrimaryButton>
      <PrimaryButton sx={{ mb: 2 }} onClick={handleJoin}>
        Join organization
      </PrimaryButton>
      <PrimaryButton sx={{ mb: 2 }} onClick={handleRequest}>
        Approve pending requests
      </PrimaryButton>
      <PrimaryButton sx={{ mb: 2 }} onClick={handleYourRequest}>
        View your pending requests
      </PrimaryButton>
      <hr style={{ border: "0.5px dashed black" }} />
      <Typography
        variant="h4"
        display="flex"
        justifyContent="center"
        sx={{ mb: 1 }}
      >
        Your Organizations
      </Typography>
      <Grid container item xs={12} gap={0.6}>
        <Grid item xs={5.9}>
          <OrgCard />
        </Grid>
        <Grid item xs={5.9}>
          <OrgCard />
        </Grid>
      </Grid>
    </Container>
  );
}
