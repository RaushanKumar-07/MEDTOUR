import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

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
  DatePicker,
  Select,
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
  const [Id, setId] = useState();
  const [form] = Form.useForm();
  const [EditMessage, setEditMessage] = useState();
  const [color, setColor] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const onFinish = async (values) => {
    console.log("Sending:", values);
    const appointmentData = {
      doctorName: values.doctorName,
      preferredDate: values.preferredDate ? values.preferredDate.format("YYYY-MM-DD") : null,
      time: values.time,
      status: values.status,
    };

    try {
      const response = await axios.put(
        `http://localhost:5001/api/Appointment_routes/updateAppointment/${Id}`,
        appointmentData,
        // {
        //     withCredentials: true,
        // }
      );

      console.log("Response:", response.data);

      setEditMessage(response.data.message);
      setColor("text-green-500");


    } catch (error) {
      console.log("Error:", error.response?.data || error);

      setEditMessage(
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


  const fetchAppointment = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:5001/api/Appointment_routes/getAppointment"
      );

      setAppoinment(response.data.data);

    } catch (error) {

      message.error("Unable to load appointment");

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
    setId(appoinment._id)

    if (appoinment) {
      const values = {
        doctorName: appoinment.doctorName,
        preferredDate: appoinment.preferredDate ? dayjs(appoinment.preferredDate) : null,
        time: appoinment.time,
        status: appoinment.status,

      };
      form.setFieldsValue(values);
    }
  };

  const handleDelete = (appoinment) => {

    const deleteAppoinment = async () => {
      try {

        await axios.delete(
          `http://localhost:5001/api/Appointment_routes/deleteAppointment/${appoinment._id}`
        );

        message.success("Appointment deleted successfully");

      } catch (error) {

        message.error("Unable to delete appointment");

      }
    };

    deleteAppoinment();
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
        <h1 className={`${color} text-2xl text-center`}>{EditMessage}</h1>
        <Form layout={"vertical"} onFinish={onFinish} form={form}>
          <Form.Item
            label="Doctor name"
            name="doctorName"
          >
            <Select
              size="large"
              placeholder="Select doctor"
              options={[
                {
                  value: "Anoop Kumar",
                  label: "Anoop Kumar",
                },
                {
                  value: "Raushan Kumar",
                  label: "Raushan Kumar",
                },
                {
                  value: "Saurabh Kumar",
                  label: "Saurabh Kumar",
                },
                {
                  value: "Suraj Kumar",
                  label: "Suraj Kumar",
                },
                {
                  value: "Ramandeep Kumar",
                  label: "Ramandeep Kumar",
                },
                {
                  value: "Ashish Kumar",
                  label: "Ashish Kumar",
                },
                {
                  value: "Ram Kumar",
                  label: "Ram Kumar",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Preferred Date"
            name="preferredDate"
          >
            <DatePicker
              size="large"
              className="w-full"
            />
          </Form.Item>
          <Form.Item
            label="Time"
            name="time"
          >
            <Select
              size="large"
              placeholder="Select time"
              options={[
                {
                  value: "9:00 AM",
                  label: "9:00 AM",
                },
                {
                  value: "11:00 AM",
                  label: "11:00 AM",
                },
                {
                  value: "1:00 PM",
                  label: "1:00 PM",
                },
                {
                  value: "3:00 PM",
                  label: "3:00 PM",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
          >
            <Select
              size="large"
              placeholder="Select status"
              options={[
                {
                  value: "Confirmed",
                  label: "Confirmed",
                },
                {
                  value: "Rejected",
                  label: "Reject",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label={null}>
            <button className='h-10 w-full text-xl hover:rounded-2xl cursor-pointer transition ease-in-out duration-500 text-white rounded-lg bg-green-800' type='submit'>
              Update Appointment
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