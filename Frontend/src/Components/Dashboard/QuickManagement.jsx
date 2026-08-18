import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaUserDoctor,
  FaUser,
  FaHospital,
  FaCalendarCheck,
} from "react-icons/fa6";

const QuickManagement = () => {
  const navigate = useNavigate();

  const managementItems = [
    {
      title: "Manage Doctors",
      description: "View and manage registered doctors",
      icon: <FaUserDoctor />,
      path: "/admin-doctors",
    },

    {
      title: "Manage Patients",
      description: "View and manage registered patients",
      icon: <FaUser />,
      path: "/admin-patients",
    },

    {
      title: "Manage Hospitals",
      description: "View and manage hospitals",
      icon: <FaHospital />,
      path: "/admin-hospitals",
    },

    {
      title: "Manage Appointments",
      description: "View and manage appointments",
      icon: <FaCalendarCheck />,
      path: "/admin-appointments",
    },
  ];

  return (
    <section className="mt-8">



      <div className="mb-5">

        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Quick Management
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Manage different sections of the platform
        </p>

      </div>


 

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
        "
      >

        {managementItems.map((item) => (

          <button
            key={item.title}
            type="button"
            onClick={() => navigate(item.path)}
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-5
              text-left
              hover:shadow-md
              hover:-translate-y-1
              transition-all
              duration-200
              cursor-pointer
            "
          >

     

            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-teal-50
                text-teal-600
                flex
                items-center
                justify-center
                text-xl
              "
            >
              {item.icon}
            </div>

                 <h3 className="font-semibold text-gray-800 mt-4">
              {item.title}
            </h3>

  
            <p className="text-sm text-gray-500 mt-2">
              {item.description}
            </p>

 
            <p className="text-sm text-teal-600 font-medium mt-4">
              Manage →
            </p>

          </button>

        ))}

      </div>

    </section>
  );
};

export default QuickManagement;