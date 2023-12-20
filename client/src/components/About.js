import React from "react";
import { Container, Typography, Box, Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";

const About = () => {
  return (
      <Container sx={{height: '100vh', display: 'flex', alignItems: 'center'}}>
        <Box sx= {{py: '4em', px: '4em', backgroundColor: '#111111', border: '2px solid #373b40'}} >
          <Grid container spacing={4} sx={{ textAlign: "left" }}>
            <Grid item xs={4}>
              <Typography variant="h5">Discover Your Sound Identity</Typography>
            </Grid>
            <Grid item xs={8} sx={{ textAlign: "center" }}>
              <Typography variant="h5">Key Features</Typography>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item container xs={8} spacing={4}>
              <Grid item xs={4}>
                <InsertChartOutlinedSharpIcon
                  sx={{ fontSize: "3em", mb: "0.5em" }}
                />
              </Grid>
              <Grid item xs={4}>
                <Diversity3OutlinedIcon sx={{ fontSize: "3em", mb: "0.5em" }} />
              </Grid>
              <Grid item xs={4}>
                <LibraryMusicOutlinedIcon sx={{ fontSize: "3em", mb: "0.5em" }} />
              </Grid>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h6">
                  Spotify Hub goes beyond the surface, delving deep into your music
                  preferences to uncover the rhythms that resonate with you. Whether
                  you're a music enthusiast or a casual listener, our platform offers
                  a personalized exploration of your Spotify universe.
                </Typography>
            </Grid>
            <Grid item container xs={8} spacing={4}>
              <Grid item xs={4}>
                <Typography variant="h5">Analytics at Your Fingertips</Typography>
                <Typography variant="h6">
                  Gain insights into your top tracks, favorite artists, and dynamic
                  playlist trends.
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">Collaborate and Create</Typography>
                <Typography variant="h6">
                  Build collaborative playlists with friends, sharing the joy of
                  music discovery.
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">
                  Recommendations Tailored to You
                </Typography>
                <Typography variant="h6">
                  Receive personalized music recommendations based on your unique
                  taste.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
  );
};

export default About;
