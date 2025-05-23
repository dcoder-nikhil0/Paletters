import { Box } from '@mui/material'
import React from 'react'
import IllHero from '../Components/Illustration/IllHero'
import IllOffers from '../Components/Illustration/IllOffers'
import IllBenefits from '../Components/Illustration/IllBenefits'
import IllCTA from '../Components/Illustration/IllCTA'
import IllServices from '../Components/Illustration/IllServices'
import Form from "../Components/Contact/Form"
import WhyChooseUs from './../Components/WhyChooseUs';
import IllFAQ from '../Components/Illustration/IllFAQ'

const Illustration = () => {
  return (
    <Box>
      <IllHero />
      <IllOffers />
      {/* <IllServices /> */}
      <IllBenefits />
      <WhyChooseUs />
      <IllCTA/>
      <Form />
      <IllFAQ />
    </Box>
  )
}

export default Illustration