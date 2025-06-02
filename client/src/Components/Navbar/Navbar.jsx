import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle link clicks in mobile menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Link to="/">
          <span className="text-xl font-bold text-gray-800">Paletterse</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-gray-800">
        <Link to="/design" className="hover:text-yellow-500">
          Design
        </Link>
        <Link to="/illustration" className="hover:text-yellow-500">
          Illustration
        </Link>
        <Link to="/website" className="hover:text-yellow-500">
          Website
        </Link>
        <Link to="/video" className="hover:text-yellow-500">
          Video
        </Link>
        <Link to="/marketing" className="hover:text-yellow-500">
          Marketing
        </Link>
        <Link to="/about" className="hover:text-yellow-500">
          About Us
        </Link>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <Link to="/contact">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FCD34D",
              color: "#000",
              "&:hover": { backgroundColor: "#FBBF24" },
            }}
          >
            Contact Us
          </Button>
        </Link>

        <Link to="https://portfolio.paletterse.com/">
          <Button
            variant="outlined"
            sx={{
              color: "#000",
              borderColor: "#FCD34D",
              "&:hover": { borderColor: "#FBBF24", color: "#FBBF24" },
            }}
          >
            See Portfolio
          </Button>
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 focus:outline-none text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out">
          {[
            { to: "/design", label: "Design" },
            { to: "/illustration", label: "Illustration" },
            { to: "/website", label: "Website" },
            { to: "/video", label: "Video" },
            { to: "/marketing", label: "Marketing" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact Us" },
            { to: "https://portfolio.paletterse.com/", label: "See Portfolio" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={handleLinkClick}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
