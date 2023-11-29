import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
// import backgroundImage from "../images/starrybackground3.jpg";

const Home = () => {
  return (
    <div
      style={{
        // background: `url(${backgroundImage}) center/cover no-repeat fixed`,
        backgroundColor: '#111111' ,
        height: "100vh",
        color: '#f5f5f5',
      
      }}
    >
      <Container sx={{ mx: "2em", pt: "10em" }}>
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
    </div>
  );
};

export default Home;
