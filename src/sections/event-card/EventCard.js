import PropTypes from "prop-types";
import {
  Box,
  Button,
  Popover,
  Paper,
  Typography,
  Container,
} from "@mui/material";
import { Icon } from "@iconify/react";
import QRCode from "react-qr-code";
import { useState } from "react";

const EventCard = ({ event, publicaddress }) => {
  const [anchor, setAnchor] = useState(null);
  const currentDate = new Date();

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
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
        <Box>
          <Typography
            sx={{
              color: "black",
              fontSize: "subtitle1.fontSize",
              fontWeight: "subtitle1.fontWeight",
              lineHeight: "subtitle1.lineHeight",
            }}
          >
            HBL donor center
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
            20 Nov 2023
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
            Shankhamul, Kathmandu
          </Typography>
        </Box>

        {new Date("2023 - 09 - 12") > currentDate ? (
          <Box>
            <Button
              aria-describedby="QR code"
              variant="contained"
              onClick={handleClick}
            >
              QR code
            </Button>
            <Popover
              id="QR code"
              open={Boolean(anchor)}
              anchorEl={anchor}
              onClose={() => {
                setAnchor(null);
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              anchorPosition={{
                vertical: "top ",
                horizontal: "center",
              }}
            >
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
                    <Typography variant="h5" sx={{ pb: 1 }}>
                      SCAN ME
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <QRCode
                      title="Organization QR-code"
                      value={`${publicaddress}`}
                      level="M"
                      bgColor={"#FFFFFF"}
                      fgColor={"#000000"}
                      size={180}
                      padding={1}
                    />
                  </Box>
                </Box>
              </Container>
            </Popover>
          </Box>
        ) : null}
      </Paper>
    </>
  );
};

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
  publicaddress: PropTypes.string.isRequired,
};

export default EventCard;
