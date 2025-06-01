import { Box } from "@mui/material";
import React from "react";
import video from "../../assets/Paletterse post designs_20250524_034232_0000.jpg";
import { Link } from "react-router-dom";

const ContHero = () => {
  return (
    <Box>
      <div class="lg:flex">
        <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div class="max-w-xl">
            <h2 class="text-3xl font-semibold text-gray-800 lg:text-4xl">
              Professional Video Services That Capture Attention
            </h2>

            <p class="mt-4 text-sm text-gray-500 lg:text-base">
              PFrom explainer videos to promotional edits, we create
              high-quality visual content that tells your story, engages your
              audience, and strengthens your brand presence across digital
              platforms.
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
              backgroundImage: "url(" + video + ")",
            }}
          ></div>
        </div>
      </div>
    </Box>
  );
};

export default ContHero;
