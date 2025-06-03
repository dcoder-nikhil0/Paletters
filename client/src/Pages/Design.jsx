import { Box } from '@mui/material'
import DesignHero from '../Components/Design/DesignHero'
import DesignOffers from '../Components/Design/DesignOffers'
import WhyChooseUs from './../Components/WhyChooseUs';
import Form from '../Components/Contact/Form';
import DesignComparison from '../Components/Design/DesignComparison';

const Design = () => {
  return (
    <Box>
      <article>
        <title>
          Professional Graphic Design Services in India | Paletterse
        </title>
        <meta
          name="description"
          content="Get unique, eye-catching graphic designs for your brand, business, or social media. Paletterse delivers fast, high-quality results with a creative edge." />
        <meta
          name="keywords"
          content="creative design services, digital solutions India, branding, web development, graphic design, Paletterse, graphic design India, branding design, creative design agency, social media graphics, business design services,website design, website development India, SEO website, responsive websites, fast web design, custom illustration, vector illustration India, character design, concept art, illustration agency, video editing India, motion graphics, reels editing, explainer videos, promotional video editing, content creation, digital marketing, SEO services India, social media management, brand marketing, content strategy, growth marketing, about Paletterse, creative agency India, startup design team, founder-led agency, branding experts"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://paletterse.com/" />
      </article>
      <DesignHero />
      <DesignOffers />
      <DesignComparison />
      <WhyChooseUs />
      <Form />
    </Box>
  )
}

export default Design