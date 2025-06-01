import React from "react";
import CountUp from "react-countup";

const HomeCountups = () => {
  const counters = [
    { value: 2500, suffix: "+", label: "Projects Completed" },
    { value: 150, suffix: "+", label: "Global Clients" },
    { value: 3, suffix: " years", label: "Years" },
    { value: 30, suffix: "+", label: "Team Size" },
    { value: 85, suffix: "%", label: "Client Retention" },
    { value: 5, suffix: "⭐", label: "Reviews" },
  ];

  return (
    <div className="bg-[#2a2a2a] text-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 text-center">
        {counters.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold">
              <CountUp end={item.value} duration={3} suffix={item.suffix} />
            </span>
            <p className="text-sm sm:text-base mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCountups;
