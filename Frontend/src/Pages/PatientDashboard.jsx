import React from "react";
 import axios from "axios";
import { useEffect, useState } from "react";
import PatientProfile from "../Components/Patient/PatientProfile";
import UpcomingAppointments from "../Components/Patient/UpcomingAppointments";
import api from "../services/api";


const PatientDashboard = () => {

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

   const fetchAppointment = async () => {
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
    fetchAppointment();
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

        

        <PatientProfile/>


        

        <div className="mb-6">

          <p className="text-sm font-semibold text-teal-600">
            PATIENT DASHBOARD
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
            All Appointments
          </h1>

          <p className="text-gray-500 mt-2">
            View all appointments.
          </p>

        </div>


       

        <UpcomingAppointments
          appointments={appointments}
        />


      </main>

    </div>
  );
};

export default PatientDashboard;