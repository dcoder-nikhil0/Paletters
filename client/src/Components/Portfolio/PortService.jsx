import React from "react";

const PortService = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
        <p className="text-lg text-gray-400 mb-10">
          Explore the industries we serve, where we bring our expertise and
          tailored solutions to drive growth and success.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-wrap max-w-5xl justify-center gap-6">
          {[
            { name: "TECHNOLOGY", size: "text-6xl" },
            { name: "LOGISTICS", size: "text-4xl" },
            { name: "RETAIL", size: "text-4xl" },
            { name: "HEALTHCARE", size: "text-5xl" },
            { name: "FINANCE", size: "text-3xl" },
            { name: "ENTERTAINMENT", size: "text-3xl" },
            { name: "MEDIA", size: "text-3xl" },
            { name: "EDUCATION", size: "text-2xl" },
            { name: "BEVERAGE", size: "text-3xl" },
            { name: "HOSPITALITY", size: "text-xl" },
            { name: "ENGINEERING", size: "text-xl" },
            { name: "CONSULTING", size: "text-4xl" },
            { name: "NON-PROFIT", size: "text-2xl" },
            { name: "FOOD", size: "text-xl" },
            { name: "APPAREL", size: "text-sm" },
          ].map((industry, index) => (
            <span
              key={index}
              className={`${industry.size} font-bold hover:text-gray-400 transition duration-300`}
            >
              {industry.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortService;
