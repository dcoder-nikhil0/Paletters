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
    "Animated Social Media Reels",
  ];

  return (
    <div className="bg-white py-16 px-8 md:px-16 lg:px-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Video Production – Visual Storytelling That Inspires and Converts
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            At Paletterse, we specialize in crafting impactful videos that turn
            ideas into compelling visual stories. Whether you're promoting a
            product, explaining a service, or building brand awareness, our
            video production services are designed to captivate, inform, and
            convert.
            <br />
            We handle every step—from scripting and storyboarding to editing and
            post-production—ensuring your message is not only seen but
            remembered. With a creative eye and a strategic mindset, we produce
            content that fits your goals and resonates with your audience,
            whether it’s for social media, your website, presentations, or ads.
            <br /> From animated explainers to corporate films and testimonials,
            Paletterse brings your brand to life through motion, creativity, and
            emotion—delivering professional results that drive engagement and
            business growth.
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
