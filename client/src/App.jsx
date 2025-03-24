import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import Website from "./Pages/Website";
import Content from "./Pages/Content";
import Illustration from "./Pages/Illustration";
import Video from "./Pages/Video";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/illustration" element={<Illustration />} />
          <Route path="/website" element={<Website />} />
          <Route path="/video" element={<Video />} />
          <Route path="/content" element={<Content />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
