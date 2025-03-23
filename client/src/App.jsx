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

function App() {
  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/website" element={<Website />} />
          <Route path="/content" element={<Content />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
