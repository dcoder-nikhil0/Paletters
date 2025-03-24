import React from "react";

const PortHero = () => {
  return (
    <div className="relative bg-white text-center py-28 px-8">
      {/* Large faded background text */}
      <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-gray-200 select-none z-0">
        Portfolio
      </h1>

      {/* Main content */}
      <div className="relative z-10">
        <h2 className="text-5xl font-extrabold text-black mb-4">Portfolio</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          We are here to create a difference. <span className="font-bold">"The Difference"</span> that helps your business
          stand out in the crowd. We do the work that only aims for <span className="font-bold">WOW</span>.
        </p>
      </div>
    </div>
  );
};

export default PortHero;
