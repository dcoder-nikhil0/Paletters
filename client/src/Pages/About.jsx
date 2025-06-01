import { Box } from '@mui/material'
import AboutHero from '../Components/About/AboutHero'
import AboutValue from '../Components/About/AboutValue'
import AboutMission from '../Components/About/AboutMission'
import Form from '../Components/Contact/Form'
import AboutFounders from '../Components/About/AboutFounders'

const About = () => {
  return (
    <Box>
      <AboutHero />
      <AboutValue />
      <AboutMission />
      <AboutFounders />
      <Form />
    </Box>
  )
}

export default About