import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WebOffers = () => {
  const services = [
    "Logo Design",
    "Brand Identity & Brand Kit",
    "Business Card & Stationery Design",
    "Brochure & Flyer Design",
    "Packaging Design",
    "Poster & Banner Design",
    "Social Media Creatives",
    "Infographics",
    "Illustration Design",
    "UI/UX Design Assets",
  ];

  return (
    <div className="bg-white py-12 px-6 sm:px-10 md:px-16 lg:px-32">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Graphic Design – Transforming Ideas into Visual Masterpieces
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            At Paletterse, our graphic design services go beyond making things
            look good — we bring your ideas to life through strategic, creative,
            and impactful visual communication. Whether you're launching a
            brand, revamping your identity, or promoting a new product, we
            design with purpose and precision to ensure your message connects
            and converts.
            <br />
            <br />
            Design isn’t just decoration — it’s the first impression, the
            emotional connection, and the voice of your brand. That’s why our
            team collaborates closely with you to understand your vision,
            values, and goals, then crafts customized visuals that reflect your
            brand identity and captivate your audience.
            <br />
            <br />
            Whether you're in need of print designs or digital assets,
            Paletterse delivers high-quality visuals that are both aesthetically
            stunning and functionally effective.
          </p>
        </div>

        {/* Right Offers Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
            We offer services for:
          </h2>
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <CheckCircle className="text-yellow-500 mr-3" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              to="/portfolio"
              className="bg-yellow-400 font-bold text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-200"
            >
              Explore Portfolio →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebOffers;
