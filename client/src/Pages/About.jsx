import { Box } from '@mui/material'
import React from 'react'
import AboutHero from '../Components/About/AboutHero'
import AboutValue from '../Components/About/AboutValue'

const About = () => {
  return (
    <Box>
      <AboutHero />
      <AboutValue />
      {/* <AboutMission /> */}
    </Box>
  )
}

export default About