import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const IllOffers = () => {
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
    <div className="bg-white py-16 px-6 sm:px-8 md:px-16 lg:px-32">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Text Content */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Illustration Design – Creative Visuals That Speak Louder Than Words
          </h1>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
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

        {/* Right: Services List */}
        <div className="w-full">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            We offer services for:
          </h2>
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex items-start text-gray-700 text-base"
              >
                <CheckCircle className="text-yellow-500 mr-2 mt-1" size={20} />
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              to="https://portfolio.paletterse.com/"
              className="inline-block bg-yellow-400 font-bold text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllOffers;
