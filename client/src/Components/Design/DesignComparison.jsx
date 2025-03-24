import React from "react";
import { Link } from "react-router-dom";

const DesignComparison = () => {
  return (
    <div className="bg-white min-h-screen p-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4">
          Project-Based Model vs. Retainer Model
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Choose the best package model for graphic design services that meet
          your requirements. The comparison chart helps you decide which model
          would be the best fit:
        </p>

        {/* Comparison Table */}
        <div className="grid grid-cols-3 border rounded-lg overflow-hidden">
          {/* Headers */}
          <div className="bg-gray-100 p-6 font-semibold text-lg"> </div>
          <div className="bg-yellow-100 p-6 font-semibold text-lg">
            Project-Based Model
          </div>
          <div className="bg-gray-200 p-6 font-semibold text-lg">
            Retainer Model
          </div>

          {/* Row 1 */}
          <div className="p-6 font-medium border-r">Scope of Work</div>
          <div className="p-6 border-r">
            Defined by individual projects or assignments
          </div>
          <div className="p-6">Ongoing and continuous design support</div>

          {/* Row 2 */}
          <div className="p-6 font-medium border-r">Cost</div>
          <div className="p-6 border-r">
            Cost varies based on individual project scope and normally it is
            costly than Retainer model.
          </div>
          <div className="p-6">
            Fixed cost based on retainer agreement and it always comes with
            discounted rate.
          </div>

          {/* Row 3 */}
          <div className="p-6 font-medium border-r">Turnaround</div>
          <div className="p-6 border-r">
            Project-dependent turnaround time. Usually it takes 3 - 5 working
            days for each delivery.
          </div>
          <div className="p-6">
            Typically faster turnaround for retainer clients. Usually it takes 2
            - 3 days.
          </div>
          {/* Row 4 */}
          <div className="p-6 font-medium border-r">Support</div>
          <div className="p-6 border-r">
            The designer may give priority to other projects, and the project
            may get delayed. You may receive delayed responses.
          </div>
          <div className="p-6">
            The projects are managed on priority and meet tight deadlines. You
            will get VIP support, and you will receive swift responses always.
          </div>
          {/* Row 5 */}
          <div className="p-6 font-medium border-r">Engagement</div>
          <div className="p-6 border-r">Temporary and project-specific</div>
          <div className="p-6">Long-term and continuous</div>

          {/* Row 6 */}
          <div className="p-6 font-medium border-r">Project Complexity</div>
          <div className="p-6 border-r">
            Can vary from small to large-scale projects
          </div>
          <div className="p-6">Primarily focused on ongoing design needs</div>
          {/* Row 7 */}
          <div className="p-6 font-medium border-r">Skill Utilization</div>
          <div className="p-6 border-r">
            Specific skills required for each project
          </div>
          <div className="p-6">
            A broader range of design skills may be needed
          </div>
          <div className="p-6 font-medium border-r"></div>
          <Link to="/contact" className="p-6 border-r pointer bg-amber-300">
            I want to Know More
          </Link>
          <Link to="/contact" className="p-6 border-r pointer bg-gray-600">
            I want to Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesignComparison;
