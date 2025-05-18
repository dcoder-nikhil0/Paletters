import React from "react";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const HoemServices = () => {
  return (
    <div className="bg-white py-16 px-6 sm:px-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          If you can imagine it,{" "}
          <span className="text-yellow-500">we can design it</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Visual Best is one of the top graphic design companies in Noida,
          India. Our creative team specializes in digital marketing solutions
          that can help your business thrive. We provide all kinds of creative
          and content design services:
        </p>
      </div>

      {/* Top Section: 3 Columns */}
      <div className="grid grid-cols-3 gap-6 mt-12">
        {/* Column 1: Two stacked items */}
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Presentation",
              image: "/images/presentation.png",
              bgColor: "bg-purple-600",
            },
            {
              title: "Infographic",
              image: "/images/infographic.png",
              bgColor: "bg-blue-500",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300`}
            >
              <div className="p-4">
                <h3 className="text-white font-bold text-lg">
                  {service.title}
                </h3>
              </div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Column 2: Tall item */}
        <div className="row-span-2">
          <div className="bg-yellow-400 rounded-2xl shadow-lg overflow-hidden h-200 hover:scale-105 transition transform duration-300 flex flex-col">
            <div className="p-4">
              <h3 className="text-black font-bold text-lg">
                Website Design & Development
              </h3>
            </div>
            <img
              src="/images/website.png"
              alt="Website Design & Development"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Empty column to maintain 3-column layout */}

        <div className="">
          <div className="bg-blue-600 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300">
            <div className="p-4">
              <h3 className="text-white font-bold text-lg">Video</h3>
            </div>
            <img
              src="/images/video.png"
              alt="Video"
              className="w-full h-80 object-cover"
            />
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
      </div>
    </div>
  );
};

export default HoemServices;
