import { Box, Button, Paper, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import WarningButton from "@components/button/WarningButton";
import { useDispatch } from "react-redux";
import { withDrawRequest } from "@redux/reducers/yourPendingRequestReducer";

const PendingReqCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleWithdraw = (id) => {
    dispatch(withDrawRequest(id));
  };

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
            {item.organization.name}
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
            {item.organization.address}
          </Typography>
        </Box>
        <Box>
          <WarningButton
            variant="contained"
            size="small"
            sx={{ bgcolor: "error.dark" }}
            onClick={() => handleWithdraw(item.id)}
          >
            withdraw
          </WarningButton>
        </Box>
      </Paper>
    </>
  );
};

export default PendingReqCard;
