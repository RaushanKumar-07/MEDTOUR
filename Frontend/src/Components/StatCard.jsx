import React from "react";

const StatCard = ({ title, value, icon, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            {value}
          </h2>
        </div>

        <div className="
          w-12 h-12
          rounded-xl
          bg-teal-50
          text-teal-600
          flex
          items-center
          justify-center
          text-xl
        ">
          {icon}
        </div>

      </div>

      {description && (
        <p className="text-xs text-gray-400 mt-4">
          {description}
        </p>
      )}

    </div>
  );
};

export default StatCard;