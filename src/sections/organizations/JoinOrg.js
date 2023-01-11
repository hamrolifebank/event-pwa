import {
  Autocomplete,
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PATH_ORGANIZATION } from "@routes/paths";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { PrimaryButton, SecondaryButton } from "@components/button";
import { useDispatch, useSelector } from "react-redux";

import { joinOrganization } from "@redux/reducers/yourPendingRequestReducer";

import {
  initializeYourNotJoinedOrganizations,
  updateOrganizationToBeJoined,
} from "@redux/reducers/myNotJoinedOrgReducer";

export default function JoinOrg() {
  const [input, setInput] = useState("");
  const [open, setOpen] = React.useState({ isOpen: false, org: null });

  const dispatch = useDispatch();
  const notJoinedOrg = useSelector((state) => state.myNotJoinedOrganizations);

  const { push } = useRouter();

  useEffect(() => {
    dispatch(initializeYourNotJoinedOrganizations());
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  const handleOpen = (org) => setOpen({ isOpen: true, org: org });
  const handleClose = () => setOpen({ isOpen: false, org: null });

  const handleJoin = async (orgId) => {
    dispatch(joinOrganization(orgId));
  };

  const arrowBack = () => {
    push(PATH_ORGANIZATION.root);
  };

  const style = { display: "flex", alignItems: "center", flexWrap: "wrap" };

  if (!notJoinedOrg || !notJoinedOrg.length) return null; // loading screen can be returned here

  const filteredList = notJoinedOrg.filter((list) => {
    if (input === "") {
      return list;
    } else {
      return list.name.toLowerCase().includes(input);
    }
  });

  return (
    <Container>
      <IconButton color="primary" onClick={arrowBack}>
        <ArrowBackIosIcon />
      </IconButton>

      <Autocomplete
        disablePortal
        options={notJoinedOrg.map((list) => list.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            onSelect={handleInput}
            label="Search Organizations"
            sx={{
              width: 350,
              margin: "10px auto",
            }}
          />
        )}
      />
      {filteredList.map((org) => (
        <Card
          key={org.id}
          variant="outlined"
          sx={{ p: 2, boxShadow: 5, mb: 2 }}
        >
          <Grid container item xs={12}>
            <Grid item xs={9}>
              <Typography sx={style} gap={2}>
                <Icon icon="mdi:business-card-outline" />
                {org.name}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <PrimaryButton
                sx={{ height: 25 }}
                onClick={() => handleOpen(org)}
              >
                JOIN
              </PrimaryButton>
            </Grid>
          </Grid>
          <Typography sx={style} gap={2}>
            <Icon icon="material-symbols:location-on-outline" /> {org.address}
          </Typography>
          <Typography sx={style} gap={2}>
            <Icon icon="ic:outline-email" /> {org.email}
          </Typography>
          <Typography sx={style} gap={2}>
            <Icon icon="material-symbols:phone-enabled-outline-sharp" />
            {org.phone}
          </Typography>
        </Card>
      ))}
      <Modal
        open={open.isOpen}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            boxShadow: 30,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Are you sure you want to join{" "}
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                display: "inline",
              }}
            >
              {open.org?.name}
            </Typography>
            ?
          </Typography>
          <Stack id="modal-description" sx={{ mt: 2 }} spacing={2}>
            <PrimaryButton
              onClick={() => {
                handleJoin(open.org.id);
                handleClose();
              }}
            >
              Join
            </PrimaryButton>
            <SecondaryButton onClick={handleClose}>Cancel</SecondaryButton>
          </Stack>
        </Box>
      </Modal>
    </Container>
  );
}
