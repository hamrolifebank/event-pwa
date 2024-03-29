import { PrimaryButton, SecondaryButton } from "@components/button";
import WarningButton from "@components/button/WarningButton";
import Iconify from "@components/iconify/Iconify";
import { Grid, Modal, Stack, Typography, IconButton } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const OrganizationDetail = () => {
  const { query, push, asPath } = useRouter();
  const router = useRouter();
  const { id } = query;

  const myOrganization = useSelector((state) => state.myJoinedOrganizations);

  const selectedOrganization = myOrganization?.find(
    (org) => org.id === Number(id)
  );

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    boxShadow: 30,
    p: 4,
  };

  return (
    <Container>
      <Grid container item xs>
        <Grid item xs>
          <IconButton color="primary" onClick={() => router.back()}>
            <ArrowBackIosIcon />
          </IconButton>
        </Grid>
        <Grid item xs>
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
                fontSize: "14px",
                fontWeight: "700",
              }}
              onClick={() => {
                push(`${asPath}/edit-org-profile`);
              }}
            >
              Edit profile
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" mt={2}>
        <Grid item>
          <Typography variant="h3">{selectedOrganization.name} </Typography>
        </Grid>
      </Grid>

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
          <Typography variant="subtitle1">
            {selectedOrganization.phone}
          </Typography>
        </Grid>
        <Grid item xs={3} md={6}>
          <Iconify icon="material-symbols:mail" sx={{ color: "error.dark" }} />
        </Grid>
        <Grid item xs={9} md={6}>
          <Typography variant="subtitle1">
            {selectedOrganization.email}
          </Typography>
        </Grid>
        <Grid item xs={3} md={6}>
          <Iconify icon="mdi:address-marker" sx={{ color: "error.dark" }} />
        </Grid>
        <Grid item xs={9} md={6}>
          <Typography variant="subtitle1">
            {selectedOrganization.address}
          </Typography>
        </Grid>
      </Grid>

      <Stack spacing={2} sx={{ mt: 2 }}>
        <PrimaryButton onClick={() => push(`${asPath}/create-events`)}>
          Create event
        </PrimaryButton>
        <PrimaryButton onClick={() => push(`${asPath}/upcoming-events`)}>
          View upcomming events
        </PrimaryButton>
        <PrimaryButton
          onClick={() => {
            push(`${asPath}/past-events`);
          }}
        >
          View past events
        </PrimaryButton>
        <PrimaryButton onClick={() => push(`${asPath}/donor`)}>
          View donors
        </PrimaryButton>
        <PrimaryButton onClick={() => push(`${asPath}/org-members`)}>
          View members
        </PrimaryButton>
        <WarningButton onClick={handleOpen}>Leave organization</WarningButton>
        <Modal
          open={open}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-title" variant="h6" component="h2">
              Are you sure you want to leave Bharatpur Redcross society ?
            </Typography>
            <Typography id="modal-description" sx={{ mt: 3 }}>
              <WarningButton>Leave organization</WarningButton>
              <SecondaryButton onClick={handleClose}>Cancel</SecondaryButton>
            </Typography>
          </Box>
        </Modal>
      </Stack>
    </Container>
  );
};

export default OrganizationDetail;
