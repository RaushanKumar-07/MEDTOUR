import React, { useEffect, useState } from "react";

import {
  FaUserDoctor,
  FaEnvelope,
  FaPhone,
  FaHospital,
} from "react-icons/fa6";


const DoctorProfile = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      setUser(parsedUser);

      console.log(parsedUser);
    }
  }, []);

  return (
    <section
      className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-6
        mb-8
      "
    >

      

      <div className="flex items-center gap-4">

        <div
          className="
            w-16
            h-16
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


        <div className="min-w-0">

          <div className="flex items-center gap-3 flex-wrap">

            <h1
              className="
                text-xl
                sm:text-2xl
                font-bold
                text-gray-800
              "
            >
              {user?.fullName
                ? `Dr. ${user.fullName}`
                : "Doctor"}
            </h1>

            <span
              className="
                text-xs
                font-semibold
                px-2.5
                py-1
                rounded-full
                bg-teal-50
                text-teal-600
              "
            >
              DOCTOR
            </span>

          </div>

        </div>

      </div>


      

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4
          mt-6
          pt-6
          border-t
          border-gray-100
        "
      >

        
        <div className="flex items-center gap-3">

          <div
            className="
              w-10
              h-10
              rounded-lg
              bg-gray-50
              text-gray-500
              flex
              items-center
              justify-center
            "
          >
            <FaEnvelope />
          </div>

          <div>

            <p className="text-xs text-gray-400">
              Email
            </p>

            <p className="text-sm font-medium text-gray-700 break-all">
              {user?.email || "Not available"}
            </p>

          </div>

        </div>


        

        <div className="flex items-center gap-3">

          <div
            className="
              w-10
              h-10
              rounded-lg
              bg-gray-50
              text-gray-500
              flex
              items-center
              justify-center
            "
          >
            <FaPhone />
          </div>

          <div>

            <p className="text-xs text-gray-400">
              Phone
            </p>

            <p className="text-sm font-medium text-gray-700">
              {user?.phone || "Not available"}
            </p>

          </div>

        </div>


<<<<<<< HEAD
=======
        

        <div className="flex items-center gap-3">

          <div
            className="
              w-10
              h-10
              rounded-lg
              bg-gray-50
              text-gray-500
              flex
              items-center
              justify-center
            "
          >
            <FaHospital />
          </div>

          <div>

            <p className="text-xs text-gray-400">
              Hospital
            </p>

            <p className="text-sm font-medium text-gray-700">
              {doctor?.hospital || "Not assigned"}
            </p>

          </div>

        </div>


        

        <div className="sm:col-span-2 lg:col-span-3">

          <p className="text-xs text-gray-400">
            Specialization
          </p>

          <p className="text-sm font-medium text-gray-700 mt-1">
            {doctor?.specialization || "Not specified"}
          </p>

        </div>

>>>>>>> 20ea5c0f800e44ccd749c345bf4d27c317417d20
      </div>

    </section>
  );
};

export default DoctorProfile;