import { Button, Box, Typography, Paper } from "@mui/material";
import React from "react";
import { Container } from "@mui/system";
import { Icon } from "@iconify/react";
import { useTheme } from "@emotion/react";
import { PrimaryButton, SecondaryButton } from "@components/Button";
export default function Login() {
    const theme = useTheme();
    const router = useRouter();
    const { addPublicAddress, addWallet } = useAppAuthContext();
  
    const handleCreateWallet = async () => {
      const wallet = await library.createWallet();
      addPublicAddress(wallet.address);
      addWallet(wallet);
    };
  
    return (
      <Container>
        <Typography variant="h3" sx={{ mt: 5, pb: 2 }}>
         Log in using your google account
        </Typography>
        <Box
          sx={{
            border: 0.1,
            p: 2,
            borderRadius: 1,
          }}
        >
          <PrimaryButton onClick={handleCreateWallet}>
            <Icon
              icon="fluent:wallet-credit-card-24-filled"
              height={30}
              width={40}
            />
          Google sign in
          </PrimaryButton>
        </Box>
        <hr />
        <Typography variant="h5" sx={{ mt: 2, pb: 2 }}>
          or
        </Typography>
        <Box
          sx={{
            border: 0.1,
            p: 2,
            borderRadius: 1,
          }}
        >
    
          <SecondaryButton onClick={handleRestoreWallet}>
            <Icon
              icon="akar-icons:google-fill"
              height={30}
              width={40}
              color={theme.palette.primary.lighter}
            />
            Google drive
          </SecondaryButton>
        </Box>
      </Container>
    );
  }