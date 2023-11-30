import React, { useEffect, useRef, useState } from "react";
import { Container, Typography, Button, Box, Slide, Grow } from "@mui/material";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [inView]);

  return (
    <Container sx={{ mx: "5em", pt: "10em", height: '100vh' }}>
      <Box sx={{ textAlign: "left", position: 'relative' }}>
        <Typography variant="h1" sx={{ fontWeight: 'bold', display: 'inline' }} ref={textRef} >
          Unlock Your Beat
        </Typography>
        <Slide
          ref={ref}
          direction="right"
          in={inView}
          timeout={500}
        >
          <Box
            sx={{
              width: textWidth,
              height: 3,
              backgroundColor: '#f5f5f5',
              position: 'absolute',
              bottom: 0,
              left: 0,
              transformOrigin: 'bottom',
            }}
          />
        </Slide>
      </Box>
      <Box sx={{ textAlign: "left" }}>
        <Slide
          ref={ref}
          direction="right"
          in={inView}
          timeout={500}
        >
          <Typography variant="h2" sx={{ my: "1em" }}>
            Your Personalized Music Analytics Hub
          </Typography>
        </Slide>
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
