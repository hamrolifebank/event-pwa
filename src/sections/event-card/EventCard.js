import PropTypes from "prop-types";
import {
  Box,
  Button,
  Link,
  Paper,
  Typography,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";
import { Icon } from "@iconify/react";
import QRCode from "react-qr-code";
import { useState } from "react";
import { useRouter } from "next/router";

const EventCard = ({ user, event }) => {
  const [anchor, setAnchor] = useState(null);
  const currentDate = new Date();
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchor(event.currentTarget);
  };
  const { push } = useRouter();

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          mb: 1,
          justifyContent: "space-between",

          padding: "12px 20px 12px 12px",

          backgroundColor: "grey.200",
        }}
      >
        <Link
          onClick={() => push(`/event/${event.id}`)}
          style={{ textDecoration: "none" }}
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
              {event?.eventName}
            </Typography>
            <Typography
              sx={{
                fontSize: "subtitle2.fontSize",
                color: "grey.600",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Icon icon="mdi:clock-time-eight-outline" />
              {new Date(event?.startTimeStamp).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
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
              {event?.location}
            </Typography>
          </Box>
        </Link>
        {new Date(event?.endTimeStamp) >= currentDate ? (
          <Box>
            <Button
              aria-describedby="QR code"
              variant="contained"
              onClick={(event) => {
                handleClick(event);
              }}
            >
              QR code
            </Button>
            <Dialog
              sx={{ alignItems: "flex-start", pb: 35 }}
              open={Boolean(anchor)}
              onClose={() => {
                setAnchor(null);
              }}
            >
              <DialogTitle display="flex" justifyContent="center">
                {event?.eventName}
              </DialogTitle>
              <DialogContent>
                <Container>
                  <Box
                    sx={{
                      borderRadius: 2,
                      mb: 3,
                      mr: 1,
                      ml: 1,
                    }}
                  >
                    <Box display="flex" justifyContent="center">
                      <QRCode
                        title="Event QR-code"
                        value={event?.eventEthAddress}
                        level="M"
                        bgColor={"#FFFFFF"}
                        fgColor={"#000000"}
                        size={250}
                        padding={2}
                      />
                    </Box>
                    <DialogContentText
                      display="flex"
                      justifyContent="center"
                      sx={{ wordWrap: "inherit", pt: 2 }}
                    >
                      {event?.eventEthAddress}
                    </DialogContentText>
                  </Box>
                </Container>
              </DialogContent>
            </Dialog>
          </Box>
        ) : null}
      </Paper>
    </>
  );
};

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventCard;
