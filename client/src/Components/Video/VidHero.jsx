import { Box } from "@mui/material";
import video from "../../assets/Paletterse post designs_20250524_034232_0000.webp";
import { Link } from "react-router-dom";

const ContHero = () => {
  return (
    <Box>
      <div className="flex flex-col lg:flex-row">
        {/* Left Text Section */}
        <div className="flex items-center justify-center w-full px-6 py-12 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
              Professional Video Services That Capture Attention
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-500">
              From explainer videos to promotional edits, we create high-quality
              visual content that tells your story, engages your audience, and
              strengthens your brand presence across digital platforms.
            </p>

            <div className="flex justify-center lg:justify-start mt-6">
              <Link
                to="/contact"
                className="inline-flex w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition"
              >
                Get Proposal →
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full h-120 sm:h-80 md:h-96 lg:h-180 lg:w-1/2">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${video})`,
            }}
          ></div>
        </div>
      </div>
    </Box>
  );
};

export default ContHero;
