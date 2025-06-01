import { Box } from "@mui/material";
import {Link} from "react-router-dom";
import marketing from "../../assets/marketing.jpg";

const ContHero = () => {
  return (
    <Box>
      <div class="lg:flex">
        <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div class="max-w-xl">
            <h2 class="text-3xl font-semibold text-gray-800 lg:text-4xl">
              Drive Results with 
              <span class="text-yellow-400 "> Powerful Marketing Solutions</span>
            </h2>

            <p class="mt-4 text-sm text-gray-500 lg:text-base">
              At Paletterse, we offer result-oriented marketing services
              including Social Media Management, SEO, PPC, and Content Writing
              to boost your brand’s reach and performance. Our strategies are
              tailored to attract, engage, and convert your target audience
              effectively.
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
              backgroundImage: "url(" + marketing + ")",
            }}
          >
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ContHero;
