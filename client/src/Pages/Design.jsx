import { Box } from '@mui/material'
import React from 'react'
import DesignHero from '../Components/Design/DesignHero'
import DesignOffers from '../Components/Design/DesignOffers'
import WhyChooseUs from './../Components/WhyChooseUs';
import Form from '../Components/Contact/Form';
import DesignComparison from '../Components/Design/DesignComparison';
import DesignCTA from '../Components/Design/DesignCTA';
import DesignShowcase from '../Components/Design/DesignShowCase';

const Design = () => {
  return (
    <Box>
      <DesignHero />
      <DesignOffers />
      <DesignShowcase />
      <DesignComparison />
      <DesignCTA />
      <WhyChooseUs />
      <Form />
    </Box>
  )
}

export default Design