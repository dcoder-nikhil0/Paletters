import { Box } from '@mui/material'
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
        <title>
          Digital Marketing & SEO Services for Brands | Paletterse
        </title>
        <meta
          name="description"
          content="Grow your business with result-driven SEO, content marketing, social media management & branding. Paletterse delivers smart digital marketing strategies." />
        <meta
          name="keywords"
          content="creative design services, digital solutions India, branding, web development, graphic design, Paletterse, graphic design India, branding design, creative design agency, social media graphics, business design services,website design, website development India, SEO website, responsive websites, fast web design, custom illustration, vector illustration India, character design, concept art, illustration agency, video editing India, motion graphics, reels editing, explainer videos, promotional video editing, content creation, digital marketing, SEO services India, social media management, brand marketing, content strategy, growth marketing, about Paletterse, creative agency India, startup design team, founder-led agency, branding experts"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://paletterse.com/" />
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