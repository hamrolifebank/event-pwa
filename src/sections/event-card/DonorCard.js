import { Box, Paper, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

const DonorCard = () => {
  return (
    <>
      <Paper
        sx={{
          display: "flex",

          justifyContent: "space-between",

          padding: "12px 20px 12px 12px",

          backgroundColor: "grey.200",
        }}
      >
        <Box>
          <Box display="flex" gap={1}>
            <Typography
              sx={{
                color: "black",
                fontSize: "subtitle2.fontSize",
                fontWeight: "subtitle2.fontWeight",
                lineHeight: "subtitle2.lineHeight",
              }}
            >
              Sarita Tamang
            </Typography>
            <Typography
              sx={{
                fontSize: "subtitle2.fontSize",
                fontWeight: "subtitle2.fontWeight",
                color: "grey.600",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              (B+)
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "subtitle2.fontSize",
              color: "grey.600",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Icon icon="material-symbols:call-outline-rounded" />
            +977 9281731344
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default DonorCard;
