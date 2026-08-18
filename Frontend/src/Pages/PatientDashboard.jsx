import React from "react";

import PatientProfile from "../Components/Patient/PatientProfile";
import UpcomingAppointments from "../Components/Patient/UpcomingAppointments";
import RecentAppointments from "../Components/Patient/RecentAppointments";


const PatientDashboard = () => {

  /*
  =====================================================
  PATIENT BACKEND DATA
  =====================================================

  Uncomment when backend is ready.

  import axios from "axios";
  import { useEffect, useState } from "react";


  const [patient, setPatient] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchPatientDashboard = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5001/api/patient/dashboard"
      );

      setPatient(response.data.patient);
      setAppointments(response.data.appointments);

    } catch (error) {

      console.error(
        "Error fetching patient dashboard:",
        error
      );

    } finally {

      setLoading(false);

    }

  };


  useEffect(() => {
    fetchPatientDashboard();
  }, []);

  */


  // =====================================================
  // TEMPORARILY EMPTY
  // =====================================================
  // Remove these when backend is connected.

  const patient = null;
  const appointments = [];


  // =====================================================
  // SEPARATE APPOINTMENTS
  // =====================================================

  const upcomingAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "Upcoming"
  );

  const recentAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "Completed"
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

        {/* PATIENT PROFILE */}

        <PatientProfile
          patient={patient}
        />


        {/* PAGE HEADER */}

        <div className="mb-6">

          <p className="text-sm font-semibold text-teal-600">
            PATIENT DASHBOARD
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
            My Appointments
          </h1>

          <p className="text-gray-500 mt-2">
            View your upcoming and recent appointments.
          </p>

        </div>


        {/* UPCOMING */}

        <UpcomingAppointments
          appointments={upcomingAppointments}
        />


        {/* RECENT */}

        <RecentAppointments
          appointments={recentAppointments}
        />

      </main>

    </div>
  );
};

export default PatientDashboard;