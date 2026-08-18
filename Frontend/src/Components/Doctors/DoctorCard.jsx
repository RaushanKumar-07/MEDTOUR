import React from "react";
import { Button, Tag } from "antd";
import {
  FaUserDoctor,
  FaEnvelope,
  FaPhone,
  FaHospital,
  FaCalendarCheck,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate("/book-appointment", {
      state: {
        doctorId: doctor?._id,
        doctorName: doctor?.name,
      },
    });
  };

  return (
    <div
      className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-5
        sm:p-6
        hover:shadow-md
        transition-shadow
      "
    >
      {/* DOCTOR HEADER */}

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

        <div className="flex items-center gap-4 min-w-0">

          {/* DOCTOR ICON */}

          <div
            className="
              w-14
              h-14
              rounded-full
              bg-teal-50
              text-teal-600
              flex
              items-center
              justify-center
              text-2xl
              shrink-0
            "
          >
            <FaUserDoctor />
          </div>

          {/* NAME */}

          <div className="min-w-0">

            <h2 className="text-lg sm:text-xl font-bold text-gray-800 truncate">
              {doctor?.name
                ? `Dr. ${doctor.name}`
                : "Doctor"}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {doctor?.specialization || "Specialization not specified"}
            </p>

          </div>

        </div>

        <Tag color="success">
          Registered
        </Tag>

      </div>


      {/* DOCTOR DETAILS */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
          mt-6
          pt-5
          border-t
          border-gray-100
        "
      >

        {/* EMAIL */}

        <div className="flex items-center gap-3">

          <FaEnvelope className="text-gray-400 shrink-0" />

          <div className="min-w-0">

            <p className="text-xs text-gray-400">
              Email
            </p>

            <p className="text-sm text-gray-700 truncate">
              {doctor?.email || "Not provided"}
            </p>

          </div>

        </div>


        {/* PHONE */}

        <div className="flex items-center gap-3">

          <FaPhone className="text-gray-400 shrink-0" />

          <div>

            <p className="text-xs text-gray-400">
              Phone
            </p>

            <p className="text-sm text-gray-700">
              {doctor?.phone || "Not provided"}
            </p>

          </div>

        </div>


        {/* HOSPITAL */}

        <div className="flex items-center gap-3">

          <FaHospital className="text-gray-400 shrink-0" />

          <div className="min-w-0">

            <p className="text-xs text-gray-400">
              Hospital
            </p>

            <p className="text-sm text-gray-700 truncate">
              {doctor?.hospital || "Not assigned"}
            </p>

          </div>

        </div>


        {/* EXPERIENCE */}

        <div className="flex items-center gap-3">

          <FaUserDoctor className="text-gray-400 shrink-0" />

          <div>

            <p className="text-xs text-gray-400">
              Experience
            </p>

            <p className="text-sm text-gray-700">
              {doctor?.experience
                ? `${doctor.experience} years`
                : "Not provided"}
            </p>

          </div>

        </div>

      </div>


      {/* BOOK APPOINTMENT */}

      <div className="mt-6 pt-5 border-t border-gray-100">

        <Button
          type="primary"
          size="large"
          icon={<FaCalendarCheck />}
          onClick={handleBookAppointment}
          className="bg-[#087D80] hover:bg-[#06676A]"
        >
          Book Appointment
        </Button>

      </div>

    </div>
  );
};

export default DoctorCard;