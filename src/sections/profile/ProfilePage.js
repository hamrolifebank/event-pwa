import { Button, Box, Avatar, Typography, Grid, Table } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { PrimaryButton } from "@components/button";
import Iconify from "@components/iconify";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const { push } = useRouter();
  const handleLogOut = () => {
    localStorage.clear();
    push("/auth/login");
  };
  const handleEdit = () => {};
  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button onClick={handleEdit}>Edit profile</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10",
        }}
      >
        {" "}
        <Avatar
          alt={user.firstname}
          src={JSON.parse(localStorage.getItem("userimg"))}
          sx={{ width: 80, height: 80, mt: 2 }}
        />
        <Typography sx={{ mt: 2, mb: 2 }} variant="h5">
          {" "}
          {user.firstname.charAt(0).toUpperCase() +
            user.firstname.slice(1) +
            " " +
            user.lastname.charAt(0).toUpperCase() +
            user.lastname.slice(1)}
        </Typography>
      </Box>

      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item display="flex" justifyContent="center">
          <Box display="flex" justifyContent="center" gap={2}>
            <Box display="flex" flexDirection="column">
              <Iconify
                icon="eva:phone-call-fill"
                sx={{ color: "primary.main", mb: 2 }}
              ></Iconify>
              <Iconify
                icon="material-symbols:mail"
                sx={{ color: "primary.main", mb: 2 }}
              ></Iconify>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="h6" sx={{ color: "grey.600", mb: 1 }}>
                {user.phone === null
                  ? "Please enter your phone number"
                  : user.phone}
              </Typography>
              <Typography variant="h6" sx={{ color: "grey.600", mb: 1 }}>
                {user.email}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <PrimaryButton onClick={handleLogOut} sx={{ mt: 2 }}>
        Logout
      </PrimaryButton>
    </Container>
  );
};

export default ProfilePage;
