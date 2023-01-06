import {
  Avatar,
  Button,
  Card,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";
import { PATH_ORGANIZATION } from "@routes/paths";
import { useSelector } from "react-redux";

export default function MyPendingRequest() {
  const organizations = useSelector((state) => state.organizations);
  const theme = useTheme();
  const { push } = useRouter();

  console.log("[MyPendingRequest.js--[23]], organizations", organizations);

  const myPendingRequest = organizations.filter((organization) => {
    return organization.UserOrganizations.some(
      (item) => item.isApproved === false && item.userId === 1
    );
  });

  console.log(
    "[MyPendingRequest.js--[28]], myPendingRequest",
    myPendingRequest
  );

  const arrowBack = () => {
    push(PATH_ORGANIZATION.root);
  };

  return (
    <Container>
      <IconButton color="primary" onClick={arrowBack}>
        <ArrowBackIosIcon />
      </IconButton>
      <Typography display="flex" justifyContent="center" sx={{ mb: 2 }} gap={2}>
        <Icon icon="mdi:bell-ring-outline" width="25" height="25" />
        PENDING INVITATIONS
      </Typography>
      <hr style={{ border: "0.5px dashed black" }} />

      {myPendingRequest.map((organization) => (
        <Card
          key={organization.id}
          sx={{ p: 2, mt: 2, backgroundColor: theme.palette.grey[200] }}
          variant="outlined"
        >
          <Grid container item xs={12}>
            <Grid item xs={2}>
              <Avatar
                alt="Name"
                src=""
                sx={{
                  backgroundColor: "secondary.main",
                  margin: "auto",
                }}
              />
            </Grid>
            <Grid item xs={10} sx={{ pl: 1 }}>
              <Typography variant="h6">{organization.name}</Typography>
              <Typography color="GrayText">
                wants to join your organization.
              </Typography>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="flex-end" gap={2} sx={{ pt: 1 }}>
            <Button variant="contained" size="small">
              Accept
            </Button>
            <Button variant="outlined" color="error" size="small">
              Decline
            </Button>
          </Box>
        </Card>
      ))}
    </Container>
  );
}
