import { CheckCircle } from "lucide-react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const WebOffers = () => {
  const services = [
    "Business Website Development",
    "Portfolio Website Design",
    "E-commerce Website Development",
    "Landing Page Design",
    "Personal/Resume Website",
    "Custom Web Application Development",
    "Blog/News Website Design",
    "Website Redesign Services",
    "Responsive Web Design",
    "Website Maintenance & Support",
  ];

  return (
    <div className="bg-white py-16 px-8 md:px-16 lg:px-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">
            WWebsite Development – Powerful, Purpose-Driven Digital Experiences
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            At Paletterse, we create websites that do more than just look
            great—they perform, engage, and convert. Our team blends
            cutting-edge design with clean, scalable code to deliver custom
            websites that reflect your brand and drive user action. From
            single-page portfolios to complex e-commerce platforms, we build
            experiences that are fast, responsive, and fully optimized for SEO.
            <br />
            We don’t believe in one-size-fits-all solutions. We take time to
            understand your vision, audience, and business goals, then build a
            digital platform that works seamlessly across all devices. Whether
            you need a bold redesign, a fresh launch, or ongoing development
            support, we’ve got you covered with high-performing, future-ready
            websites.
            <br /> With a strong focus on UI/UX, performance, security, and
            scalability, Paletterse ensures your website doesn’t just exist—but
            thrives in the digital world.
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
