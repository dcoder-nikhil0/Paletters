import { Box } from "@mui/material";
import React from "react";
import video from "../../assets/video-files-concept-illustration_114360-4418.webp";
import { Link } from "react-router-dom";

const ContHero = () => {
  return (
    <Box>
      <div class="lg:flex">
        <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div class="max-w-xl">
            <h2 class="text-3xl font-semibold text-gray-800 lg:text-4xl">
            Corporate Video Editing Services
            </h2>

            <p class="mt-4 text-sm text-gray-500 lg:text-base">
              Visual Best is a leading video production agency serving ambitious
              marketers and brands. Our expertise lies in crafting corporate
              videos that resonate with your audience and ignite decisive
              action. With Visual Best, you can forge a robust corporate brand
              identity and convey your message with unparalleled impact.
              Catering to both B2B and B2C enterprises, our corporate video
              production services encompass a spectrum of offerings, ranging
              from animated videos to live-action films, brand documentaries,
              and beyond.
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
          >
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ContHero;
