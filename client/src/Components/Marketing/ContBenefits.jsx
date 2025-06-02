import React from "react";
import { FaHeart, FaChartLine, FaStar, FaChartBar } from "react-icons/fa";

const ContBenefits = () => {
  const benefits = [
    {
      icon: <FaHeart className="text-yellow-400 text-4xl" />,
      title: "Increased Brand Awareness",
      description:
        "Marketing helps your business get noticed by the right audience across multiple platforms, building recognition and trust over time.",
    },
    {
      icon: <FaChartLine className="text-yellow-400 text-4xl" />,
      title: "Higher Lead Generation",
      description:
        "With targeted strategies like SEO, PPC, and social media campaigns, marketing attracts potential customers who are actively looking for your products or services.",
    },
    {
      icon: <FaStar className="text-yellow-400 text-4xl" />,
      title: "Better Customer Engagement",
      description:
        "Consistent and creative content keeps your audience engaged, turning casual visitors into loyal customers through meaningful interactions.",
    },
    {
      icon: <FaChartBar className="text-yellow-400 text-4xl" />,
      title: "Measurable Business Growth",
      description:
        "Marketing delivers trackable results—allowing you to analyze what works, optimize campaigns, and achieve scalable growth.",
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

export default ContBenefits;
