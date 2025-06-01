import { Box } from '@mui/material'
import React from 'react'
import ContHero from '../Components/Marketing/ContHero'
import ContOffers from '../Components/Marketing/ContOffers'
import ContServices from '../Components/Marketing/ContServices'
import WhyChooseUs from '../Components/WhyChooseUs'
import ContBenefits from '../Components/Marketing/ContBenefits'
import ContCTA from '../Components/Marketing/ContCTA'
import  Form  from '../Components/Contact/Form'

const Marketing = () => {
  return (
    <Box>
      <ContHero/>
      <ContOffers/>
      <ContServices />
      <WhyChooseUs />
      <ContBenefits />
      <ContCTA />
      <Form />
    </Box>
  )
}

export default Marketing