import { Box } from "@mui/material";
import React from "react";
import back from "../../assets/back.webp";
import { Link } from "react-router-dom";

const IllHero = () => {
  return (
    <Box>
      <div className="flex flex-col lg:flex-row">
        {/* Left Text Section */}
        <div className="flex items-center justify-center w-full px-6 py-12 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
              Bold Designs{" "}
              <span className="text-yellow-400">Powerful Impressions</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-500">
              At Paletterse, we create eye-catching and meaningful designs that
              communicate your brand's identity with clarity and impact. From
              logos to full brand kits, our graphic design services blend
              creativity with strategy to leave a lasting impression.
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
