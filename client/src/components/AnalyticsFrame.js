import { Grid, Typography } from '@mui/material'
import React from 'react'


const AnalyticsFrame = ({title, description}) => {
    return (
        <Grid
            container
            spacing={4}
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
        >
            <Grid item xs={12}>
                <Typography variant="h3">
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">
                    {description}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AnalyticsFrame