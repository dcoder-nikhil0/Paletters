import React from "react";
import missionImg from "../../assets/10613439_10139.webp";

const AboutMission = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-amber-400">Paletterse</span>, our mission is to deliver top-tier graphic
            design and digital marketing services that combine premium quality
            with affordability, serving both local and global clients.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            We're committed to fostering a positive company culture, creating a
            second family for our dedicated team members, where happiness and
            creativity thrive. Our aim is to help businesses succeed by offering
            innovative, visually stunning solutions, while nurturing a workspace
            where passion and collaboration are at the heart of everything we do.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={missionImg}
            alt="Mission Image"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default AboutMission;
