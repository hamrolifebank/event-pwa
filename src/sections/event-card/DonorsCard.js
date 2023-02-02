import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Icon } from "@iconify/react";
import React from "react";

const DonorsCard = ({ donor, ethAddresses }) => {
  const donerExist = ethAddresses.find(
    (address) => address.pledgerEthAddress === donor.donorEthAddress
  );
  console.log("exist: ", donerExist);
  if (donerExist) {
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
              {donor.donorName}
              <span style={{ color: "grey", paddingLeft: "5px" }}>
                {donor.bloodGroup}
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
              {donor.phone}
            </Typography>
          </Box>
        </Paper>
      </>
    );
  } else {
    <>
      <Typography
        display="flex"
        justifyContent="center"
        sx={{
          mb: 2,
          fontSize: "h6.fontSize",
          fontWeight: "h6.fontWeight",
          lineHeight: "h6.lineHeight",
        }}
        color="grey.600"
      >
        This event has no donors.
      </Typography>
    </>;
  }
};

export default DonorsCard;
