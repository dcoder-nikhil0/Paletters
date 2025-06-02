import { Box } from "@mui/material";
import back from "../../assets/graphic.webp";
import { Link } from "react-router-dom";

const IllHero = () => {
  return (
    <Box>
      <div className="flex flex-col lg:flex-row">
        {/* Left Text Section */}
        <div className="flex items-center justify-center w-full px-6 py-12 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
              Digital Illustration Services
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-500">
              Bring stories and ideas to life with custom illustration designs
              that make your brand stand out. At Paletterse, we craft visuals
              that are expressive, detailed, and tailored to your unique
              message.
            </p>

            <div className="flex justify-center lg:justify-start mt-6">
              <Link
                to="/contact"
                className="inline-flex w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition"
              >
                Get Proposal →
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-auto lg:w-1/2">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${back})`,
            }}
          ></div>
        </div>
      </div>
    </Box>
  );
};

export default IllHero;
