import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ContCTA = () => {
  return (
    <Box>
      <section className="bg-white dark:bg-gray-900">
        <div className="container grid grid-cols-1 gap-8 px-4 py-12 mx-auto lg:grid-cols-2">
          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
              SEO Services
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex
              cupiditate corrupti aliquam eum vel consequuntur hic culpa unde
              natus officia enim est impedit consequatur aut, voluptatem minima
              repellat non!
            </p>

            <Link
              to="/contact"
              className="my-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 rounded-full shadow-lg transition"
            >
              Start now
            </Link>
          </div>

          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
              Content Writing
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex
              cupiditate corrupti aliquam eum vel consequuntur hic culpa unde
              natus officia enim est impedit consequatur aut, voluptatem minima
              repellat non!
            </p>

            <a
              href="#"
              className="my-6 py-3 border border-amber-400 hover:bg-yellow-500 hover:text-white text-amber-400 font-bold px-6 rounded-full shadow-lg transition"
            >
              Start now
            </a>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default ContCTA;
