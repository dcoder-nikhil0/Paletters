import React from "react";
import { Button, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const HomeHero = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center px-6">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            <span className="text-yellow-500 italic">Customer Centric</span> <br />
            Global Graphic <br /> Design Agency
          </h1>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            We are your one-stop solution for your complete digital marketing and
            graphic design requirements. Uplift your brand's perception through
            our unmatched creative solutions.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <TextField
              variant="outlined"
              placeholder="What do you need?"
              InputProps={{
                startAdornment: <Search className="text-gray-500" />,
                style: { backgroundColor: "#f3f4f6", borderRadius: "8px" }
              }}
              className="w-full md:w-96"
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#facc15",
                color: "black",
                "&:hover": { bgcolor: "#fbbf24" }
              }}
            >
              Request Proposal
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center relative mt-12 lg:mt-0">
          <img
            src="/images/design-showcase.png"
            alt="Design Showcase"
            className="w-full max-w-md rounded-lg shadow-lg transform transition hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 bg-black text-white px-4 py-2 rounded-lg shadow-md flex items-center">
            <div>
              <p className="font-bold text-sm">EBOOK DESIGN</p>
              <p className="text-xs">Created for Bottomline</p>
            </div>
            <span className="ml-2 text-yellow-500">↗️</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero