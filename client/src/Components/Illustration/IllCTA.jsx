import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const IllCTA = () => {
  return (
    <Box>
      <section className="bg-white">
        <div className="container grid grid-cols-1 gap-8 px-4 py-12 mx-auto lg:grid-cols-2">
          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-800">
              Illustration for Website
            </h2>

            <p className="mt-3 text-gray-500 ">
              Bring Your Ideas to Life with Custom Illustrations — Get Started Today!
            </p>

            <Link
              to="/contact"
              className="my-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 rounded-full shadow-lg transition"
            >
              Start now
            </Link>
          </div>

          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-800">
              Icon Design
            </h2>

            <p className="mt-3 text-gray-500 ">
              Need Unique Icons That Match Your Brand? Let’s Design Them Together!
            </p>

            <Link
              to="/contact"
              className="my-6 py-3 border border-amber-400 hover:bg-yellow-500 hover:text-black text-black font-bold px-6 rounded-full shadow-lg transition"
            >
              Start now
            </Link>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default IllCTA;
