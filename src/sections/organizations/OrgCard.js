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
  return (
    <Card sx={{ p: 2, boxShadow: 5, color: theme.palette.grey[600] }}>
      <Icon icon="noto:drop-of-blood" />
      {/* <ListItem>
        <ListItemIcon>
          <Icon icon="mdi:business-card-outline" />
        </ListItemIcon>
        <ListItemText>Org name</ListItemText>
      </ListItem> */}
      <Typography>
        <Icon icon="mdi:business-card-outline" />
        Org name
      </Typography>
      <Typography>
        <Icon icon="material-symbols:location-on-outline" /> Org location
      </Typography>
      <Typography>
        <Icon icon="ic:outline-email" /> E-mail
      </Typography>
      <Typography>
        <Icon icon="material-symbols:phone-enabled-outline-sharp" />
        phone number
      </Typography>
    </Card>
  );
}
