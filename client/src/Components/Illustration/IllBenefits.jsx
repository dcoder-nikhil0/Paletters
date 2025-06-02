import React from "react";
import { FaHandshake, FaEye, FaHandHoldingHeart } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";

const IllBenefits = () => {
  const benefits = [
    {
      icon: <FaHandshake className="text-yellow-400 text-4xl" />,
      title: "Brand Recognition and Trust",
      description:
        "In the digital market, being visible is crucial, and high brand awareness is the first step to gaining users and their trust.",
    },
    {
      icon: <FaEye className="text-yellow-400 text-4xl" />,
      title: "Friendly & More Human Experience",
      description:
        "In the digital market, being visible is crucial, and high brand awareness is the first step to gaining users and their trust.",
    },
    {
      icon: <FaHandHoldingHeart className="text-yellow-400 text-4xl" />,
      title: "Guiding & Focusing Attention",
      description:
        "Illustrations emphasize features and guide users through visual stories, making information accessible and quick to understand without extensive reading.",
    },
    {
      icon: <TiMessageTyping className="text-yellow-400 text-4xl" />,
      title: "Explaining Complex Process",
      description:
        "Illustrations simplify explanations for products with intricate technology, ensuring users can comprehend complex processes without unnecessary complications.",
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

export default IllBenefits;
