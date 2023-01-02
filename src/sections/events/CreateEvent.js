import { Container, Typography } from "@mui/material";
import React from "react";

const CreateEvent = () => {
  return (
    <Container>
      <Typography
        display="flex"
        justifyContent="center"
        variant="h2"
        sx={{ mt: 2, mb: 2 }}
      >
        Create event
      </Typography>
    </Container>
  );
};

export default CreateEvent;
