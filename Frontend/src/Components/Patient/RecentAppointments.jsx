import React from "react";

import {
  FaClock,
  FaUserDoctor,
  FaHospital,
} from "react-icons/fa6";

import { Tag } from "antd";


const RecentAppointments = ({ appointments = [] }) => {

  return (
    <section>

     

      <div className="flex items-center gap-2 mb-5">

        <FaClock className="text-gray-500" />

        <h2 className="text-xl font-bold text-gray-800">
          Recent Appointments
        </h2>

      </div>


      

      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          overflow-hidden
        "
      >

        {appointments.length === 0 ? (

          <div className="p-8 text-center">

            <p className="text-gray-500">
              No recent appointments.
            </p>

          </div>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full min-w-175">

              <thead>

                <tr
                  className="
                    bg-gray-50
                    border-b
                    border-gray-200
                  "
                >

                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-600">
                    Doctor
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-600">
                    Specialization
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-600">
                    Hospital
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-600">
                    Date
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-600">
                    Status
                  </th>

                </tr>

              </thead>


              <tbody>

                {appointments.map((appointment) => (

                  <tr
                    key={appointment.id || appointment._id}
                    className="
                      border-b
                      border-gray-100
                      last:border-b-0
                    "
                  >

                    

                    <td className="px-5 py-4">

                      <div className="flex items-center gap-2">

                        <FaUserDoctor className="text-teal-600" />

                        <span className="font-medium text-gray-700">
                          {appointment.doctor}
                        </span>

                      </div>

                    </td>


                    

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {appointment.specialization}
                    </td>


                    

                    <td className="px-5 py-4 text-sm text-gray-600">

                      <div className="flex items-center gap-2">

                        <FaHospital className="text-gray-400" />

                        {appointment.hospital}

                      </div>

                    </td>


                    

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {appointment.date}
                    </td>


                    

                    <td className="px-5 py-4">

                      <Tag color="success">
                        {appointment.status || "Completed"}
                      </Tag>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </section>
  );
};

export default RecentAppointments;