import { CheckCircle } from "lucide-react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const WebOffers = () => {
  const services = [
    "Product Explainer Video",
    "Interactive Design",
    "Live Action Explainer Videos",
    "Video Invitation Services",
    "YouTube Video Marketing",
    "Corporate Video Production",
    "Video Editing Services",
    "Video Testimonials",
    "Video Production Consultation",
  ];

  return (
    <div className="bg-white py-16 px-8 md:px-16 lg:px-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Corporate Video Production Company
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Paletterse is the leading corporate video production company in
            Noida, India, and we are a team of skilled crews, professional
            equipment, and meticulous planning. High-quality cameras, lighting,
            and audio gear ensure crisp visuals and clear sound. Our team of
            directors, cinematographers, and sound engineers contributes
            expertise to every aspect of production. Detailed story boarding
            captures nuances, enhancing the final narrative. Professional
            editing refines footage, incorporating colour correction and
            graphics for a polished outcome. This approach represents the brand
            professionally and ensures consistency across platforms. Ultimately,
            a corporate video shoot is a comprehensive process that results in
            engaging, premium-quality videos, conveying messages effectively to
            diverse audiences.
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
