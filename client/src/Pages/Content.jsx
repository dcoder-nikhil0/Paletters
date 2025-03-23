import { Box } from '@mui/material'
import React from 'react'
import ContHero from '../Components/Content/ContHero'
import ContOffers from '../Components/Content/ContOffers'
import ContServices from '../Components/Content/ContServices'
import WhyChooseUs from '../Components/WhyChooseUs'
import ContBenefits from '../Components/Content/ContBenefits'
import ContCTA from '../Components/Content/ContCTA'
import  Form  from '../Components/Contact/Form'

const Content = () => {
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

export default Content