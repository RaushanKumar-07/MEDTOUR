import React from "react";

import DoctorProfile from "../Components/Doctor/DoctorProfile";
import DoctorAppointmentStats from "../Components/Doctor/DoctorAppointmentStats";
import UpcomingAppointments from "../Components/Doctor/UpcomingAppointments";


const DoctorDashboard = () => {

  /*
  =====================================================
  DOCTOR BACKEND DATA
  =====================================================

  Uncomment when backend is ready.

  import axios from "axios";
  import { useEffect, useState } from "react";


  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchDoctorDashboard = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5001/api/doctor/dashboard"
      );

      setDoctor(response.data.doctor);
      setAppointments(response.data.appointments);

    } catch (error) {

      console.error(
        "Error fetching doctor dashboard:",
        error
      );

    } finally {

      setLoading(false);

    }

  };


  useEffect(() => {
    fetchDoctorDashboard();
  }, []);


  =====================================================
  EXPECTED BACKEND RESPONSE
  =====================================================

  {
    doctor: {
      name: "...",
      email: "...",
      phone: "...",
      doctorId: "...",
      specialization: "...",
      hospital: "..."
    },

    appointments: [
      {
        id: "...",
        patient: "...",
        patientId: "...",
        hospital: "...",
        date: "...",
        time: "...",
        status: "Upcoming"
      }
    ]
  }

  */


  // =====================================================
  // TEMPORARILY EMPTY
  // =====================================================
  // Remove these two lines when backend is connected.

  const doctor = null;
  const appointments = [];


  // =====================================================
  // UPCOMING APPOINTMENTS
  // =====================================================

  const upcomingAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "Upcoming"
  );


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

        {/* DOCTOR PROFILE */}

        <DoctorProfile
          doctor={doctor}
        />


        {/* PAGE HEADER */}

        <div className="mb-6">

          <p className="text-sm font-semibold text-teal-600">
            DOCTOR DASHBOARD
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
            Doctor Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            View your profile and appointments.
          </p>

        </div>


        {/* APPOINTMENT STATISTICS */}

        <DoctorAppointmentStats
          appointments={appointments}
        />


        {/* UPCOMING APPOINTMENTS */}

        <UpcomingAppointments
          appointments={upcomingAppointments}
        />

      </main>

    </div>
  );
};

export default DoctorDashboard;