import { FaHeart, FaChartLine, FaStar, FaChartBar } from "react-icons/fa";

const WebBenefits = () => {
  const benefits = [
    {
      icon: <FaHeart className="text-yellow-400 text-4xl" />,
      title: "Enhanced User Experience",
      description:
        "Good web design and development create a user-friendly and engaging online experience. This increases user satisfaction and encourages longer visit durations, which can lead to higher conversion rates and improved customer retention.",
    },
    {
      icon: <FaChartLine className="text-yellow-400 text-4xl" />,
      title: "Increased Visibility and SEO Performance",
      description:
        "Professionally designed and well-developed websites are optimized for search engines. A clean, responsive design, coupled with efficient coding, improves search engine rankings, making your site more visible and accessible to potential customers.",
    },
    {
      icon: <FaStar className="text-yellow-400 text-4xl" />,
      title: "Brand Consistency and Professional Image",
      description:
        "A well-designed website reflects your brand's identity and professionalism. Consistent branding, including colors, fonts, and layout, strengthens your brand's image and helps in building trust and credibility with your audience.",
    },
    {
      icon: <FaChartBar className="text-yellow-400 text-4xl" />,
      title: "Competitive Advantage",
      description:
        "In an era where online presence is crucial, having a website that is both aesthetically appealing and functionally superior gives you a significant edge in the market, attracting more customers and driving business growth.",
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
