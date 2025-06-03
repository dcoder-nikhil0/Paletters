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
      <title>
          Video Editing & Motion Graphics Services | Paletterse
        </title>
        <meta
          name="description"
          content="Boost your brand with high-quality video editing, reels, explainer videos & animations. Paletterse offers stunning visuals for marketing & storytelling." />
        <meta
          name="keywords"
          content="creative design services, digital solutions India, branding, web development, graphic design, Paletterse, graphic design India, branding design, creative design agency, social media graphics, business design services,website design, website development India, SEO website, responsive websites, fast web design, custom illustration, vector illustration India, character design, concept art, illustration agency, video editing India, motion graphics, reels editing, explainer videos, promotional video editing, content creation, digital marketing, SEO services India, social media management, brand marketing, content strategy, growth marketing, about Paletterse, creative agency India, startup design team, founder-led agency, branding experts"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://paletterse.com/" />
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