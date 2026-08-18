import React from "react";

import {
  FaCalendarCheck,
  FaCalendarDay,
} from "react-icons/fa6";


const DoctorAppointmentStats = ({ appointments = [] }) => {

  const totalAppointments = appointments.length;

  const upcomingAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "Upcoming"
  ).length;


  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-5
        mb-8
      "
    >

      {/* TOTAL APPOINTMENTS */}

      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-5
        "
      >

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-500">
              Total Appointments
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              {totalAppointments}
            </h2>

          </div>


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
            <FaCalendarCheck />
          </div>

        </div>


        <p className="text-xs text-gray-400 mt-4">
          Total appointments assigned to you
        </p>

      </div>


      {/* UPCOMING APPOINTMENTS */}

      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-5
        "
      >

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-500">
              Upcoming Appointments
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              {upcomingAppointments}
            </h2>

          </div>


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
            <FaCalendarDay />
          </div>

        </div>


        <p className="text-xs text-gray-400 mt-4">
          Appointments scheduled for you
        </p>

      </div>

    </div>
  );
};

export default DoctorAppointmentStats;