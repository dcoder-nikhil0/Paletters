import React from "react";
import "./PortService.css"; // We'll add styles here

const industries = [
  { name: "TECHNOLOGY", sizeClass: "size-xl" },
  { name: "LOGISTICS", sizeClass: "size-lg" },
  { name: "RETAIL", sizeClass: "size-lg" },
  { name: "HEALTHCARE", sizeClass: "size-xl" },
  { name: "FINANCE", sizeClass: "size-md" },
  { name: "ENTERTAINMENT", sizeClass: "size-md" },
  { name: "MEDIA", sizeClass: "size-md" },
  { name: "EDUCATION", sizeClass: "size-sm" },
  { name: "BEVERAGE", sizeClass: "size-md" },
  { name: "HOSPITALITY", sizeClass: "size-xs" },
  { name: "ENGINEERING", sizeClass: "size-xs" },
  { name: "CONSULTING", sizeClass: "size-lg" },
  { name: "NON-PROFIT", sizeClass: "size-sm" },
  { name: "FOOD", sizeClass: "size-xs" },
  { name: "APPAREL", sizeClass: "size-xxs" },
];

const PortService = () => {
  return (
    <div className="port-service">
      <div className="header">
        <h2>Industries We Serve</h2>
        <p>
          Explore the industries we serve, where we bring our expertise and
          tailored solutions to drive growth and success.
        </p>
      </div>

      <div className="industry-list">
        {industries.map((industry, index) => (
          <span key={index} className={`industry-item ${industry.sizeClass}`}>
            {industry.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PortService;
