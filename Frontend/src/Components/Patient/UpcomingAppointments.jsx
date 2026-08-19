import React, { useState } from "react";

import {
  FaCalendarCheck,
  FaUserDoctor,
  FaHospital,
  FaClock,
} from "react-icons/fa6";

import { Empty, Table, Tag } from "antd";


const UpcomingAppointments = ({ appointments = []}) => {
  const [loading, setLoading] = useState(false);

  const columns = [


    {
      title: "Patient Name",

      render: (_, appoinment) => (

        <div className="flex items-center gap-3">

          <div
            className="
              w-10
              h-10
              rounded-full
              bg-teal-50
              text-teal-600
              flex
              items-center
              justify-center
              shrink-0
            "
          >
            <FaUserDoctor />
          </div>

          <div>

            <p className="font-semibold text-gray-800 m-0">
              {appoinment.patientName}
            </p>

          </div>

        </div>

      ),
    },


    // -----------------------------
    // EMAIL
    // -----------------------------

    {
      title: "Doctor Name",

      render: (_, appoinment) => (

        <div className="flex items-center gap-2">

          <span>
            Dr. {appoinment.doctorName ||
              "Not specified"}
          </span>

        </div>

      ),
    },


    // -----------------------------
    // PHONE
    // -----------------------------

    {
      title: "Date",

      render: (_, appoinment) => (

        <div className="flex items-center gap-2">

          <span>
            {appoinment.preferredDate || "Not provided"}
          </span>

        </div>

      ),
    },


    // -----------------------------
    // SPECIALIZATION
    // -----------------------------

    {
      title: "Time",

      render: (_, appoinment) => (

        <Tag color="cyan">

          {appoinment.time ||
            "Not specified"}

        </Tag>

      ),
    },


    // -----------------------------
    // HOSPITAL
    // -----------------------------

    {
      title: "Status",

      render: (_, appoinment) => (

        <span>
          {appoinment.status || "Not assigned"}
        </span>

      ),
    },


  ];


  return (
    <section className="mb-10">

<<<<<<< HEAD
=======
      
>>>>>>> 20ea5c0f800e44ccd749c345bf4d27c317417d20

      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          overflow-hidden
        "
      >

        <Table
          columns={columns}

          dataSource={appointments}

          rowKey="_id"

          loading={loading}

          locale={{
            emptyText: (
              <Empty
                description="No appointment registered yet"
              />
            ),
          }}

          pagination={{
            pageSize: 5,
          }}

          scroll={{
            x: 900,
          }}
        />

      </div>

<<<<<<< HEAD
=======

      

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

>>>>>>> 20ea5c0f800e44ccd749c345bf4d27c317417d20
    </section>
  );
};

export default UpcomingAppointments;