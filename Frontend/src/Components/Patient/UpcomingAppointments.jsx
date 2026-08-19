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

    </section>
  );
};

export default UpcomingAppointments;