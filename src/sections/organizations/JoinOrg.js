import {
  Autocomplete,
  Card,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { PATH_ORGANIZATION } from "@routes/paths";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { PrimaryButton } from "@components/button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { initializeOrganizations } from "@redux/reducers/organizationReducer";

export default function JoinOrg() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const org = useSelector((state) => state.organizations);
  const { push } = useRouter();

  useEffect(() => {
    dispatch(initializeOrganizations());
  }, []);

  if (!org || !org.length) return null; // loading screen can be returned here

  const handleInput = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  const handleJoin = () => {
    console.log("request join");
  };

  const arrowBack = () => {
    push(PATH_ORGANIZATION.root);
  };

  const style = { display: "flex", alignItems: "center", flexWrap: "wrap" };

  const filteredList = org.filter((list) => {
    if (input === "") {
      return list;
    } else {
      return list.name.toLowerCase().includes(input);
    }
  });

  return (
    <Container>
      <IconButton color="primary" onClick={arrowBack}>
        <ArrowBackIosIcon />
      </IconButton>

      <Autocomplete
        disablePortal
        options={org.map((list) => list.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            onSelect={handleInput}
            label="Search Organizations"
            sx={{
              width: 350,
              margin: "10px auto",
            }}
          />
        )}
      />
      {filteredList.map((org) => (
        <Card
          key={org.id}
          variant="outlined"
          sx={{ p: 2, boxShadow: 5, mb: 2 }}
        >
          <Grid container item xs={12}>
            <Grid item xs={9}>
              <Typography sx={style} gap={2}>
                <Icon icon="mdi:business-card-outline" />
                {org.name}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <PrimaryButton sx={{ height: 25 }} onClick={handleJoin}>
                JOIN
              </PrimaryButton>
            </Grid>
          </Grid>
          <Typography sx={style} gap={2}>
            <Icon icon="material-symbols:location-on-outline" /> {org.address}
          </Typography>
          <Typography sx={style} gap={2}>
            <Icon icon="ic:outline-email" /> {org.email}
          </Typography>
          <Typography sx={style} gap={2}>
            <Icon icon="material-symbols:phone-enabled-outline-sharp" />
            {org.phone}
          </Typography>
        </Card>
      ))}
    </Container>
  );
}
