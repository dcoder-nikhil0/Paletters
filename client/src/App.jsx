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
import Illustration from "./Pages/Illustration";
import Video from "./Pages/Video";
import Portfolio from "./Pages/Portfolio";
import Design from "./Pages/Design";
import Marketing from "./Pages/Marketing";
import Career from "./Pages/Career";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import ScrollToTop from "./Components/ScrollToTop";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Box>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/illustration" element={<Illustration />} />
          <Route path="/website" element={<Website />} />
          <Route path="/video" element={<Video />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/design" element={<Design />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" exact element={<Career />} />
          <Route path="/tnc" exact element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
