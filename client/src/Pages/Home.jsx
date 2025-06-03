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
      <article>
        <title>
          Creative Design & Digital Solutions in India | Paletterse
        </title>
        <meta
          name="description"
          content="Paletterse offers professional graphic design, web development, video editing & marketing services in India. Build your brand with stunning visuals & strategy."
        />
        <meta
          name="keywords"
          content="creative design services, digital solutions India, branding, web development, graphic design, Paletterse, graphic design India, branding design, creative design agency, social media graphics, business design services,website design, website development India, SEO website, responsive websites, fast web design, custom illustration, vector illustration India, character design, concept art, illustration agency, video editing India, motion graphics, reels editing, explainer videos, promotional video editing, content creation, digital marketing, SEO services India, social media management, brand marketing, content strategy, growth marketing, about Paletterse, creative agency India, startup design team, founder-led agency, branding experts,design jobs India, web development careers, creative agency hiring, Paletterse careers, digital marketing jobs, startup job openings, UI/UX jobs"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://paletterse.com/" />
      </article>
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