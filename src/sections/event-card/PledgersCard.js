import {
  Button,
  Paper,
  Modal,
  Typography,
  InputAdornment,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { SecondaryButton } from "@components/button";
import FileBase from "react-file-base64";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import EthCrypto from "eth-crypto";

const PledgersCard = ({ pledgers, privateKey, ethAddress, eventId }) => {
  const [data, setData] = useState(null);
  const pledgerInfo = JSON.parse(pledgers);

  const [open, setOpen] = useState(false);

  const typeOfConsent = [
    { id: 1, type: "IPFS" },
    { id: 2, type: "Image" },
  ];

  const decryptedData = async () => {
    const random = await EthCrypto.decryptWithPrivateKey(privateKey, {
      iv: pledgerInfo.iv,
      ephemPublicKey: pledgerInfo.ephemPublicKey,
      ciphertext: pledgerInfo.ciphertext,
      mac: pledgerInfo.mac,
    });
    setData(JSON.parse(random));
  };

  const [consentData, setConsentData] = useState({
    eventId: eventId,
    donorEthAddress: ethAddress,
    donorName: "",
    bloodGroup: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    consentType: "",
    consentValue: "",
    bloodBagNumber: "",
  });

  const handleOpen = () => {
    setOpen(true);
    setConsentData({
      ...consentData,
      donorName: data.fullname,
      bloodGroup: data.bloodGroup,
      phone: data.phone,
      dateOfBirth: data.dob,
      gender: data.gender,
    });
  };
  const handleClose = () => setOpen(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setConsentData({ ...consentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(consentData);
    handleClose();
  };

  useEffect(() => {
    decryptedData();
  }, []);

  if (!data) return "Loading.....";

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          mb: 1,
          justifyContent: "space-between",

          padding: "12px 20px 12px 12px",

          backgroundColor: "grey.200",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "black",
              fontSize: "subtitle1.fontSize",
              fontWeight: "subtitle1.fontWeight",
              lineHeight: "subtitle1.lineHeight",
            }}
          >
            {data.fullname}
            <span style={{ color: "grey", paddingLeft: "5px" }}>
              {data.bloodGroup}
            </span>
          </Typography>

          <Typography
            sx={{
              fontSize: "subtitle2.fontSize",
              display: "flex",
              gap: "5px",
              alignItems: "center",
              textDecoration: "underline",
            }}
            color="grey.600"
          >
            <Icon icon="eva:phone-call-fill" />
            {data.phone}
          </Typography>
        </Box>
        <Box>
          <Button
            aria-describedby="conform"
            variant="contained"
            onClick={() => handleOpen()}
          >
            Accept
          </Button>
        </Box>
      </Paper>

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
            Consent Form
          </Typography>
          <Stack
            spacing={2}
            component="form"
            sx={{ mb: 2 }}
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Consent Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                type="text"
                name="consentType"
                label="Consent Type"
                value={consentData.consentType}
                onChange={handleInput}
                required
              >
                {typeOfConsent?.map((consent) => (
                  <MenuItem key={consent.id} value={consent.type}>
                    {consent.type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setConsentData({ ...consentData, consentValue: base64 })
                }
              />
            </div>

            {/* <TextField
              label="Consent Value"
              type="text"
              name="concentValue"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon icon="icon-park-outline:agreement" />
                  </InputAdornment>
                ),
              }}
            /> */}

            <TextField
              label="Blood Bag Number"
              type="number"
              name="bloodBagNumber"
              required
              value={consentData.bloodBagNumber}
              onChange={handleInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon icon="mdi:blood-bag" />
                  </InputAdornment>
                ),
              }}
            />
            <Stack id="modal-description" sx={{ mt: 2 }}>
              <SecondaryButton type="submit">Confirm</SecondaryButton>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default PledgersCard;
