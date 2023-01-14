import { Box, Paper, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

const MemberCard = ({ member }) => {
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
              fontSize: "subtitle2.fontSize",
              fontWeight: "subtitle2.fontWeight",
              lineHeight: "subtitle2.lineHeight",
            }}
          >
            {member.user.firstname} {member.user.lastname}
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
            <Icon icon="ic:outline-email" />
            {member.user.email}
          </Typography>

          {member.user.phone && (
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
              {member.user.phone}
            </Typography>
          )}
        </Box>
      </Paper>
    </>
  );
};

export default MemberCard;
