import { Box } from '@mui/material'
import Form from '../Components/Contact/Form'
import PortService from '../Components/Portfolio/PortService'
import PortHero from '../Components/Portfolio/PortHero'
import PortfolioCard from '../Components/Portfolio/PortfolioCard'

const Portfolio = () => {
  return (
    <Box>
        <PortHero />
        <PortfolioCard />
        <PortService />
        <Form />
    </Box>
  )
}

export default Portfolio