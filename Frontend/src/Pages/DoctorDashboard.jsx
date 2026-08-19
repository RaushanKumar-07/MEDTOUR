import React, { useEffect, useState } from "react";
import DoctorProfile from "../Components/DoctorDashboard/DoctorProfile";
import DoctorAppointmentStats from "../Components/DoctorDashboard/DoctorAppointmentStats";
import UpcomingAppointments from "../Components/DoctorDashboard/UpcomingAppointments";
import { message } from "antd";
import axios from "axios";
import api from "../services/api";


const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

 const fetchAppointments = async () => {
    try {
      setLoading(true);

      const response = await api.get(
        "/Appointment_routes/getAppointment"
      );

      setAppointments(response.data.data);

    } catch (error) {

      message.error("Unable to load appointment");

    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchAppointments();
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

        
        <DoctorProfile/>


        <div className="mb-6">

          <p className="text-sm font-semibold text-teal-600">
            DOCTOR DASHBOARD
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
            Doctor Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            View all appointments.
          </p>

        </div>


        

        <DoctorAppointmentStats
          appointments={appointments}
        />



        <UpcomingAppointments
          appointments={appointments}
        />

      </main>

    </div>
  );
};

export default DoctorDashboard;