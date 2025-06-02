import { Box } from "@mui/material";
import logo from "../../assets/logo.webp";
import { FaInstagramSquare, FaFacebookSquare, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <Box>
      <footer className="bg-[#202a30]">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <a href="/">
                  <img className="w-auto h-7" src={logo} alt="Paletterse" />
                  <p className="text-white font-semibold">Paletterse</p>
                </a>

                <p className="max-w-sm mt-2 text-white text-sm">
                  Paletterse is a creative agency dedicated to delivering
                  stunning design, impactful digital solutions, and smart brand
                  strategies tailored for your business growth. With a team of
                  expert designers, developers, and marketers, we transform
                  ideas into visually powerful and results-driven experiences.
                  Whether you need branding, websites, or marketing content,
                  Paletterse brings creativity and professionalism to every
                  project.
                </p>

                <div className="flex mt-6 -mx-2">
                  <a
                    href="https://www.instagram.com/paletterse/"
                    className="mx-2 text-white transition-colors duration-300  hover:text-blue-500"
                    aria-label="Instagram"
                    target="_blank"
                  >
                    < FaInstagramSquare />
                  </a>

                  <a
                    href="https://www.facebook.com/share/19P6ZkoeZF/"
                    className="mx-2 text-white transition-colors duration-300  hover:text-blue-500"
                    aria-label="Facebook"
                    target="_blank"
                  >
                    <FaFacebookSquare />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/paletterse/"
                    className="mx-2 text-white transition-colors duration-300  hover:text-blue-500"
                    aria-label="LinkedIn"
                    target="_blank"
                  >
                    < FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                <div>
                  <h3 className="uppercase text-white">| Company</h3>
                  <a href="/about" className="block mt-2 text-sm text-gray-300">
                    About
                  </a>
                  <a
                    href="/career"
                    className="block mt-2 text-sm text-gray-300"
                  >
                    Careers
                  </a>
                  <a href="/tnc" className="block mt-2 text-sm text-gray-300">
                    Terms & Condition
                  </a>
                  <a
                    href="/privacy"
                    className="block mt-2 text-sm text-gray-300"
                  >
                    Privacy Policies
                  </a>
                </div>

                <div>
                  <h3 className="uppercase text-white">| Services</h3>
                  <a
                    href="/design"
                    className="block mt-2 text-sm text-gray-300"
                  >
                    Graphic Designing
                  </a>
                  <a
                    href="/illustration"
                    className="block mt-2 text-sm text-gray-300"
                  >
                    Illustration
                  </a>
                  <a
                    href="/website"
                    className="block mt-2 text-sm text-gray-300"
                  >
                    Website Development
                  </a>
                  <a href="/video" className="block mt-2 text-sm text-gray-300">
                    Video Production
                  </a>
                  <a
                    href="/marketing"
                    className="block mt-2 text-sm text-gray-300"
                  >
                    Marketing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-lg font-semibold text-white">
                Contact for Sales & Support
              </h2>
              <div className="mt-1 space-x-4 text-white">
                <a href="https://wa.me/7209543317" className="block md:inline">
                  +91 72095 43317
                </a>
                <a
                  href="mailto:paletterse@gmail.com"
                  className="block md:inline"
                >
                  paletterse@gmail.com
                </a>
              </div>
            </div>
            <div className="text-center md:text-right text-sm text-gray-300">
              ©2024 - 2025 Paletterse. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </Box>
  );
};

export default Footer;
