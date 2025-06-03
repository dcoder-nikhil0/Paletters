import { Box } from '@mui/material'
import AboutHero from '../Components/About/AboutHero'
import AboutValue from '../Components/About/AboutValue'
import AboutMission from '../Components/About/AboutMission'
import Form from '../Components/Contact/Form'
import AboutFounders from '../Components/About/AboutFounders'

const About = () => {
  return (
    <Box>
      <title>
          About Paletterse – Creative Agency Built by Passionate Founders
        </title>
        <meta
          name="description"
          content="Learn how Paletterse began with a mission to empower businesses through creativity, tech & strategy. Meet the founders behind our growing success." />
        <meta
          name="keywords"
          content="creative design services, digital solutions India, branding, web development, graphic design, Paletterse, graphic design India, branding design, creative design agency, social media graphics, business design services,website design, website development India, SEO website, responsive websites, fast web design, custom illustration, vector illustration India, character design, concept art, illustration agency, video editing India, motion graphics, reels editing, explainer videos, promotional video editing, content creation, digital marketing, SEO services India, social media management, brand marketing, content strategy, growth marketing, about Paletterse, creative agency India, startup design team, founder-led agency, branding experts"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://paletterse.com/" />
      <AboutHero />
      <AboutValue />
      <AboutMission />
      <AboutFounders />
      <Form />
    </Box>
  )
}

export default About