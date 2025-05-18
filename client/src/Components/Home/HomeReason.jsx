import React, { useState } from "react";
import { Box } from "@mui/material";
import { FaGlobeAmericas } from "react-icons/fa";

const reasons = [
  {
    title: "No more time zone challenges",
    description:
      "We make working across time zones painless and ensure the quick completion of urgent tasks. With shifts covering all time zones, we can assist you daily (Mon–Fri) until 4 PM ET.",
    icon: <FaGlobeAmericas className="text-yellow-500 text-6xl" />,
  },
  {
    title: "Reason 2",
    description: "Description for reason 2 goes here.",
    icon: <FaGlobeAmericas className="text-blue-500 text-6xl" />,
  },
  {
    title: "Reason 3",
    description: "Description for reason 3 goes here.",
    icon: <FaGlobeAmericas className="text-green-500 text-6xl" />,
  },
  {
    title: "Reason 4",
    description: "Description for reason 4 goes here.",
    icon: <FaGlobeAmericas className="text-purple-500 text-6xl" />,
  },
  {
    title: "Reason 5",
    description: "Description for reason 5 goes here.",
    icon: <FaGlobeAmericas className="text-red-500 text-6xl" />,
  },
];

const HomeReason = () => {
  const [current, setCurrent] = useState(0);

  return (
    <Box className="py-12 px-6 text-center bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        5 reasons to work with us
      </h2>

      {/* Stepper */}
      <div className="flex justify-center mb-6 gap-4">
        {reasons.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-10 h-10 rounded-full text-white font-bold ${
              current === idx ? "bg-black" : "bg-gray-200 text-gray-500"
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center max-w-xl mx-auto text-left gap-4">
        <div>{reasons[current].icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {reasons[current].title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {reasons[current].description}
        </p>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {reasons.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </Box>
  );
};

export default HomeReason;
