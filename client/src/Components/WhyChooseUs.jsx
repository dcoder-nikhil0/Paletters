import { FaStar, FaGlobe, FaRegCommentDots } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#2a2a2a] text-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-gray-400 mb-12 px-2 sm:px-0 max-w-3xl mx-auto">
          Paletterse is your go-to source for outstanding custom web services.
          Our dedicated team is committed to helping clients effectively
          showcase and enhance their products or services online. By combining
          creativity with strategic insight, we enable businesses to distinguish
          themselves and captivate their target audience, ensuring a powerful
          and engaging digital presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Expertise and Innovation */}
          <div className="flex flex-col items-center px-4">
            <FaStar className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Expertise and Innovation</h3>
            <p className="text-gray-400 mt-4 text-center">
              We continuously innovate to stay ahead of the latest trends and
              technologies. We develop functional, user-friendly, and
              cutting-edge website designs.
            </p>
          </div>

          {/* Customized Solutions */}
          <div className="flex flex-col items-center px-4">
            <MdWeb className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Customized Solutions</h3>
            <p className="text-gray-400 mt-4 text-center">
              We understand your needs and preferences and ensure the end
              product aligns perfectly with your brand identity and business
              goals.
            </p>
          </div>

          {/* Super Responsive */}
          <div className="flex flex-col items-center px-4">
            <FaRegCommentDots className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Super Responsive</h3>
            <p className="text-gray-400 mt-4 text-center">
              Paletterse aligns with highly responsive project managers
              dedicated to fostering prompt and transparent communication with
              our clients.
            </p>
          </div>

          {/* No Timezone Challenge */}
          <div className="flex flex-col items-center px-4">
            <FaGlobe className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">No Timezone Challenge</h3>
            <p className="text-gray-400 mt-4 text-center">
              We involve efficient communication, flexible scheduling, and the
              use of technology to bridge the gap and ensure smooth
              collaboration regardless of timezone disparities.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            to="/contact"
            className="inline-block rounded-full px-8 py-3 font-bold text-black bg-amber-400 hover:bg-amber-500 transition-colors duration-300"
          >
            Hire Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
