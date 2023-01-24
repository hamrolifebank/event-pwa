import { BorderlessButton, PrimaryButton } from "@components/button";
import { IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Container, Box } from "@mui/system";
import ManagerCard from "@sections/event-card/ManagerCard";
import { useRouter } from "next/router";
import React from "react";

const AddManagers = ({ ClickedEvents }) => {
  const router = useRouter();
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
      <PrimaryButton sx={{ mt: 2, mb: 2 }}>Add manager</PrimaryButton>
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
      <ManagerCard />
      <ManagerCard />
      <ManagerCard />

      <Box>
        <BorderlessButton sx={{ mt: 2, mb: 2, color: "secondary.main" }}>
          Load more...
        </BorderlessButton>
      </Box>
    </Container>
  );
};

export default AddManagers;
