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
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center">
        {counters.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <CountUp
              end={item.value}
              duration={3}
              suffix={item.suffix}
              className="text-4xl font-bold"
            />
            <p className="text-sm mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCountups;
