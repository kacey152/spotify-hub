import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

const Home = () => {
  return (
      <Container sx={{ mx: "5em", pt: "10em", height: '100vh' }}>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h1" >
            Unlock Your Beat
          </Typography>
          <Typography variant="h2" sx={{ my: "1em"}}>
            Your Personalized Music Analytics Hub
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ py: "1em" }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
  );
};

export default Home;
