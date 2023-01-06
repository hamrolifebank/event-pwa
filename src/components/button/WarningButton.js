import Iconify from "@components/iconify/Iconify";
import { Button } from "@mui/material";
import React from "react";

const WarningButton = ({ children, ...props }) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          bgcolor: "error.dark",
          gap: 1,
          mb: 2,
        }}
        fullWidth
        {...props}
      >
        <Iconify icon="ic:round-warning" />
        {children}
      </Button>
    </>
  );
};

export default WarningButton;
