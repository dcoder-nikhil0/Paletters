import React, { useState } from "react";
import design from "../../assets/design.webp";
import dev from "../../assets/dev.webp";
import interactive from "../../assets/interactive.webp";
// import host from "../../assets/hosting.webp"
import service from "../../assets/service.webp";
import { Link } from "react-router-dom";

const services = {
  Design: {
    title: "Website Design Service",
    description: `At Paletterse, our web design services cover a wide range, including sleek Website and Interactive Designs, focused Microsites, dynamic E-commerce Designs, detailed Prototypes, wireframes, and User Interface Designs. We also provide expert Website Design Consultation and create engaging Blog Page Designs to enhance your digital footprint. We will create and optimize your landing page so that you generate excellent leads and depict your brand message to your target audience.`,
    features: [
      "Custom Design",
      "Dynamic Prototype",
      "Landing Page Design",
      "Ceros Experience Design",
    ],
    image: design, // Replace with your image path
  },
  Development: {
    title: "Web Development Service",
    description: `Our web development team builds fast, secure, and scalable web applications using the latest technologies. We specialize in frontend and backend development, API integration, and more.`,
    features: [
      "Full-stack Development",
      "API Integration",
      "Scalable Architecture",
    ],
    image: dev, // Replace with your image path
  },
  Interactive: {
    title: "Interactive Solutions",
    description: `We create interactive websites and applications that engage users with dynamic content, animations, and seamless navigation.`,
    features: ["Animations", "User Engagement", "Seamless Navigation"],
    image: interactive, // Replace with your image path
  },
  Support: {
    title: "24/7 Support Service",
    description: `Our support team is available round-the-clock to assist you with technical issues, updates, and maintenance.`,
    features: ["24/7 Availability", "Technical Assistance", "Regular Updates"],
    image: service, // Replace with your image path
  },
};

export default function WebServices() {
  const [activeTab, setActiveTab] = useState("Design");

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Our Best Website Services
      </h1>

      <div className="bg-white rounded-3xl shadow-lg max-w-7xl mx-auto overflow-hidden">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center border-b px-4 sm:px-8 py-4 gap-3">
          {Object.keys(services).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-base sm:text-lg font-medium transition duration-200 ${
                activeTab === tab
                  ? "text-orange-500 border-b-4 border-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
          {/* Text Section */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              {services[activeTab].title}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {services[activeTab].description}
            </p>
            <ul className="mt-4 list-disc list-inside space-y-1">
              {services[activeTab].features.map((feature, index) => (
                <li key={index} className="text-gray-600 text-sm sm:text-base">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <img
              src={services[activeTab].image}
              alt={services[activeTab].title}
              className="w-full h-auto max-h-[400px] object-contain rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <Link
          to="/contact"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Book A Free Consultation →
        </Link>
      </div>
    </div>
  );
}
