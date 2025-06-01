import { useState } from "react";
import agency from "../../assets/office-workers-working-team-discussing-work-issues-illustration_1020754-1851.webp";
import sme from "../../assets/market-launch-concept-illustration_114360-2979.webp";
import marketing from "../../assets/marketing-consulting-concept-illustration_114360-9149.webp";
import startup from "../../assets/start-up-idea-concept_72460-203.webp";
import { Link } from "react-router-dom";

const services = {
  Agencies: {
    title:
      "Maximize your agency's productivity without increasing your overhead expenses.",
    description: `No more feeling overwhelmed or overworked! Let our experienced graphic designers handle your own or your clients' requests, freeing up your time to concentrate on what truly matters.`,
    features: [
      "Save time and money on creative production",
      "Scale up and down your production as needed",
      "Meet even the most challenging client deadlines",
    ],
    image: agency,
  },
  "Enterprise & SME": {
    title: "Affordable graphic design services that drive business growth.",
    description: `Achieve exceptional design results without breaking the bank or compromising your business. Outshine your competitors while maximizing your savings.`,
    features: [
      "Scale your business",
      "Cut hiring costs up to 70%",
      "Limit risk with no contracts",
    ],
    image: sme,
  },
  "Marketing Team": {
    title: "Set the stage for rapid growth with your marketing team.",
    description: `Achieve your marketing goals effortlessly, free from the burden of graphics! Share your ideas and concepts, and leave the creation of top-notch marketing materials to us.`,
    features: [
      "Say goodbye to creative bottlenecks",
      "Get your creative to market 3x faster",
      "Supplement your existing graphic design process",
    ],
    image: marketing,
  },
  Startups: {
    title: "Accelerate your startup’s growth with design support that scales.",
    description: `Focus on building your business—we’ll handle the visuals. Just share your ideas, and we’ll transform them into high-quality marketing assets, fast.`,
    features: [
      "Eliminate creative slowdowns",
      "Launch campaigns 3x faster",
      "Extend your team without the overhead",
    ],
    image: startup,
  },
};

export default function HomeSuit() {
  const [activeTab, setActiveTab] = useState("Agencies");

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Who We Are Suitable For?
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
