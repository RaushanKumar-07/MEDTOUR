import React, { useEffect, useState } from "react";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";


const PatientProfile = () => {

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
          <FaUser />
        </div>


        <div>

          <div className="flex items-center gap-3">

            <h1
              className="
                text-xl
                sm:text-2xl
                font-bold
                text-gray-800
              "
            >
              {user?.fullName || "Patient"}
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
              PATIENT
            </span>

          </div>

        </div>

      </div>


      

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
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

            <p className="text-sm font-medium text-gray-700">
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

      </div>

    </section>
  );
};

export default PatientProfile;