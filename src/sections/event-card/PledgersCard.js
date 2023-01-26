import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Icon } from "@iconify/react";
import EthCrypto from "eth-crypto";
import React from "react";
import { useSelector } from "react-redux";

const PledgersCard = async ({ eventPledger }) => {
  console.log("pledger: ", eventPledger);
  const eventsFromEventServer = useSelector((state) => state.eventsFromServer);

  // const events = eventsFromEventServer.filter(
  //   (eventFromServer) => eventFromServer.eventEthAddress === eventEthAddress
  // );
  // console.log("addressFromEvent: ", events);

  // const decryptedData = events.length !== 0 ? events.map((event) => await EthCrypto.decryptWithPrivateKey(
  //   "0x98c19c163f3da201318c91218ed19b33a3317035f928118921750bd335454edf", // privateKey

  //   {
  //     iv: "25d95a579504449480516510007b7e9f",
  //     ephemPublicKey:
  //       "04b60b47e223bfa34df0f166eef785308375a4a8d4a58ec6f0c4a2152e94879bdb2aa04431925902cf52fe6783725dfb186b31b0576c840d3e63b640c5b30333c1",
  //     ciphertext:
  //       "3a8b237ef2ee3534182e2dd0042c465e0de1e633ccca7f662a2323f4794183d2cbb810195f731dd5f8d9bb9eda11b683ef7ea4baf2cb31890fcfe57409299f8164cda6c87a4ac1fe90cd64a07722b64ba484624c3ad0eb43c00ae101d2b23c4c73d7cc4d9e095c52edfae45cafe0b7b1f4d4febf8bdae7e0936079a05f03a3beb469b2a50d690069e7948e9f98b3bca7d4333303b63d3dfb5d6cc7a86d8c554e",
  //     mac: "639c9c8a41d400dd961a257d1e8ca5003f8cae51ba4d497e408fc9c17326314b",
  //   } // encrypted-data
  // ))

  // console.log("data: ", decryptedData);
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
            {eventPledger.pledgerInfo}
            <span style={{ color: "grey" }}>(0-)</span>
          </Typography>

          <Typography
            sx={{
              fontSize: "subtitle2.fontSize",
              display: "flex",
              gap: "5px",
              alignItems: "center",
              textDecoration: "underline",
            }}
            color="grey.600"
          >
            <Icon icon="eva:phone-call-fill" />
            9852415203
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default PledgersCard;
