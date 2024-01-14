import React from 'react'
import Grid from '@mui/material/Grid'
import AnalyticsFrame from './AnalyticsFrame'
import { Container } from '@mui/material'

const MusicalTimeline = () => {
    let title1 = "Tailored Recommendations"
    let description1 = "Handpicked tunes just for you"
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