import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import OrgCard from "../organization-cards/OrgCard";
import { BorderlessButton, PrimaryButton } from "@components/button";
import { useRouter } from "next/router";
import { PATH_ORGANIZATION } from "@routes/paths";
import { useDispatch, useSelector } from "react-redux";
import { initializeMyJoinedOrganizations } from "@redux/reducers/myJoinedOrgReducer";

export default function Organizations() {
  const { push } = useRouter();
  const dispatch = useDispatch();

  const [next, setNext] = React.useState(5);

  const myOrganizations = useSelector((state) => state.myJoinedOrganizations);

  useEffect(() => {
    dispatch(initializeMyJoinedOrganizations());
  }, []);

  const handleJoin = () => {
    push(PATH_ORGANIZATION.joinOrg);
  };

  const handleCreate = () => {
    push(PATH_ORGANIZATION.createOrg);
  };

  const handleRequest = () => {
    push(PATH_ORGANIZATION.pendingRequest);
  };
  const handleYourRequest = () => {
    push(PATH_ORGANIZATION.yourPendingRequest);
  };

  const loadMore = () => {
    setNext(next + 10);
  };

  return (
    <Container sx={{ mb: 3 }}>
      <PrimaryButton sx={{ mt: 2, mb: 2 }} onClick={handleCreate}>
        Create organization
      </PrimaryButton>
      <PrimaryButton sx={{ mb: 2 }} onClick={handleJoin}>
        Join organization
      </PrimaryButton>
      <PrimaryButton sx={{ mb: 2 }} onClick={handleRequest}>
        Approve pending requests
      </PrimaryButton>
      <PrimaryButton sx={{ mb: 2 }} onClick={handleYourRequest}>
        View your pending requests
      </PrimaryButton>
      <hr style={{ border: "0.5px dashed black" }} />
      <Typography
        variant="h4"
        display="flex"
        justifyContent="center"
        sx={{ mb: 1 }}
      >
        Your Organizations
      </Typography>
      {myOrganizations?.slice(0, next)?.map((org) => (
        <div key={org.id}>
          <OrgCard org={org} />
        </div>
      ))}
      {next < myOrganizations?.length && (
        <BorderlessButton
          sx={{ mt: 1, color: "error.dark" }}
          onClick={loadMore}
        >
          Load more...
        </BorderlessButton>
      )}
    </Container>
  );
}
