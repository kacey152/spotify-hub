import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Instructions = () => {
    return (
        <Container sx={{ height: '100vh' }}>
            <Box sx={{ pt: '15em', px: '4em' }}>
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    wrap="wrap"
                    sx={{ textAlign: 'left' }}
                >
                    <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box>
                            <Typography variant="h4">
                                How It Works
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item container xs={12} md={8} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item container xs={12} spacing={4}>
                            <Grid item>
                                <Typography variant="h4">
                                    Connect Your Spotify Account
                                </Typography>
                                <Typography variant="h5">
                                    Log in to Spotify Hub and seamlessly connect with your Spotify account.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4">
                                    Explore Your Dashboard
                                </Typography>
                                <Typography variant="h5">
                                    Dive into a visually stunning dashboard that transforms your music data into meaningful insights.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4">
                                    Collaborate and Share
                                </Typography>
                                <Typography variant="h5">
                                     Connect with friends, create collaborative playlists, and share your music journey.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        </Container>

    )
}

export default Instructions