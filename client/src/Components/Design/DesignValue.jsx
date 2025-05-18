import React from "react";
import { Box, Button } from "@mui/material";
import Image from "../../assets/2951345.webp"; // Replace with your actual image path

const DesignValue = () => {
  return (
    <Box className="bg-yellow-400 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Get What You Pay For
          </h2>
          <p className="text-gray-900 text-base md:text-lg mb-6 leading-relaxed">
            We ensure that you receive high-quality, visually compelling designs that leave a lasting impression and contribute to the overall success of your business or brand.{" "}
            <strong>
              Try our dynamic calculator to Determine the Cost Based on Anticipated Quality.
            </strong>
          </p>
          <Button
            variant="contained"
            className="!bg-white !text-black font-semibold px-6 py-2 rounded-full shadow"
          >
            Get Started
          </Button>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-[400px]">
          <img
            src={Image}
            alt="Venn Diagram: Good, Cheap, Fast"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </Box>
  );
};

export default DesignValue;
