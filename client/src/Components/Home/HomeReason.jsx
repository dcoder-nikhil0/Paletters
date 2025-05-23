import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { FaGlobeAmericas } from "react-icons/fa";
import AddCardIcon from "@mui/icons-material/AddCard";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Groups2Icon from "@mui/icons-material/Groups2";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const reasons = [
  {
    title: "No more time zone challenges",
    description:
      "We make working across time zones painless and ensure the quick completion of urgent tasks. With shifts covering all time zones, we can assist you daily (Mon–Fri) until 6 PM IST.",
    icon: <FaGlobeAmericas className="text-amber-400 text-[80px]" />,
  },
  {
    title: "Reduce overhead costs",
    description:
      "Optimize your operations and save on expenses by outsourcing your design and development projects to us instead of maintaining an in-house team. Let us handle everything efficiently.",
    icon: <AddCardIcon className="text-amber-400" style={{ fontSize: 80 }} />,
  },
  {
    title: "Extensive industry experience",
    description:
      "We have experience working with diverse brands of all sizes across various industries. Regardless of your industry, we are confident in providing assistance and high quality deliveries.",
    icon: (
      <TipsAndUpdatesIcon className="text-amber-400" style={{ fontSize: 80 }} />
    ),
  },
  {
    title: "Cost-effective solutions",
    description:
      "Take advantage of higher expertise without exceeding your budget. We offer exceptional design at an affordable cost. Experience the advantage of our competitive rates, surpassing even the rates of freelancers.",
    icon: (
      <CardGiftcardIcon className="text-amber-400" style={{ fontSize: 80 }} />
    ),
  },
  {
    title: "Skilled in collaboration tools",
    description:
      "We use popular project management tools such as Asana, Trello, Jira and Basecamp. These platforms enable task list creation, team collaboration, and seamless task updates.",
    icon: <Groups2Icon className="text-amber-400" style={{ fontSize: 80 }} />,
  },
];

const HomeReason = () => {
  const [current, setCurrent] = useState(0);

  // Auto-scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reasons.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <Box className="py-12 px-6 text-center bg-white">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        5 reasons to work with us
      </h2>

      {/* Stepper */}
      <div className="flex justify-center mb-6 gap-4">
        {reasons.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-10 h-10 rounded-full text-white font-bold transition-colors duration-300 ${
              current === idx ? "bg-black" : "bg-gray-200 text-gray-500"
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto text-left gap-6 mt-4 px-4 transition-all duration-500">
        {/* Icon */}
        <div className="flex-shrink-0">{reasons[current].icon}</div>

        {/* Text Content */}
        <div className="text-center md:text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {reasons[current].title}
          </h3>
          <p className="text-gray-600 text-md max-w-xl">
            {reasons[current].description}
          </p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {reasons.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === idx ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </Box>
  );
};

export default HomeReason;
