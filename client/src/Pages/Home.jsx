import { Box } from '@mui/material'
import HomeHero from '../Components/Home/HomeHero'
import HomeCountups from '../Components/Home/HomeCountups'
import HoemServices from '../Components/Home/HoemServices'
import PortService from '../Components/Portfolio/PortService'
import Form from '../Components/Contact/Form'
import HomeTest from '../Components/Home/HomeTest'
import HomeFAQ from '../Components/Home/HomeFAQ'
import HomeSuit from '../Components/Home/HomeSuit'
import HomeReason from '../Components/Home/HomeReason'

const Home = () => {
  return (
    <Box>
      <HomeHero />
      <HomeCountups />
      <HoemServices />
      <HomeSuit />
      <HomeReason />
      <PortService />
      <HomeTest />
      <Form />
      <HomeFAQ />
    </Box>
  )
}

export default Home