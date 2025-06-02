import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const ContCTA = () => {
  return (
    <Box>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 px-4 py-10">
        {/* Section 1: Illustration */}
        <div className="flex flex-col justify-center items-center text-center px-4 sm:px-6">
          <div className="max-w-md w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
              SEO Services
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-500">
              Boost your visibility and rank higher on Google — Start your SEO
              journey today!
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-block py-3 px-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full shadow-lg transition"
            >
              Start now
            </Link>
          </div>
        </div>

        {/* Section 2: Icon Design */}
        <div className="flex flex-col justify-center items-center text-center px-4 sm:px-6">
          <div className="max-w-md w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
              Content Writing
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-500">
              Tell your brand story with powerful words — Let’s craft content
              that converts!
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-block py-3 px-6 border border-yellow-400 hover:bg-yellow-500 hover:text-black text-black font-bold rounded-full shadow-lg transition"
            >
              Start now
            </Link>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ContCTA;
