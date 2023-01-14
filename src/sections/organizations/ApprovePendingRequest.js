import {
  Autocomplete,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BorderlessButton from "@components/button/BorderlessButton";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ApprovePendingReqCard from "@sections/event-card/ApprovePendingReqCard";
import { initializeYourApproveRequests } from "@redux/reducers/myApproveRequestReducer";
import LoadingScreen from "@components/LoadingScreen";
import { useDispatch, useSelector } from "react-redux";

const ApprovePendingRequest = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const myApproveRequests = useSelector((state) => state.myApproveRequests);

  const router = useRouter();

  useEffect(() => {
    const initialize = async () => {
      await dispatch(initializeYourApproveRequests());
      setIsLoading(false);
    };

    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const handleInput = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  return (
    <Container>
      <IconButton color="primary" onClick={() => router.back()}>
        <ArrowBackIosIcon />
      </IconButton>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle2" align="center">
            APPROVE PENDING REQUESTS
          </Typography>
        </Grid>
      </Grid>
      <Autocomplete
        disablePortal
        id="filter-box"
        fullWidth
        sx={{ mt: 2 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Filter by person or organization name"
          />
        )}
      />

      <Stack spacing={1} mt={2}>
        {myApproveRequests.map((requests) => {
          return (
            <div key={requests.id}>
              <ApprovePendingReqCard requests={requests} />
            </div>
          );
        })}
      </Stack>

      <BorderlessButton sx={{ mt: 1, color: "error.dark" }}>
        Load more...
      </BorderlessButton>
    </Container>
  );
};

export default ApprovePendingRequest;
