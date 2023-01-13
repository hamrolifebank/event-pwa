import { Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import BorderlessButton from "@components/button/BorderlessButton";
import MemberCard from "@sections/event-card/MemberCard";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const OrgMembers = () => {
  const query = useRouter();
  const { id } = query;
  console.log("id", id);

  const router = useRouter();
  return (
    <Container>
      <IconButton color="primary" onClick={() => router.back()}>
        <ArrowBackIosIcon />
      </IconButton>

      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Bharatpur Redcross society
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" align="center">
            MEMBERS
          </Typography>
        </Grid>
      </Grid>

      <Stack spacing={1} mt={2}>
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </Stack>
      <BorderlessButton sx={{ color: "error.dark", mt: 1 }}>
        Load more...
      </BorderlessButton>
    </Container>
  );
};

export default OrgMembers;
