import { Box } from "@mui/material";
import React from "react";
import back from "../../assets/digital-art-style-illustration-graphic-designer.jpg";
import { Link } from "react-router-dom";

const IllHero = () => {
  return (
    <Box>
      <div class="lg:flex">
        <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div class="max-w-xl">
            <h2 class="text-3xl font-semibold text-gray-800 lg:text-4xl">
            Digital Illustration Services
            </h2>

            <p class="mt-4 text-sm text-gray-500 lg:text-base">
              Our expertise lies in transforming concepts into engaging digital
              illustrations that connect with your target audience. Our skilled
              team of digital illustrators thrives on creating one-of-a-kind,
              entirely original artwork, guaranteeing that each piece stands as
              a work of art. We’re well-equipped to cater to your needs for
              branding, marketing endeavours, publications, or personal
              endeavours.
            </p>

            <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <Link
                to="/contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition"
              >
                Get Proposal →
              </Link>
            </div>
          </div>
        </div>

        <div class="w-full h-64 lg:w-1/2 lg:h-auto">
          <div
            class="w-full h-full bg-cover"
            style={{
              backgroundImage: "url(" + back + ")",
            }}
          >
            {/* <div class="w-full h-full bg-black opacity-25"></div> */}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default IllHero;
