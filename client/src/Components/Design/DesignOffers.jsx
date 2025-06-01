import { CheckCircle } from "lucide-react";
import { Button } from "@mui/material";
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
    <div className="bg-white py-16 px-8 md:px-16 lg:px-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Graphic Design – Transforming Ideas into Visual Masterpieces
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            At Paletterse, our graphic design services go beyond making things
            look good—we bring your ideas to life through strategic, creative,
            and impactful visual communication. Whether you're launching a
            brand, revamping your identity, or promoting a new product, we
            design with purpose and precision to ensure your message connects
            and converts. <br /> Design isn’t just decoration—it’s the first
            impression, the emotional connection, and the voice of your brand.
            That’s why our team collaborates closely with you to understand your
            vision, values, and goals, then crafts customized visuals that
            reflect your brand identity and captivate your audience. From sleek
            minimalism to bold creativity, we tailor every design to suit your
            style and business objectives. <br /> Whether you're in need of
            print designs or digital assets, Paletterse delivers high-quality
            visuals that are both aesthetically stunning and functionally
            effective.
          </p>
        </div>

        <div className="flex justify-end">
          <div className="text-right">
            <h2 className="text-xl font-semibold flex justify-start mb-4">
              We offer services for:
            </h2>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center justify-start text-gray-700"
                >
                  <CheckCircle className="text-yellow-500 mr-2" />
                  <span className="mr-3">{service}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-start mt-8">
              <Link
                to="/portfolio"
                className="bg-yellow-400 font-bold text-black px-6 py-3 rounded-full hover:bg-yellow-500"
              >
                Explore Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebOffers;
