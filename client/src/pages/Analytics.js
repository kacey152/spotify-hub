import { Container, Typography, Grid } from '@mui/material'
import React from 'react'
import MusicalMilestones from '../components/MusicalMilestones'
import MusicalTimeline from '../components/MusicalTimeline'
import MusicalRecommendations from '../components/MusicalRecommendations'

const Analytics = () => {

  return (
    <>
    <MusicalMilestones />
    <MusicalTimeline />
    <MusicalRecommendations />
    </>
  )
}

export default Analytics