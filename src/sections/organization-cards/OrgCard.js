import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function OrgCard({ org }) {
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px 20px 12px 12px",
          mb: 1,
          backgroundColor: "grey.200",
        }}
      >
        <Link
          href={`/organization/${org.id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "subtitle1.fontSize",
                fontWeight: "subtitle1.fontWeight",
                lineHeight: "subtitle1.lineHeight",
              }}
            >
              {org.name}
            </Typography>

            <Typography
              sx={{
                fontSize: "subtitle2.fontSize",
                display: "flex",
                gap: "5px",
                alignItems: "center",
                textDecoration: "underline",
                color: "secondary.main",
              }}
            >
              <Icon icon="material-symbols:location-on" />
              {org.address}
            </Typography>
          </Box>
        </Link>
      </Paper>
    </>
  );
}
