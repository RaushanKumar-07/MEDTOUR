import React from "react";

import {
  FaCalendarCheck,
  FaUserDoctor,
  FaHospital,
  FaClock,
} from "react-icons/fa6";

import { Tag } from "antd";


const UpcomingAppointments = ({ appointments = [] }) => {

  return (
    <section className="mb-10">

      

      <div className="flex items-center gap-2 mb-5">

        <FaCalendarCheck className="text-teal-600" />

        <h2 className="text-xl font-bold text-gray-800">
          Upcoming Appointments
        </h2>

      </div>


      

      {appointments.length === 0 ? (

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-8
            text-center
          "
        >

          <FaCalendarCheck
            className="
              mx-auto
              text-3xl
              text-gray-300
              mb-3
            "
          />

          <p className="text-gray-500">
            No upcoming appointments.
          </p>

        </div>

      ) : (

        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {appointments.map((appointment) => (

            <div
              key={appointment.id || appointment._id}
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                p-5
                hover:shadow-md
                transition-shadow
              "
            >

              

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-4
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-teal-50
                      text-teal-600
                      flex
                      items-center
                      justify-center
                      text-lg
                      shrink-0
                    "
                  >
                    <FaUserDoctor />
                  </div>

                  <div>

                    <h3 className="font-semibold text-gray-800">
                      {appointment.doctor}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {appointment.specialization}
                    </p>

                  </div>

                </div>


                <Tag color="processing">
                  Upcoming
                </Tag>

              </div>


              
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-4
                  mt-5
                  pt-5
                  border-t
                  border-gray-100
                "
              >

                

                <div className="flex items-center gap-3">

                  <FaCalendarCheck className="text-gray-400" />

                  <div>

                    <p className="text-xs text-gray-400">
                      Date
                    </p>

                    <p className="text-sm font-medium text-gray-700">
                      {appointment.date}
                    </p>

                  </div>

                </div>


                

                <div className="flex items-center gap-3">

                  <FaClock className="text-gray-400" />

                  <div>

                    <p className="text-xs text-gray-400">
                      Time
                    </p>

                    <p className="text-sm font-medium text-gray-700">
                      {appointment.time}
                    </p>

                  </div>

                </div>


                

                <div className="flex items-center gap-3">

                  <FaHospital className="text-gray-400" />

                  <div>

                    <p className="text-xs text-gray-400">
                      Hospital
                    </p>

                    <p className="text-sm font-medium text-gray-700">
                      {appointment.hospital}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
};

export default UpcomingAppointments;