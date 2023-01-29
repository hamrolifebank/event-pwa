import { Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import BorderlessButton from "@components/button/BorderlessButton";
import DonorCard from "@sections/event-card/DonorCard";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useSelector } from "react-redux";
import organizationService from "@services/organizationService";

const OrgDonor = () => {
  const router = useRouter();
  const { query, push, asPath } = useRouter();
  const organizations = useSelector((state) => state.organizations);
  const event = useSelector((state) => state.events);
  const selectedOrganization = organizations?.find(
    (organization) => organization.id === Number(query.id)
  );
  // console.log("the selected otr", selectedOrganization);
  // event.map((event) => console.log("the org name", event.organization));
  const organiztionEvents = event?.filter(
    (orgevent) => orgevent?.organization === selectedOrganization?.name
  );
  const getEventAppTableEvents = async () => {
    const evenstInEventTable = await organizationService.getTableEvents();
    const matchedEthaddrerss = evenstInEventTable.filter((event) =>
      organiztionEvents.find(
        (orgevent) => orgevent.eventEthAddress === event.eventEthAddress
      )
    );

    console.log("the matchedEthaddrerss ", matchedEthaddrerss);
  };
  const evenstInEventTbl = getEventAppTableEvents();
  // console.log("the query is", donorOrganization);

  return (
    <Container>
      <IconButton color="primary" onClick={() => router.back()}>
        <ArrowBackIosIcon />
      </IconButton>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            {selectedOrganization?.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" align="center">
            DONORS
          </Typography>
        </Grid>
      </Grid>

      <Stack spacing={1} mt={2}>
        <DonorCard />
        <DonorCard />
        <DonorCard />
        <DonorCard />
      </Stack>
      <BorderlessButton sx={{ mt: 1, color: "error.dark" }}>
        Load more...
      </BorderlessButton>
    </Container>
  );
};

export default OrgDonor;
