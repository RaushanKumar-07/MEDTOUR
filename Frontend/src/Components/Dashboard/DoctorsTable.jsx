import React, { useEffect, useState } from "react";
// import axios from "axios";

import {
  Table,
  Tag,
  Button,
  Empty,
  message,
  Popconfirm,
} from "antd";

import {
  FaUserDoctor,
  FaEnvelope,
  FaPhone,
  FaPen,
  FaTrash,
} from "react-icons/fa6";

const DoctorsTable = () => {

  const [doctors, setDoctors] = useState([
    // TEMPORARY DATA
    // Remove this when backend is connected

    {
      _id: "1",
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      specialization: "Cardiologist",
      hospital: "City Hospital",
    },

    {
      _id: "2",
      name: "Amit Kumar",
      email: "amit@gmail.com",
      phone: "9876543211",
      specialization: "Neurologist",
      hospital: "MedCare Hospital",
    },

    {
      _id: "3",
      name: "Priya Singh",
      email: "priya@gmail.com",
      phone: "9876543212",
      specialization: "Dermatologist",
      hospital: "Apollo Hospital",
    },
  ]);

  const [loading, setLoading] = useState(false);


  // =====================================================
  // BACKEND FETCHING
  // =====================================================
  // Uncomment this section when backend is created.
  // =====================================================

  /*
  const fetchDoctors = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:5001/api/admin/doctors"
      );

      setDoctors(response.data);

    } catch (error) {
      console.error("Error fetching doctors:", error);

      message.error("Unable to load doctors");

    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchDoctors();
  }, []);
  */

  const handleEdit = (doctor) => {
    console.log("Edit doctor:", doctor);

    message.info(`Edit ${doctor.name}`);
  };

  const handleDelete = (doctor) => {

    // TEMPORARY FRONTEND DELETE
    // This will be replaced with API call later.

    setDoctors((previousDoctors) =>
      previousDoctors.filter(
        (item) => item._id !== doctor._id
      )
    );

    message.success("Doctor deleted successfully");


    /*
    const deleteDoctor = async () => {
      try {

        await axios.delete(
          `http://localhost:5001/api/admin/doctors/${doctor._id}`
        );

        message.success("Doctor deleted successfully");

        setDoctors((previousDoctors) =>
          previousDoctors.filter(
            (item) => item._id !== doctor._id
          )
        );

      } catch (error) {

        console.error("Error deleting doctor:", error);

        message.error("Unable to delete doctor");

      }
    };

    deleteDoctor();
    */
  };


  const columns = [


    {
      title: "Doctor",

      render: (_, doctor) => (

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
              Dr. {doctor.name}
            </p>

            <p className="text-xs text-gray-400 m-0">
              Registered Doctor
            </p>

          </div>

        </div>

      ),
    },


    // -----------------------------
    // EMAIL
    // -----------------------------

    {
      title: "Email",

      render: (_, doctor) => (

        <div className="flex items-center gap-2">

          <FaEnvelope className="text-gray-400" />

          <span>
            {doctor.email}
          </span>

        </div>

      ),
    },


    // -----------------------------
    // PHONE
    // -----------------------------

    {
      title: "Phone",

      render: (_, doctor) => (

        <div className="flex items-center gap-2">

          <FaPhone className="text-gray-400" />

          <span>
            {doctor.phone || "Not provided"}
          </span>

        </div>

      ),
    },


    // -----------------------------
    // SPECIALIZATION
    // -----------------------------

    {
      title: "Specialization",

      render: (_, doctor) => (

        <Tag color="cyan">

          {doctor.specialization ||
            "Not specified"}

        </Tag>

      ),
    },


    // -----------------------------
    // HOSPITAL
    // -----------------------------

    {
      title: "Hospital",

      render: (_, doctor) => (

        <span>
          {doctor.hospital || "Not assigned"}
        </span>

      ),
    },


    // -----------------------------
    // MANAGE
    // -----------------------------

    {
      title: "Manage",

      render: (_, doctor) => (

        <div className="flex gap-2">

          {/* EDIT */}

          <Button
            icon={<FaPen />}
            onClick={() => handleEdit(doctor)}
          >
            Edit
          </Button>


          {/* DELETE */}

          <Popconfirm
            title="Delete this doctor?"
            description="This action cannot be undone."
            okText="Yes"
            cancelText="No"
            onConfirm={() =>
              handleDelete(doctor)
            }
          >

            <Button
              danger
              icon={<FaTrash />}
            >
              Delete
            </Button>

          </Popconfirm>

        </div>

      ),
    },

  ];


  // =====================================================
  // UI
  // =====================================================

  return (

    <section className="mt-10">

      {/* ================= HEADER ================= */}

      <div className="flex items-end justify-between mb-5">

        <div>

          <h2
            className="
              text-xl
              sm:text-2xl
              font-bold
              text-gray-800
            "
          >
            Registered Doctors
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Doctors registered on MedTour
          </p>

        </div>


        <span className="text-sm text-gray-500">

          {doctors.length} doctors

        </span>

      </div>


      {/* ================= TABLE ================= */}

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

          dataSource={doctors}

          rowKey="_id"

          loading={loading}

          locale={{
            emptyText: (
              <Empty
                description="No doctors registered yet"
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

export default DoctorsTable;