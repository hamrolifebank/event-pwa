import { Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import BorderlessButton from "@components/button/BorderlessButton";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PendingReqCard from "@sections/event-card/PendingReqCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeYourPendingRequests } from "@redux/reducers/yourPendingRequestReducer";

const YourPendingRequest = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const yourPendingRequest = useSelector((state) => state.yourPendingRequests);

  useEffect(() => {
    dispatch(initializeYourPendingRequests());
  }, []);

  if (!yourPendingRequest) return "loading..."; // loading screen can be returned here
  return (
    <Container>
      <IconButton color="primary" onClick={() => router.back()}>
        <ArrowBackIosIcon />
      </IconButton>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle2" align="center">
            YOUR PENDING REQUESTS
          </Typography>
        </Grid>
      </Grid>

      <Stack spacing={1} mt={2}>
        {yourPendingRequest.map((item) => (
          <PendingReqCard key={item.id} item={item} />
        ))}
      </Stack>
      <BorderlessButton sx={{ mt: 1, color: "error.dark" }}>
        Load more...
      </BorderlessButton>
    </Container>
  );
};

export default YourPendingRequest;
