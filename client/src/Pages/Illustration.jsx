import { Box } from '@mui/material'
import React from 'react'
import IllHero from '../Components/Illustration/IllHero'
import IllOffers from '../Components/Illustration/IllOffers'
import IllBenefits from '../Components/Illustration/IllBenefits'
import IllCTA from '../Components/Illustration/IllCTA'
import Form from "../Components/Contact/Form"
import WhyChooseUs from './../Components/WhyChooseUs';
import IllFAQ from '../Components/Illustration/IllFAQ'

const Illustration = () => {
  return (
    <Box>
      <article>
        <title>
          Custom Illustration Design Services | Paletterse
        </title>
        <meta
          name="description"
          content="Bring your ideas to life with our custom illustration services. We craft professional characters, concepts & vector art tailored for your brand or story." />
        <meta
          name="keywords"
          content="creative design services, digital solutions India, branding, web development, graphic design, Paletterse, graphic design India, branding design, creative design agency, social media graphics, business design services,website design, website development India, SEO website, responsive websites, fast web design, custom illustration, vector illustration India, character design, concept art, illustration agency, video editing India, motion graphics, reels editing, explainer videos, promotional video editing, content creation, digital marketing, SEO services India, social media management, brand marketing, content strategy, growth marketing, about Paletterse, creative agency India, startup design team, founder-led agency, branding experts"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://paletterse.com/" />
      </article>
      <IllHero />
      <IllOffers />
      <IllBenefits />
      <WhyChooseUs />
      <IllCTA/>
      <Form />
      <IllFAQ />
    </Box>
  )
}

export default Illustration