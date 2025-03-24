import { Box } from '@mui/material'
import React from 'react'
import HomeHero from '../Components/Home/HomeHero'
import HomeCountups from '../Components/Home/HomeCountups'
import HoemServices from '../Components/Home/HoemServices'
import PortService from '../Components/Portfolio/PortService'
import Form from '../Components/Contact/Form'
import HomeTest from '../Components/Home/HomeTest'
import PortfolioCard from './../Components/Portfolio/PortfolioCard';

const Home = () => {
  return (
    <Box>
      <HomeHero />
      <HomeCountups />
      <HoemServices />
      <PortfolioCard />
      <PortService />
      <HomeTest />
      <Form />
    </Box>
  )
}

export default Home