import React from "react";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const HoemServices = () => {
  const services = [
    {
      title: "Presentation",
      image: "/images/presentation.png", // Replace with actual image path
      bgColor: "bg-purple-600",
    },
    {
      title: "Website Design & Development",
      image: "/images/website.png", // Replace with actual image path
      bgColor: "bg-yellow-400",
    },
    {
      title: "Video",
      image: "/images/video.png", // Replace with actual image path
      bgColor: "bg-blue-600",
    },
    {
      title: "Infographic",
      image: "/images/infographic.png", // Replace with actual image path
      bgColor: "bg-blue-500",
    },
  ];

  return (
    <div className="bg-white py-16 px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          If you can imagine it, <span className="text-yellow-500">we can design it</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Visual Best is one of the top graphic design companies in Noida, India. Our creative team
          specializes in digital marketing solutions that can help your business thrive. We provide
          all kinds of creative and content design services:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bgColor} rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300`}
          >
            <div className="p-4">
              <h3 className="text-white font-bold text-lg">{service.title}</h3>
            </div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-52 object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          variant="contained"
          color="warning"
          endIcon={<ArrowForward />}
          sx={{ fontWeight: "bold", borderRadius: "50px", px: 4, py: 1.5 }}
        >
          See Work Portfolio
        </Button>
      </div>
    </div>
  );
};

export default HoemServices;
