import React from "react";
import { Card, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function OrgCard() {
  const myOrganizations = useSelector((state) => state.myJoinedOrganizations);

  const style = {
    img: {},
    card: { display: "flex", alignItems: "center", flexWrap: "wrap" },
  };
  return (
    <>
      {myOrganizations.map((org) => (
        <div key={org.id}>
          <Card
            variant="outlined"
            sx={{ p: 1, boxShadow: 5 }}
            style={style.img}
          >
            <Link
              href={`/organization/${123456}`}
              style={{
                textDecoration: "none",
                color: "common",
              }}
            >
              <Typography sx={style.card} gap={2}>
                <Icon icon="mdi:business-card-outline" />
                {org.name}
              </Typography>
              <Typography sx={style.card} gap={2}>
                <Icon icon="material-symbols:location-on-outline" />{" "}
                {org.address}
              </Typography>
              <Typography sx={style.card} gap={2}>
                <Icon icon="ic:outline-email" /> {org.email}
              </Typography>
              <Typography sx={style.card} gap={2}>
                <Icon icon="material-symbols:phone-enabled-outline-sharp" />
                {org.phone}
              </Typography>
            </Link>
          </Card>
        </div>
      ))}
    </>
  );
}
