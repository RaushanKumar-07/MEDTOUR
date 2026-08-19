import React, { useEffect, useState } from "react";
import api from '../../services/api';

import {
  FaUserDoctor,
  FaUser,
  FaHospital,
  FaCalendarCheck,
  FaUserShield,
  FaEnvelope,
} from "react-icons/fa6";

import StatCard from "../../Components/StatCard";
import DoctorsTable from "../../Components/Dashboard/DoctorsTable";
import AppoinmentTable from "../../Components/Dashboard/AppointmentTable";


const AdminDashboard = () => {


  const [admin, setAdmin] = useState(null);
  const [loadingAdmin, setLoadingAdmin] = useState(true);

  const fetchAdminProfile = async () => {
    try {

      const response = await api.get(
        "/admin/profile"
      );

      setAdmin(response.data);

    } catch (error) {

      console.error(
        "Error fetching admin profile:",
        error
      );

    } finally {

      setLoadingAdmin(false);

    }
  };


  useEffect(() => {
    fetchAdminProfile();
  }, []);



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

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
            mb-8
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
        <AppoinmentTable />


      </main>

    </div>
  );
};

export default AdminDashboard;