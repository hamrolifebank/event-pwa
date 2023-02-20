import {
  BorderlessButton,
  PrimaryButton,
  SecondaryButton,
} from "@components/button";
import {
  IconButton,
  InputAdornment,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Container, Box } from "@mui/system";
import { Icon } from "@iconify/react";
import ManagerCard from "@sections/event-card/ManagerCard";
import { useRouter } from "next/router";
import { QrReader } from "react-qr-reader";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEventManager } from "@redux/reducers/eventManagerReducer";

const AddManagers = ({ ClickedEvents }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const managers = useSelector((state) => state.eventManager);
  const eventsFromServer = useSelector((state) => state.eventsFromServer);

  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);

  const foundEvent = eventsFromServer?.find(
    (e) => e.eventEthAddress === ClickedEvents.eventEthAddress
  );
  console.log("foundEvent: ", foundEvent);

  const managers = foundEvent?.users;
  console.log("managers: ", managers);

  // const eventManagerList = managers.filter(
  //   (manager) => manager.eventId === foundEvent.id
  // );
  // console.log("eventManger: ", eventManagerList);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [manager, setManager] = useState({
    userId: 0,
    eventId: ClickedEvents?.id,
    userType: "Manager",
  });

  const scanHandler = async (scanData, err) => {
    if (!!scanData) {
      setLoadingScan(true);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
    }

    if (!!err) {
      console.info(err);
    }
  };

  const handleId = () => {
    if (data.text === user.userethaddress) {
      manager.userId = user.id;
    }
  };

  useEffect(() => {
    if (data.text) {
      handleOpen();
    }
    handleId();
  }, [data.text]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEventManager(manager));
    handleClose();
  };

  return (
    <Container>
      <IconButton color="primary" onClick={() => router.back()}>
        <ArrowBackIosIcon />
      </IconButton>
      <Typography
        display="flex"
        justifyContent="center"
        variant="h4"
        sx={{ mt: 4 }}
        color="black"
      >
        {ClickedEvents?.eventName}
      </Typography>
      <PrimaryButton
        sx={{ mt: 2, mb: 2 }}
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Add Manager"}
      </PrimaryButton>

      {startScan && (
        <>
          <select
            onChange={(e) => setSelected(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderRadius: "10px",
            }}
          >
            <option value={"environment"}>Back camera</option>
            <option value={"user"}>Front camera</option>
          </select>

          <QrReader
            facingMode={selected}
            delay={1000}
            onResult={scanHandler}
            style={{ width: "300px" }}
          />
        </>
      )}

      {loadingScan && <p>Loading</p>}

      <Typography
        display="flex"
        justifyContent="center"
        sx={{
          mb: 2,
          fontSize: "subtitle1.fontSize",
          fontWeight: "subtitle1.fontWeight",
          lineHeight: "subtitle1.lineHeight",
        }}
        color="grey.600"
      >
        CURRENT MANAGER
      </Typography>

      {managers.length !== 0
        ? managers.map((manager) => (
            <ManagerCard key={manager.id} manager={manager} />
          ))
        : null}

      <Box>
        <BorderlessButton sx={{ mt: 2, mb: 2, color: "secondary.main" }}>
          Load more...
        </BorderlessButton>
      </Box>

      <Modal
        open={open}
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
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography
            display="flex"
            justifyContent="center"
            variant="h3"
            sx={{ mb: 2 }}
          >
            Manager details
          </Typography>
          <Stack
            spacing={2}
            component="form"
            sx={{ mb: 2 }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="User id"
              type="number"
              name="userId"
              value={manager.userId}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon icon="mdi:user" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Event id"
              type="number"
              name="eventId"
              value={manager.eventId}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon icon="material-symbols:event" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="User Type"
              type="text"
              name="userType"
              value={manager.userType}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon icon="grommet-icons:user-manager" />
                  </InputAdornment>
                ),
              }}
            />

            <Stack id="modal-description" sx={{ mt: 2 }}>
              <SecondaryButton type="submit">Add</SecondaryButton>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Container>
  );
};

export default AddManagers;
