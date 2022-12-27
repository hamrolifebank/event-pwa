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

export default function JoinOrg() {
  const [input, setInput] = useState("");
  const { push } = useRouter();

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

  const org = [
    {
      label: "Shawshank",
      location: "washington",
      email: "abc@gmail.com",
      number: 12345,
    },
    {
      label: "Godfather",
      location: "sydney",
      email: "abc@gmail.com",
      number: 12345,
    },
    {
      label: "Helper",
      location: "stockholm",
      email: "abc@gmail.com",
      number: 12345,
    },
    {
      label: "Dark Knight",
      location: "rome",
      email: "abc@gmail.com",
      number: 12345,
    },
    {
      label: "Angry Men",
      location: "paris",
      email: "abc@gmail.com",
      number: 12345,
    },
    {
      label: "Schindler's List",
      location: "california",
      email: "abc@gmail.com",
      number: 12345,
    },
  ];

  const filteredList = org.filter((list) => {
    if (input === "") {
      return list;
    } else {
      return list.label.toLowerCase().includes(input);
    }
  });

  return (
    <Container>
      <IconButton color="primary" onClick={arrowBack}>
        <ArrowBackIosIcon />
      </IconButton>

      <Autocomplete
        disablePortal
        options={org.map((list) => list.label)}
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
          key={org.label}
          variant="outlined"
          sx={{ p: 2, boxShadow: 5, mb: 2 }}
        >
          <Grid container item xs={12}>
            <Grid item xs={9}>
              <Typography sx={style} gap={2}>
                <Icon icon="mdi:business-card-outline" />
                {org.label}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <PrimaryButton sx={{ height: 25 }} onClick={handleJoin}>
                JOIN
              </PrimaryButton>
            </Grid>
          </Grid>
          <Typography sx={style} gap={2}>
            <Icon icon="material-symbols:location-on-outline" /> {org.location}
          </Typography>
          <Typography sx={style} gap={2}>
            <Icon icon="ic:outline-email" /> {org.email}
          </Typography>
          <Typography sx={style} gap={2}>
            <Icon icon="material-symbols:phone-enabled-outline-sharp" />
            {org.number}
          </Typography>
        </Card>
      ))}
    </Container>
  );
}
