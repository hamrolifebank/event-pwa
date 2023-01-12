import { Box, Chip, Paper, Typography, Grid } from "@mui/material";
import { Icon } from "@iconify/react";
import { useTheme } from "@mui/material/styles";
import { PrimaryButton, SecondaryButton } from "@components/button";
import { Stack } from "@mui/system";

const ApprovePendingReqCard = () => {
  const theme = useTheme();

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
              Sarita Tamang
            </Typography>
            <Chip
              label=" Nepal Red Cross"
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
              saritatmg123@gmail.com
            </Typography>

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
              +977 9825543621
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={1}>
              <PrimaryButton size="small">Accept</PrimaryButton>
              <SecondaryButton size="small">Decline</SecondaryButton>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ApprovePendingReqCard;
