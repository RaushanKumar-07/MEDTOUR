import React from "react";

import {
  FaUserDoctor,
  FaUser,
  FaHospital,
  FaCalendarCheck,
  FaUserShield,
  FaEnvelope,
} from "react-icons/fa6";

import StatCard from "../../Components/StatCard";
import DoctorsTable from "../../Components/Dashboard/DoctorsTable";


const AdminDashboard = () => {

  /*
  =====================================================
  ADMIN LOGIN DETAILS - BACKEND WILL BE CONNECTED LATER
  =====================================================

  const [admin, setAdmin] = useState(null);
  const [loadingAdmin, setLoadingAdmin] = useState(true);

  const fetchAdminProfile = async () => {
    try {

      const response = await axios.get(
        "http://localhost:5001/api/admin/profile"
      );

      setAdmin(response.data);

    } catch (error) {

      console.error(
        "Error fetching admin profile:",
        error
      );

    } finally {

      setLoadingAdmin(false);

    }
  };


  useEffect(() => {
    fetchAdminProfile();
  }, []);

  */


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

        {/* =====================================================
            ADMIN LOGIN DETAILS
            =====================================================

            This section is currently commented because the
            backend has not been created yet.

            Later connect:

            GET /api/admin/profile

            Expected response:

            {
              name: "Admin Name",
              email: "admin@medtour.com",
              role: "admin"
            }

            ===================================================== */}

        {/*
        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-5
            mb-8
            shadow-sm
          "
        >

          <div className="flex items-center gap-4">

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
                flex-shrink-0
              "
            >
              <FaUserShield />
            </div>


            <div className="flex-1 min-w-0">

              <div className="flex items-center gap-3">

                <h1 className="text-xl font-bold text-gray-800">
                  {admin?.name}
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
                  ADMIN
                </span>

              </div>


              <div className="flex items-center gap-2 mt-1">

                <FaEnvelope
                  className="text-gray-400 text-sm"
                />

                <p className="text-sm text-gray-500 truncate">
                  {admin?.email}
                </p>

              </div>

            </div>

          </div>

        </div>
        */}


        {/* =====================================================
            STATISTICS
            ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
            mb-8
          "
        >

          <StatCard
            title="Registered Doctors"
            value="0"
            icon={<FaUserDoctor />}
            description="Total registered doctors"
          />

          <StatCard
            title="Registered Patients"
            value="0"
            icon={<FaUser />}
            description="Total registered patients"
          />

          <StatCard
            title="Hospitals"
            value="0"
            icon={<FaHospital />}
            description="Available hospitals"
          />

          <StatCard
            title="Appointments"
            value="0"
            icon={<FaCalendarCheck />}
            description="Total appointments"
          />

        </div>


        {/* =====================================================
            REGISTERED DOCTORS
            ===================================================== */}

        <DoctorsTable />


      </main>

    </div>
  );
};

export default AdminDashboard;