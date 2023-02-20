import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Icon } from "@iconify/react";
import React from "react";

import { useSelector } from "react-redux";

const ManagerCard = ({ manager }) => {
  const user = useSelector((state) => state.user);

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
            {manager.userId === user.id ? user.firstname : null}
            <span style={{ color: "grey" }}>(0-)</span>
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
            {manager.userId === user.id ? user.email : null}
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default ManagerCard;
