import { useState } from "react";
import agency from "../../assets/office-workers-working-team-discussing-work-issues-illustration_1020754-1851.webp";
import sme from "../../assets/market-launch-concept-illustration_114360-2979.webp";
import marketing from "../../assets/marketing-consulting-concept-illustration_114360-9149.webp";
import content from "../../assets/content.webp";
import { Link } from "react-router-dom";

// ✅ Fixed data keys and descriptions
const services = {
  "Social Media Marketing (SMM)": {
    title: "Amplify Your Brand with Strategic Social Media Marketing",
    description: `SMM involves promoting your brand, products, or services on social media platforms to increase engagement, followers, and sales. It builds a strong online presence and a community around your business.`,
    features: [
      "Enhances brand visibility and customer engagement.",
      "Uses targeted campaigns on platforms like Instagram, Facebook, and LinkedIn.",
    ],
    image: agency,
  },
  "Search Engine Optimization (SEO)": {
    title: "Improve Visibility and Traffic with Effective SEO",
    description: `SEO improves your website’s visibility in search engine results to drive organic traffic. It focuses on keywords, content, and technical factors for better ranking.`,
    features: [
      "Boosts long-term website traffic and search rankings.",
      "Builds trust and authority with optimized content and structure.",
    ],
    image: sme,
  },
  "Pay-Per-Click Advertising (PPC)": {
    title: "Get Instant Leads with PPC Campaigns",
    description: `PPC is a paid advertising model where you pay for each click on your ad, shown on search engines or platforms. It delivers quick and measurable traffic to your website.`,
    features: [
      "Offers instant visibility and lead generation.",
      "Highly trackable and budget-controlled marketing.",
    ],
    image: marketing,
  },
  "Content Writing": {
    title: "Attract and Convert with Strategic Content Writing",
    description: `Content writing involves crafting engaging, informative, and SEO-friendly text for websites, blogs, and marketing. It plays a key role in attracting and converting audiences.`,
    features: [
      "Strengthens brand voice and trust.",
      "Supports SEO and drives customer actions.",
    ],
    image: content,
  },
};

export default function ContServices() {
  // ✅ Set default key to an actual service key
  const [activeTab, setActiveTab] = useState("Social Media Marketing (SMM)");

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Our Marketing Solutions
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
