import React from "react";
import { FaHandshake , FaEye , FaHandHoldingHeart } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";

const IllBenefits = () => {
  const benefits = [
    {
      icon: <FaHandshake  className="text-yellow-400 text-4xl" />,
      title: "Brand Recognition and Trust",
      description:
        "In the digital market, being visible is crucial, and high brand awareness is the first step to gaining users and their trust.",
    },
    {
      icon: <FaEye  className="text-yellow-400 text-4xl" />,
      title: "Friendly & More Human Experience",
      description:
        "In the digital market, being visible is crucial, and high brand awareness is the first step to gaining users and their trust.",
    },
    {
      icon: <FaHandHoldingHeart  className="text-yellow-400 text-4xl" />,
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
      <h2 className="text-4xl font-bold">Benefits of Illustration</h2>
      <p className="text-lg text-gray-600 mt-4">
        In addition to enhancing the user experience, a good illustration serves
        multiple purposes:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-16 gap-8 mt-12 max-w-8xl mx-auto">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="py-16 p-2 border rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IllBenefits;
