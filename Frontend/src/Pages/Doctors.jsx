import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import DoctorsList from "../Components/Doctors/DoctorsList";


const Doctors = () => {

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);


  // =====================================================
  // BACKEND - FETCH REGISTERED DOCTORS
  // =====================================================

  // Uncomment this section when your backend is ready.

  useEffect(() => {
    axios.get("http://localhost:5001/api/Doctor_routes/getDoctor")
      .then((response) => {
        setDoctors(response.data.data)
      })
      .catch((error) => {
        // setDeleteMessage(error.response.data.message)
      })
  }, [])



  return (
    <div className="min-h-screen bg-gray-50">

      <main
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-8
        "
      >

        {/* PAGE HEADER */}

        <div className="mb-8">

          <p className="text-sm font-semibold text-teal-600">
            MEDTOUR
          </p>

          <h1
            className="
              text-3xl
              sm:text-4xl
              font-bold
              text-gray-900
              mt-1
            "
          >
            Find a Doctor
          </h1>

          <p className="text-gray-500 mt-2 max-w-2xl">
            Browse doctors registered on MedTour and
            book an appointment with your preferred doctor.
          </p>

        </div>


        {/* DOCTORS LIST */}

        <DoctorsList
          doctors={doctors}
          loading={loading}
        />

      </main>

    </div>
  );
};


export default Doctors;