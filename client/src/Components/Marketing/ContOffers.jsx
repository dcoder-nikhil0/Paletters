import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ContOffers = () => {
  const services = [
    "Social Media Marketing",
    "Search Engine Optimization",
    "Pay-per-Click Advertising",
    "Content Writing & Copywriting",
    "Email Marketing",
    "Influencer Marketing",
    "Campaign Strategy & Management",
    "Analytics & Performance Tracking",
    "Brand Messaging & Positioning",
  ];

  return (
    <div className="bg-white py-16 px-8 md:px-16 lg:px-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Marketing Services – Fuel Your Growth with Strategic Brilliance
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            At Paletterse, we provide a full suite of digital marketing services
            designed to elevate your brand visibility, engage your audience, and
            drive measurable business growth. In today’s competitive digital
            landscape, simply having a presence isn’t enough—you need powerful
            strategies, creative content, and the right platforms working
            together. That’s where we come in. Our marketing experts craft
            customized strategies that align with your business goals—whether
            it's gaining followers, improving search rankings, generating leads,
            or increasing conversions. From search engines to social feeds, we
            position your brand exactly where your audience spends their time.
            We combine creativity, data analytics, and industry expertise to
            make your marketing not only effective but also impactful.
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
