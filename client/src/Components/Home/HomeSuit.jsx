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
  const [activeTab, setActiveTab] = useState("Agencies"); // ✅ set to valid key

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12">
        Who We Are Suitable For ?
      </h1>

      <div className="bg-white rounded-3xl shadow-lg max-w-6xl mx-auto overflow-hidden">
        <div className="flex justify-center border-b-2 pb-4 flex-wrap">
          {Object.keys(services).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-lg font-medium transition ${
                activeTab === tab
                  ? "text-orange-500 border-b-4 border-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-semibold">
              {services[activeTab].title}
            </h2>
            <p className="mt-4 text-gray-700">
              {services[activeTab].description}
            </p>
            <ul className="mt-4 list-disc list-inside">
              {services[activeTab].features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={services[activeTab].image}
              alt={services[activeTab].title}
              className="w-auto h-auto object-cover rounded-2xl shadow-md hover:scale-105 transition transform duration-300"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <Link
          to="/contact"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition"
        >
          Book A Free Consultation→
        </Link>
      </div>
    </div>
  );
}
