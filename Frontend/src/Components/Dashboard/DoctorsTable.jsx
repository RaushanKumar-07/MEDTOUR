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

const DoctorsTable = () => {

  const [doctors, setDoctors] = useState();
  const [EditModalOpen, setEditModalOpen] = useState(false);
  const [AddDoctorModalOpen, setAddDoctorModalOpen] = useState(false);
  const [CreateUserModalOpen, setCreateUserModalOpen] = useState(false);
  const [Id, setId] = useState();
  const [message, setMessage] = useState()
  const [color, setColor] = useState()
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    setEditModalOpen(false);
    form.resetFields();
  };


  const onFinish = async (values) => {
    console.log("Sending:", values);

    try {
      const response = await axios.put(
        `http://localhost:5001/api/Doctor_routes/updateDoctor/${Id}`,
        values,
        // {
        //     withCredentials: true,
        // }
      );

      setMessage(response.data.message);
      setColor("text-green-500");

    } catch (error) {

      setMessage(
        error.response?.data?.message || "Something went wrong"
      );
      setColor("text-red-500")
    }
  };


  // =====================================================
  // BACKEND FETCHING
  // =====================================================
  // Uncomment this section when backend is created.
  // =====================================================


  const fetchDoctors = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:5001/api/Doctor_routes/getDoctor"
      );

      setDoctors(response.data.data);

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


  const handleEdit = (appoinment) => {
    setEditModalOpen(true)
    setId(appoinment._id)

    if (appoinment) {
      const values = {
        name: appoinment.name,
        doctorId: appoinment.doctorId,
        specialization: appoinment.specialization,
        hospitalName: appoinment.hospitalName,
        experience: appoinment.experience,
        consultationFee: appoinment.consultationFee,

      };
      form.setFieldsValue(values);
    }
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


    const deleteDoctor = async () => {
      try {

        await axios.delete(
          `http://localhost:5001/api/Doctor_routes/deleteDoctor/${doctor._id}`
        );

        message.success("Doctor deleted successfully");


      } catch (error) {

        message.error("Unable to delete doctor");

      }
    };

    deleteDoctor();
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
      title: "Doctor Id",

      render: (_, doctor) => (

        <div className="flex items-center gap-2">

          <span>
            {doctor.doctorId}
          </span>

        </div>

      ),
    },


    // -----------------------------
    // PHONE
    // -----------------------------

    {
      title: " Experience",

      render: (_, doctor) => (

        <div className="flex items-center gap-2">

          <span>
            {doctor.experience}
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

          {doctor.specialization}

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
          {doctor.hospitalName}
        </span>

      ),
    },


    {
      title: "Consultation Fees",

      render: (_, doctor) => (

        <div className="flex items-center gap-2">

          <span>
            {doctor.consultationFee}
          </span>

        </div>

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

      <Modal
        open={EditModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <h1 className={`${color} text-2xl text-center`}>{message}</h1>
        <Form layout={"vertical"} onFinish={onFinish} form={form}>
          <Form.Item
            label="Name:"
            name="name"
            rules={[{ required: true }]}
          >
            <Input placeholder='Enter Name' />
          </Form.Item>
          <Form.Item
            label="Doctor ID:"
            name="doctorId"
            rules={[{ required: true }]}
          >
            <Input placeholder='Enter Doctor ID' />
          </Form.Item>
          <Form.Item
            label=" Specialization:"
            name="specialization"
            rules={[{ required: true }]}
          >
            <Input placeholder='Specialization' />
          </Form.Item>
          <Form.Item
            label="Hospital Name:"
            name="hospitalName"
            rules={[{ required: true }]}
          >
            <Input placeholder='Enter Hospital Name' />
          </Form.Item>
          <Form.Item
            label="Experience:"
            name="experience"
            rules={[{ required: true }]}
          >
            <Input placeholder='Enter Experience' />
          </Form.Item>
          <Form.Item
            label="Consultation Fee:"
            name="consultationFee"
            rules={[{ required: true }]}
          >
            <Input placeholder='Enter Consultation Fee' />
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
            Registered Doctors
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Doctors registered on MedTour
          </p>

        </div>
        <div className="flex gap-5">
          <button className="h-10 w-30 bg-teal-700 text-white rounded-lg hover:cursor-pointer">Add Doctor</button>
          <button className="h-10 w-30 bg-teal-700 text-white rounded-lg hover:cursor-pointer">Create User</button>
        </div>

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