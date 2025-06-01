import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <Link to="/">
          <span className="text-xl font-bold text-gray-800">Paletterse</span>
        </Link>
      </div>

      {/* Navigation Links */}
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

      {/* Buttons Section */}
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

        <Link to="/portfolio">
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

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 focus:outline-none text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Design
          </Link>
          <Link
            to="/illustration"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Illustration
          </Link>
          <Link
            to="/website"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Website
          </Link>
          <Link
            to="/video"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Video
          </Link>
          <Link
            to="/content"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Content
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Contact Us
          </Link>
          <Link
            to="/portfolio"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            See Portfolio
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
