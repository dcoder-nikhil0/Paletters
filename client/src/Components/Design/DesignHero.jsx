import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import back from "../../assets/back.webp";

const DesignHero = () => {
  return (
    <Box>
      <div class="lg:flex">
        <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div class="max-w-xl">
            <h2 class="text-3xl font-semibold text-gray-800 lg:text-4xl">
              Bold Designs.{" "}
              <span class="text-yellow-400 ">Powerful Impressions.</span>
            </h2>

            <p class="mt-4 text-sm text-gray-500 lg:text-base">
              At Paletterse, we create eye-catching and meaningful designs that
              communicate your brand's identity with clarity and impact. From
              logos to full brand kits, our graphic design services blend
              creativity with strategy to leave a lasting impression.
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
          </div>
        </div>
      </div>
    </Box>
  );
};

export default DesignHero;
