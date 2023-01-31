import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import EthCrypto from "eth-crypto";

const PledgersCard = ({ pledgers, privateKey }) => {
  const [data, setData] = useState(null);
  const pledgerInfo = JSON.parse(pledgers);

  const decryptedData = async () => {
    const random = await EthCrypto.decryptWithPrivateKey(privateKey, {
      iv: pledgerInfo.iv,
      ephemPublicKey: pledgerInfo.ephemPublicKey,
      ciphertext: pledgerInfo.ciphertext,
      mac: pledgerInfo.mac,
    });
    setData(JSON.parse(random));
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
      </Paper>
    </>
  );
};

export default PledgersCard;
