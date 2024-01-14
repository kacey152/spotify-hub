import React from 'react'
import Grid from '@mui/material/Grid'
import AnalyticsFrame from './AnalyticsFrame'
import { Container } from '@mui/material'

const MusicalTimeline = () => {
    let title1 = "Your Musical Timeline"
    let description1 = "Discover the unique evolution of your playlist"
    return (
        <Container sx={{ pt: "8em", height: '100vh' }}>
            <Grid
                container
                spacing={10}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
            >
                <Grid item xs={12}>
                    <AnalyticsFrame title={title1} description={description1} />
                </Grid>
                <Grid item xs={12}>
                    <div>Feature here</div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MusicalTimeline