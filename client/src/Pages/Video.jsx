import { Box } from '@mui/material'
import VidHero from '../Components/Video/VidHero'
import VidOffers from '../Components/Video/VidOffers'
import VidBenefits from '../Components/Video/VidBenefits'
import VidService from '../Components/Video/VidService'
import WhyChooseUs from '../Components/WhyChooseUs'
import Form from '../Components/Contact/Form'
import VidFAQ from '../Components/Video/VidFAQ'

const Video = () => {
  return (
    <Box>
      <VidHero />
      <VidOffers />
      <VidBenefits />
      {/* <VidService /> */}
      <WhyChooseUs />
      <Form />
      <VidFAQ />
    </Box>
  )
}

export default Video