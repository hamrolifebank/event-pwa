import { Box, Chip, Paper, Typography, Grid } from "@mui/material";
import { Icon } from "@iconify/react";
import { useTheme } from "@mui/material/styles";
import { PrimaryButton, SecondaryButton } from "@components/button";
import { Stack } from "@mui/system";
import { approveRequests } from "@redux/reducers/myApproveRequestReducer";
import { useDispatch } from "react-redux";

const ApprovePendingReqCard = ({ requests }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleAccept = (id) => {
    dispatch(approveRequests(id));
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
        <Grid container item xs={12}>
          <Grid item xs={9}>
            <Typography
              sx={{
                color: "black",
                fontSize: "subtitle1.fontSize",
                fontWeight: "subtitle1.fontWeight",
                lineHeight: "subtitle1.lineHeight",
              }}
            >
              {requests.user.firstname} {requests.user.lastname}
            </Typography>
            <Chip
              label={requests.organization.name}
              icon={
                <Icon
                  icon="ic:sharp-verified"
                  color={theme.palette.warning.main}
                  height="18px"
                  width="18px"
                />
              }
            />
            <Typography
              sx={{
                fontSize: "subtitle2.fontSize",
                color: "grey.600",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Icon icon="ic:outline-email" />
              {requests.user.email}
            </Typography>

            {requests.user.phone && (
              <Typography
                sx={{
                  fontSize: "subtitle2.fontSize",
                  color: "grey.600",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Icon icon="material-symbols:call-outline-sharp" />
                {requests.user.phone}
              </Typography>
            )}
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={1}>
              <PrimaryButton
                size="small"
                onClick={() => {
                  handleAccept(requests.id);
                }}
              >
                Accept
              </PrimaryButton>
              <SecondaryButton size="small">Decline</SecondaryButton>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ApprovePendingReqCard;
