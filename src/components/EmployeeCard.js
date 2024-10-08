import React from "react";

function EmployeeCard({ title, number, men, women, imageUrl }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mr-10 md:mr-4">
      <h2 className="text-xl md:text-lg font-semibold text-gray-700">
        {title}
      </h2>
      <div className="flex items-center justify-between mt-4 space-x-16">
        <div>
          <span className="text-5xl md:text-4xl font-bold text-gray-900">
            {number}
          </span>
          <div className="text-base md:text-sm text-gray-600">{men} Men</div>
          <div className="text-base md:text-sm text-gray-600">
            {women} Women
          </div>
        </div>
      
        <img src={imageUrl} alt="Graph" className="h-28 w-auto md:h-28" />
      </div>
    </div>
  );
}

export default EmployeeCard;
