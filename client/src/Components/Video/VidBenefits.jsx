import React from "react";
import { FaHeart, FaFileVideo , FaStar, FaChartBar } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";

const WebBenefits = () => {
  const benefits = [
    {
      icon: <FaHeart className="text-yellow-400 text-4xl" />,
      title: "Social Connection",
      description:
        "Good web design and development create a user-friendly and engaging online experience. This increases user satisfaction and encourages longer visit durations, which can lead to higher conversion rates and improved customer retention.",
    },
    {
      icon: <FaFileVideo  className="text-yellow-400 text-4xl" />,
      title: "Event Documentation",
      description:
        "Professionally designed and well-developed websites are optimized for search engines. A clean, responsive design, coupled with efficient coding, improves search engine rankings, making your site more visible and accessible to potential customers.",
    },
    {
      icon: <GiBookCover className="text-yellow-400 text-4xl" />,
      title: "Educational Values",
      description:
        "A well-designed website reflects your brand's identity and professionalism. Consistent branding, including colors, fonts, and layout, strengthens your brand's image and helps in building trust and credibility with your audience.",
    },
    {
      icon: <FaChartBar className="text-yellow-400 text-4xl" />,
      title: "Global Reach",
      description:
        "In an era where online presence is crucial, having a website that is both aesthetically appealing and functionally superior gives you a significant edge in the market, attracting more customers and driving business growth.",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold">
        Benefits of Web Design and Development
      </h2>
      <p className="text-lg text-gray-600 mt-4">
        In addition to enhancing the user experience, a good website serves
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

export default WebBenefits;
