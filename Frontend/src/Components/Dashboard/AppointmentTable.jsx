import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Table,
  Tag,
  Button,
  Empty,
  message,
  Popconfirm,
  Modal,
  Form,
  Input,
} from "antd";

import {
  FaUserDoctor,
  FaEnvelope,
  FaPhone,
  FaPen,
  FaTrash,
} from "react-icons/fa6";

const AppoinmentTable = () => {

  const [appoinment, setAppoinment] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const onFinish = async (values) => {
    console.log("Sending:", values);

    // try {
    //     const response = await axios.post(
    //         "http://localhost:5001/api/Login_routes/Signup",
    //         values,
    //         {
    //             withCredentials: true,
    //         }
    //     );

    //     console.log("Response:", response.data);

    //     setmessage(response.data.message);
    //     setColor("text-green-500");

    //     setTimeout(() => {
    //         navigate("/login");
    //     }, 1500);


    // } catch (error) {
    //     console.log("Error:", error.response?.data || error);

    //     setmessage(
    //         error.response?.data?.message || "Something went wrong"
    //     );
    //     setColor("text-red-500")
    // }
  };


  // =====================================================
  // BACKEND FETCHING
  // =====================================================
  // Uncomment this section when backend is created.
  // =====================================================


  const fetchAppointment = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:5001/api/Appointment_routes/getAppointment"
      );

      setAppoinment(response.data.data);

    } catch (error) {
      console.error("Error fetching doctors:", error);

      message.error("Unable to load doctors");

    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchAppointment();
  }, []);


  const handleEdit = (appoinment) => {
    console.log("Edit doctor:", appoinment);
    setIsModalOpen(true)
  };

  const handleDelete = (appoinment) => {

    // TEMPORARY FRONTEND DELETE
    // This will be replaced with API call later.

    setAppoinment((previousAppoinment) =>
      previousAppoinment.filter(
        (item) => item._id !== appoinment._id
      )
    );

    message.success("Doctor deleted successfully");


    const deleteDoctor = async () => {
      try {

        await axios.delete(
          `http://localhost:5001/api/Doctor_routes/deleteDoctor/${doctor._id}`
        );

        message.success("Doctor deleted successfully");

        setAppoinment((previousAppoinment) =>
          previousAppoinment.filter(
            (item) => item._id !== appoinment._id
          )
        );

      } catch (error) {

        console.error("Error deleting doctor:", error);

        message.error("Unable to delete doctor");

      }
    };

    deleteDoctor();
  };


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
            {appoinment.doctorName ||
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

          <FaPhone className="text-gray-400" />

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


    // -----------------------------
    // MANAGE
    // -----------------------------

    {
      title: "Manage",

      render: (_, appoinment) => (

        <div className="flex gap-2">

          {/* EDIT */}

          <Button
            icon={<FaPen />}
            onClick={() => handleEdit(appoinment)}
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
              handleDelete(appoinment)
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

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout={"vertical"} onFinish={onFinish}>
          <Form.Item
            label="Full Name:"
            name="fullName"
            rules={[{ required: true, message: 'Please input your Full name!' }]}
          >
            <Input placeholder='Enter your full name' />
          </Form.Item>
          <Form.Item
            label="Email:"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder='Enter your email' />
          </Form.Item>
          <Form.Item
            label="Phone:"
            name="phone"
            rules={[{
              required: true,
              pattern: /^[0-9]{10}$/,
              message: "Mobile number must contain exactly 10 digits!",
            },]}
          >
            <Input placeholder='Enter your phone number' maxLength={10} />
          </Form.Item>
          <Form.Item
            label="Password:"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='Create your password' />
          </Form.Item>
          <Form.Item label={null}>
            <button className='h-10 w-full text-xl hover:rounded-2xl cursor-pointer transition ease-in-out duration-500 text-white rounded-lg bg-green-800' type='submit'>
              Update doctor
            </button>
          </Form.Item>
        </Form>
      </Modal>

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
            Registered Appointments
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            appointment registered on MedTour
          </p>

        </div>


        {/* <span className="text-sm text-gray-500">

          {doctors.length} doctors

        </span> */}

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

          dataSource={appoinment}

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

export default AppoinmentTable;