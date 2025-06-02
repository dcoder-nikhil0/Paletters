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
    <div className="bg-white min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          Project-Based Model vs. Retainer Model
        </h1>
        <p className="text-center text-gray-600 mb-10 text-sm sm:text-base">
          Choose the best package model for graphic design services that meet
          your requirements. <br className="hidden sm:block" />
          The comparison chart helps you decide which model would be the best fit:
        </p>

        {/* Desktop Table */}
        <div className="hidden md:grid grid-cols-3 border rounded-xl overflow-hidden text-sm md:text-base shadow-md">
          <div className="bg-gray-100 p-4 font-semibold"></div>
          <div className="bg-yellow-100 p-4 font-semibold text-center">
            Project-Based Model
          </div>
          <div className="bg-gray-200 p-4 font-semibold text-center">
            Retainer Model
          </div>

          {rows.map((row, i) => (
            <React.Fragment key={i}>
              <div
                className={`p-4 font-medium border-t border-gray-200 bg-white ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                {row.label}
              </div>
              <div
                className={`p-4 border-t border-gray-200 ${
                  i % 2 === 0 ? "bg-yellow-50" : "bg-yellow-100"
                }`}
              >
                {row.project}
              </div>
              <div
                className={`p-4 border-t border-gray-200 ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                }`}
              >
                {row.retainer}
              </div>
            </React.Fragment>
          ))}

          {/* CTA Row */}
          <div className="p-4 font-medium border-t border-gray-300 bg-white"></div>
          <Link
            to="/contact"
            className="p-4 border-t border-gray-300 text-center font-semibold bg-amber-300 hover:bg-amber-400 transition"
          >
            I want to Know More
          </Link>
          <Link
            to="/contact"
            className="p-4 border-t border-gray-300 text-center font-semibold bg-gray-600 text-white hover:bg-gray-700 transition"
          >
            I want to Know More
          </Link>
        </div>

        {/* Mobile Stack */}
        <div className="md:hidden space-y-6">
          {rows.map((row, i) => (
            <div
              key={i}
              className="border rounded-lg shadow-md bg-white overflow-hidden"
            >
              <div className="bg-gray-100 p-4 font-semibold text-gray-800">
                {row.label}
              </div>
              <div className="p-4 border-t">
                <span className="block font-semibold text-yellow-600 mb-1">
                  Project-Based Model
                </span>
                <p className="text-sm text-gray-700">{row.project}</p>
              </div>
              <div className="p-4 border-t">
                <span className="block font-semibold text-gray-600 mb-1">
                  Retainer Model
                </span>
                <p className="text-sm text-gray-700">{row.retainer}</p>
              </div>
            </div>
          ))}

          {/* Mobile CTA */}
          <div className="flex flex-col gap-4 mt-6">
            <Link
              to="/contact"
              className="bg-amber-300 hover:bg-amber-400 text-center font-bold py-3 rounded-full shadow-md transition"
            >
              I want to Know More (Project-Based)
            </Link>
            <Link
              to="/contact"
              className="bg-gray-600 hover:bg-gray-700 text-white text-center font-bold py-3 rounded-full shadow-md transition"
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
