import { Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BorderlessButton from "@components/button/BorderlessButton";
import MemberCard from "@sections/event-card/MemberCard";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useSelector } from "react-redux";
import organizationService from "@services/organizationService";

const OrgMembers = () => {
  const router = useRouter();
  const { query } = useRouter();
  const { id } = query;

  const [members, setMembers] = useState([]);
  const [next, setNext] = useState(5);

  const myOrganization = useSelector((state) => state.myJoinedOrganizations);

  const selectedOrganization = myOrganization?.find(
    (org) => org.id === Number(id)
  );

  useEffect(() => {
    organizationService.getMemberList(id).then((data) => setMembers(data));
  }, []);

  const loadMore = () => {
    setNext(next + 10);
  };

  return (
    <Container sx={{ mb: 3 }}>
      <IconButton color="primary" onClick={() => router.back()}>
        <ArrowBackIosIcon />
      </IconButton>

      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            {selectedOrganization.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" align="center">
            MEMBERS
          </Typography>
        </Grid>
      </Grid>

      <Stack spacing={1} mt={2}>
        {members?.slice(0, next)?.map((member) => (
          <div key={member.id}>
            <MemberCard member={member} />
          </div>
        ))}
      </Stack>
      {next < members?.length && (
        <BorderlessButton
          sx={{ color: "error.dark", mt: 1 }}
          onClick={loadMore}
        >
          Load more...
        </BorderlessButton>
      )}
    </Container>
  );
};

export default OrgMembers;
