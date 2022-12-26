import React from "react";
import {
  Card,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";

export default function OrgCard() {
  const style = {
    // img: { backgroundImage: `url(${Image})` },
    card: { display: "flex", alignItems: "center", flexWrap: "wrap" },
  };
  return (
    <Card sx={{ p: 2, boxShadow: 5 }}>
      <Typography sx={style.card} gap={2}>
        <Icon icon="mdi:business-card-outline" />
        Org name
      </Typography>
      <Typography sx={style.card} gap={2}>
        <Icon icon="material-symbols:location-on-outline" /> Org location
      </Typography>
      <Typography sx={style.card} gap={2}>
        <Icon icon="ic:outline-email" /> E-mail
      </Typography>
      <Typography sx={style.card} gap={2}>
        <Icon icon="material-symbols:phone-enabled-outline-sharp" />
        phone number
      </Typography>
    </Card>
  );
}
