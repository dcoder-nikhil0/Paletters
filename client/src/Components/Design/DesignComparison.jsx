import React from "react";
import { Link } from "react-router-dom";

const rows = [
  {
    label: "Scope of Work",
    project: "Defined by individual projects or assignments",
    retainer: "Ongoing and continuous design support",
  },
  {
    label: "Cost",
    project:
      "Cost varies based on individual project scope and normally it is costly than Retainer model.",
    retainer:
      "Fixed cost based on retainer agreement and it always comes with discounted rate.",
  },
  {
    label: "Turnaround",
    project:
      "Project-dependent turnaround time. Usually it takes 3 - 5 working days for each delivery.",
    retainer:
      "Typically faster turnaround for retainer clients. Usually it takes 2 - 3 days.",
  },
  {
    label: "Support",
    project:
      "The designer may give priority to other projects, and the project may get delayed. You may receive delayed responses.",
    retainer:
      "The projects are managed on priority and meet tight deadlines. You will get VIP support, and you will receive swift responses always.",
  },
  {
    label: "Engagement",
    project: "Temporary and project-specific",
    retainer: "Long-term and continuous",
  },
  {
    label: "Project Complexity",
    project: "Can vary from small to large-scale projects",
    retainer: "Primarily focused on ongoing design needs",
  },
  {
    label: "Skill Utilization",
    project: "Specific skills required for each project",
    retainer: "A broader range of design skills may be needed",
  },
];

const DesignComparison = () => {
  return (
    <div className="bg-white min-h-screen p-6 sm:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          Project-Based Model vs. Retainer Model
        </h1>
        <p className="text-center text-gray-600 mb-12 text-sm sm:text-base">
          Choose the best package model for graphic design services that meet
          your requirements. <br /> The comparison chart helps you decide which
          model would be the best fit:
        </p>

        {/* Responsive Table for Large Screens */}
        <div className="hidden md:grid grid-cols-3 border rounded-lg overflow-hidden text-sm md:text-base">
          <div className="bg-gray-100 p-4 font-semibold"></div>
          <div className="bg-yellow-100 p-4 font-semibold">
            Project-Based Model
          </div>
          <div className="bg-gray-200 p-4 font-semibold">Retainer Model</div>

          {rows.map((row, i) => (
            <React.Fragment key={i}>
              <div className="p-4 font-medium border-r">{row.label}</div>
              <div className="p-4 border-r">{row.project}</div>
              <div className="p-4">{row.retainer}</div>
            </React.Fragment>
          ))}

          <div className="p-4 font-medium border-r"></div>
          <Link
            to="/contact"
            className="p-4 border-r text-center bg-amber-300 font-semibold hover:bg-amber-400 transition"
          >
            I want to Know More
          </Link>
          <Link
            to="/contact"
            className="p-4 text-center text-white bg-gray-600 font-semibold hover:bg-gray-700 transition"
          >
            I want to Know More
          </Link>
        </div>

        {/* Stacked View for Mobile Screens */}
        <div className="md:hidden space-y-6">
          {rows.map((row, i) => (
            <div key={i} className="border rounded-lg shadow-sm">
              <div className="bg-gray-100 p-4 font-semibold text-gray-800">
                {row.label}
              </div>
              <div className="p-4 border-t">
                <span className="block font-medium mb-1 text-yellow-600">
                  Project-Based Model
                </span>
                <p className="text-sm text-gray-700">{row.project}</p>
              </div>
              <div className="p-4 border-t">
                <span className="block font-medium mb-1 text-gray-600">
                  Retainer Model
                </span>
                <p className="text-sm text-gray-700">{row.retainer}</p>
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-4 mt-6">
            <Link
              to="/contact"
              className="bg-amber-300 hover:bg-amber-400 text-center font-bold py-3 rounded-full"
            >
              I want to Know More (Project-Based)
            </Link>
            <Link
              to="/contact"
              className="bg-gray-600 hover:bg-gray-700 text-white text-center font-bold py-3 rounded-full"
            >
              I want to Know More (Retainer)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignComparison;
