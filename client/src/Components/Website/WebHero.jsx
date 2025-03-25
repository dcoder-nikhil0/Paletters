import { Box } from "@mui/material";
import React from "react";
import back from "../../assets/rear-view-programmer-working-all-night-long.jpg";
import { Link } from "react-router-dom";

const WebHero = () => {
  return (
    <Box>
      <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
              Website Design & Development Services
            </h2>

            <p className="mt-4 text-sm text-gray-500 lg:text-base">
              We offer professional web development services at affordable rates
              to help your business attract more visitors and keep them on your
              site! Visual Best is a leading website development company in
              India offering user-friendly web designs and development that help
              you turn site visitors into customers. Our expert website
              developers help you create e-commerce, WordPress, custom, and
              theme-based websites for all purposes.
            </p>

            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <Link
                to = "/contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition"
              >
                Get Proposal →
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(" + back + ")",
            }}
          >
            {/* <div className="w-full h-full bg-black opacity-25"></div> */}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default WebHero;
