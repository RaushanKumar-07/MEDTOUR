import React from "react";
import { Empty, Spin } from "antd";

import DoctorCard from "./DoctorCard";


const DoctorsList = ({
  doctors = [],
  loading = false,
}) => {

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <Spin size="large" />
      </div>
    );
  }


  if (doctors.length === 0) {
    return (
      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          py-16
        "
      >
        <Empty
          description="No registered doctors found"
        />
      </div>
    );
  }


  return (
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-5
      "
    >

      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor._id || doctor.id}
          doctor={doctor}
        />
      ))}

    </div>
  );
};


export default DoctorsList;