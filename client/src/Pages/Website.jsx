import { Box } from '@mui/material'
import WebCTA from '../Components/Website/WebCTA'
import WebHero from '../Components/Website/WebHero'
import WhyChooseUs from '../Components/WhyChooseUs'
import WebServices from '../Components/Website/WebService'
import WebOffers from '../Components/Website/WebOffers'
import WebBenefits from '../Components/Website/WebBenefits'
import Form from '../Components/Contact/Form'
import WebFAQ from '../Components/Website/WebFAQ'

const Website = () => {
  return (
    <Box>
        <title>
          Website Design & Development Services | Fast & SEO-Ready | Paletterse
        </title>
        <meta
          name="description"
          content="Launch your responsive, fast-loading, SEO-friendly website in days. Paletterse builds websites that engage users & convert visitors into customers." />
        <meta
          name="keywords"
          content="creative design services, digital solutions India, branding, web development, graphic design, Paletterse, graphic design India, branding design, creative design agency, social media graphics, business design services,website design, website development India, SEO website, responsive websites, fast web design, custom illustration, vector illustration India, character design, concept art, illustration agency, video editing India, motion graphics, reels editing, explainer videos, promotional video editing, content creation, digital marketing, SEO services India, social media management, brand marketing, content strategy, growth marketing, about Paletterse, creative agency India, startup design team, founder-led agency, branding experts"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://paletterse.com/" />
      <WebHero />
      <WebOffers />
      <WebServices />
      <WhyChooseUs />
      <WebBenefits />
      <WebCTA />
      <Form />
      <WebFAQ />
    </Box>
  )
}

export default Website