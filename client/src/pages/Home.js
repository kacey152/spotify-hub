import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import backgroundImage from "../images/starrybackground.jpg";
import Instructions from '../components/Instructions';
import { Grid } from '@mui/material';

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <div
          style={{
            background: `url(${backgroundImage}) center/cover no-repeat fixed`,
            color: '#f5f5f5',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Hero />
            </Grid>
            <Grid item xs={12}>
              <About />
            </Grid>
            <Grid item xs={12}>
              <Instructions />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  )
}

export default Home