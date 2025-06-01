import { CheckCircle } from "lucide-react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ContOffers = () => {
  const services = [
    "Website Design",
    "Interactive Design",
    "Microsite Design",
    "Prototype Design",
    "Wireframe Design",
    "E-commerce Design",
    "User Interface Design",
    "Website Design Consultation",
    "Blog Page Design",
  ];

  return (
    <div className="bg-white py-16 px-8 md:px-16 lg:px-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Website Development Company <br /> in India
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Your website is arguably your most important digital marketing
            asset; if it isn't growing your business, it's time to take action
            for it. With our high-quality website development service, we build
            websites continuously optimized for the highest search engine
            placement, hit directly to your market, and convert visitors into
            paying customers. We implement such innovative ideas focusing on
            outstanding, high-performing website design. We use advanced
            technologies and coding languages to develop high-performing
            websites such as{" "}
            <span className="font-bold">
              WordPress, PHP, Drupal, Laravel, NodeJs, ReactJs, Shopify
            </span>{" "}
            and WooCommerce for website development.
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

export default ContOffers;
