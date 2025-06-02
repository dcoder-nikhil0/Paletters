import { Box } from '@mui/material'
import VidHero from '../Components/Video/VidHero'
import VidOffers from '../Components/Video/VidOffers'
import VidBenefits from '../Components/Video/VidBenefits'
import WhyChooseUs from '../Components/WhyChooseUs'
import Form from '../Components/Contact/Form'
import VidFAQ from '../Components/Video/VidFAQ'

const Video = () => {
  return (
    <Box>
      <VidHero />
      <VidOffers />
      <VidBenefits />
      <WhyChooseUs />
      <Form />
      <VidFAQ />
    </Box>
  )
}

export default Video