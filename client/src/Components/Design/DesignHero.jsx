import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import back from "../../assets/back.webp";

const DesignHero = () => {
  return (
    <Box>
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Text Content */}
        <div className="flex items-center justify-center w-full px-6 py-10 lg:py-16 lg:h-screen lg:w-1/2">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 lg:text-5xl leading-tight">
              Bold Designs.{" "}
              <span className="text-yellow-400">Powerful Impressions.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-600">
              At Paletterse, we create eye-catching and meaningful designs that
              communicate your brand's identity with clarity and impact. From
              logos to full brand kits, our graphic design services blend
              creativity with strategy to leave a lasting impression.
            </p>

            <div className="flex flex-col mt-6 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-md transition-all duration-200
                  text-base px-6 py-3"
              >
                Get Proposal →
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-64 sm:h-96 lg:h-screen lg:w-1/2">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${back})` }}
          ></div>
        </div>
      </div>
    </Box>
  );
};

export default DesignHero;
