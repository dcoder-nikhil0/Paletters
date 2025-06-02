import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import marketing from "../../assets/marketing.jpg";

const ContHero = () => {
  return (
    <Box>
      <div className="flex flex-col lg:flex-row">
        {/* Left Text Section */}
        <div className="flex items-center justify-center w-full px-6 py-12 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
              Drive Results with Powerful Marketing Solutions
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-500">
              At Paletterse, we offer result-oriented marketing services
              including Social Media Management, SEO, PPC, and Content Writing
              to boost your brand’s reach and performance. Our strategies are
              tailored to attract, engage, and convert your target audience
              effectively.
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
        <div className="w-full h-115 sm:h-80 md:h-96 lg:h-180 lg:w-1/2">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${marketing})`,
            }}
          ></div>
        </div>
      </div>
    </Box>
  );
};

export default ContHero;
