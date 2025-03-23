import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Button } from "@mui/material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold text-gray-800">VisualBest</span>
        <span className="bg-yellow-400 text-black text-xs font-medium px-2 py-1 rounded-full ml-2">
          We're hiring!
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-gray-800">
        <div className="group relative">
          <button className="flex items-center hover:text-yellow-500">
            Design <FaAngleDown className="ml-1" />
          </button>
          <div className="hidden group-hover:block absolute bg-white shadow-lg p-2 mt-2">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Logo Design
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Branding
            </a>
          </div>
        </div>
        <a href="#" className="hover:text-yellow-500">
          Illustration
        </a>
        <a href="#" className="hover:text-yellow-500">
          Website
        </a>

        <div className="group relative">
          <button className="flex items-center hover:text-yellow-500">
            Video <FaAngleDown className="ml-1" />
          </button>
          <div className="hidden group-hover:block absolute bg-white shadow-lg p-2 mt-2">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Motion Graphics
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Animation
            </a>
          </div>
        </div>

        <a href="#" className="hover:text-yellow-500">
          Content
        </a>
        <a href="#" className="hover:text-yellow-500">
          Marketing
        </a>

        <div className="group relative">
          <button className="flex items-center hover:text-yellow-500">
            Resources <FaAngleDown className="ml-1" />
          </button>
          <div className="hidden group-hover:block absolute bg-white shadow-lg p-2 mt-2">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Blog
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Case Studies
            </a>
          </div>
        </div>

        <div className="group relative">
          <button className="flex items-center hover:text-yellow-500">
            About Us <FaAngleDown className="ml-1" />
          </button>
          <div className="hidden group-hover:block absolute bg-white shadow-lg p-2 mt-2">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Our Team
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Careers
            </a>
          </div>
        </div>
      </div>

      {/* Contact Us Button */}
      <div className="hidden md:block">
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
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <a href="#" className="block px-4 py-2 text-gray-800">
            Design
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800">
            Illustration
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800">
            Website
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800">
            Video
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800">
            Content
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800">
            Marketing
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800">
            Resources
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800">
            About Us
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
