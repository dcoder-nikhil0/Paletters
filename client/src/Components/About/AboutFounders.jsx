import React from "react";
import founder1 from "../../assets/me.webp";
import founder2 from "../../assets/aditya.webp";
import founder3 from "../../assets/romshi.webp";

const founders = [
  {
    img: founder2,
    name: "Aditya Raj",
    title: "Founder and Managing Director",
    description: `Aditya Raj, a visionary leader, excels at visually telling brand stories 
      that boost clients' businesses. With 5+ years in design, he's earned a reputation as 
      a visual storytelling wizard, having worked with leading Indian brands.`,
  },
  {
    img: founder3,
    name: "Romshi Narayan Singh",
    title: "Co-Founder and Creative Director",
    description: `Romshi Narayan Singh, leads the creative team with a passion for design innovation. 
      Her artistic vision and strategic approach have helped Paletterse stand out 
      in the competitive market.`,
  },
  {
    img: founder1,
    name: "Nikhil Ranjan",
    title: "Co-Founder and CTO",
    description: `Nikhil Ranjan is a tech wizard who ensures that Paletterse's digital
      solutions are cutting-edge. With 5+ years of experience in web development, 
      he's the backbone of the company.`,
  },
];

const AboutFounders = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-7xl font-bold text-center text-gray-900 mb-12">
        Our Leadership
      </h2>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
          >
            <img
              src={founder.img}
              alt={founder.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {founder.name}
              </h3>
              <p className="text-blue-600 text-lg">{founder.title}</p>
              <p className="text-gray-700 mt-4">{founder.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFounders;
