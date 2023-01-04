import React, { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import QRCode from "react-qr-code";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";

const Home = () => {
  let publicAddress = useSelector((state) => state.user);

  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <Typography variant="h3" sx={{ pb: 1 }}>
          SCAN ME
        </Typography>
      </Box>
      <Box
        sx={{
          border: 1,
          borderRadius: 1,
          p: 1,
        }}
      >
        <Box display="flex" justifyContent="center">
          <QRCode
            title="Organization QR-code"
            value={`${publicAddress}`}
            level="M"
            bgColor={"#FFFFFF"}
            fgColor={"#000000"}
            size={225}
            padding={1}
          />
        </Box>

        <Box display="flex" justifyContent="center">
          <Typography variant="subtitle2">{`${publicAddress}`}</Typography>
        </Box>
      </Box>
    </Container>
  );
};
export default Home;
