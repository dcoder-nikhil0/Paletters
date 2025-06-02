import React from "react";
import { FaHeart, FaFileVideo, FaStar, FaChartBar } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";

const WebBenefits = () => {
  const benefits = [
    {
      icon: <FaHeart className="text-yellow-400 text-4xl" />,
      title: "Enhanced Brand Storytelling",
      description:
        "Professional video scripting ensures your message is clear, engaging, and aligned with your brand voice. Editing refines the content, keeping viewers focused and interested. Together, they build stronger emotional connections with your audience.",
    },
    {
      icon: <FaFileVideo className="text-yellow-400 text-4xl" />,
      title: "Boosted Engagement and Reach",
      description:
        "Well-edited videos with compelling scripts capture attention quickly and retain viewer interest. This leads to higher shares, comments, and watch times across platforms. Increased engagement helps expand your brand’s reach organically.",
    },
    {
      icon: <GiBookCover className="text-yellow-400 text-4xl" />,
      title: "Improved Conversion Rate",
      description:
        "Videos with structured scripts and polished editing guide viewers toward calls-to-action effectively. They help explain products or services with clarity and confidence. This builds trust and drives higher conversion rates.",
    },
    {
      icon: <FaChartBar className="text-yellow-400 text-4xl" />,
      title: "Professionalism & Brand Consistency",
      description:
        "Scripted and edited videos ensure every piece of content looks and sounds professional. This consistency reinforces your brand identity across all channels. It also sets you apart from competitors using low-quality content.",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold">
        Benefits of Illustration
      </h2>
      <p className="text-base sm:text-lg text-gray-600 mt-4 px-4 sm:px-0">
        In addition to enhancing the user experience, a good illustration serves
        multiple purposes:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-8 lg:px-16 mt-12 max-w-7xl mx-auto">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="py-10 px-6 border rounded-lg shadow-md hover:shadow-lg transition text-center bg-white"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebBenefits;
