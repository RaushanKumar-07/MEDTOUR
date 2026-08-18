import React from "react";

import {
  FaUserDoctor,
  FaUser,
  FaHospital,
  FaCalendarCheck,
} from "react-icons/fa6";


import StatCard from "../../Components/StatCard";
import DoctorsTable from "../../Components/Dashboard/DoctorsTable";



const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">

  
      <main
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-8
        "
      >


        <div className="mb-8">

          <p className="text-sm font-semibold text-teal-600">
            ADMIN PANEL
          </p>

          <h1 className="text-3xl font-bold text-gray-900 mt-1">
            Admin Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your MedTour platform.
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

          <StatCard
            title="Registered Doctors"
            value="0"
            icon={<FaUserDoctor />}
            description="Total registered doctors"
          />

          <StatCard
            title="Registered Patients"
            value="0"
            icon={<FaUser />}
            description="Total registered patients"
          />

          <StatCard
            title="Hospitals"
            value="0"
            icon={<FaHospital />}
            description="Available hospitals"
          />

          <StatCard
            title="Appointments"
            value="0"
            icon={<FaCalendarCheck />}
            description="Total appointments"
          />

        </div>


        <DoctorsTable />


      </main>


          

    </div>
  );
};

export default AdminDashboard;