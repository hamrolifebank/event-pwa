import { Box, Button, Paper, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

const PendingReqCard = () => {
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
          <Typography
            sx={{
              color: "black",
              fontSize: "subtitle1.fontSize",
              fontWeight: "subtitle1.fontWeight",
              lineHeight: "subtitle1.lineHeight",
            }}
          >
            Nepal Red Cross - kathmandu
          </Typography>

          <Typography
            sx={{
              fontSize: "subtitle2.fontSize",
              display: "flex",
              gap: "5px",
              alignItems: "center",
              textDecoration: "underline",
              color: "secondary.main",
            }}
          >
            <Icon icon="material-symbols:location-on" />
            Shankamul, Kathmandu
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            size="small"
            sx={{ bgcolor: "error.dark" }}
          >
            WITHDRAW
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default PendingReqCard;
