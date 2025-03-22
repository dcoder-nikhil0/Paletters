import { Box } from '@mui/material'
import React from 'react'
import WebCTA from '../Components/Website/WebCTA'
import WebHero from '../Components/Website/WebHero'
import WhyChooseUs from '../Components/WhyChooseUs'
import WebServices from '../Components/Website/WebService'
import WebOffers from '../Components/Website/WebOffers'
import WebBenefits from '../Components/Website/WebBenefits'

const Website = () => {
  return (
    <Box>
      <WebHero />
      <WebOffers />
      <WebServices />
      <WhyChooseUs />
      <WebBenefits />
      <WebCTA />
    </Box>
  )
}

export default Website