import React, { useState } from "react";
import { Search } from "lucide-react";

import hospitals from "./Data/HospitalData";
import HospitalCard from "./HospitalCard";

const ResultList = () => {

  // Stores whatever user types in search bar
  const [searchTerm, setSearchTerm] = useState("");


  // Filter hospitals
  const filteredHospitals = hospitals.filter((hospital) => {

    const search = searchTerm.toLowerCase().trim();

    // If search box is empty, show all hospitals
    if (!search) {
      return true;
    }

    return (
      hospital.name?.toLowerCase().includes(search) ||
      hospital.treatment?.toLowerCase().includes(search) ||
      hospital.category?.toLowerCase().includes(search) ||
      hospital.catogary?.toLowerCase().includes(search) ||
      hospital.treatmentDescription?.toLowerCase().includes(search)
    );
  });


  return (
    <div className="px-5 flex w-full flex-col gap-4 sm:gap-5 ">
    <div className=" flex flex-col gap-3 justify-center items-center">
      {/* Heading */}

      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-3">
        Explore Top Rated Hospitals
      </h1>


      {/* Description */}

      <h3 className="text-slate-800">
        Compare accredited healthcare institution and book your consultation
      </h3>


      {/* =========================
          SEARCH BAR
      ========================= */}

      <div className="
        flex
        items-center
        gap-3
        w-full
        max-w-2xl
        mt-2
        px-4
        py-3
        bg-white
        border
        border-slate-300
        rounded-xl
        shadow-sm
        focus-within:border-teal-500
        focus-within:ring-2
        focus-within:ring-teal-100
      ">

        <Search
          size={22}
          className="text-teal-600 shrink-0"
        />

        <input
          type="text"
          placeholder="Search treatment, e.g. Hair Transplant..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
            w-full
            outline-none
            text-slate-800
            placeholder:text-slate-400
            bg-transparent
          "
        />

      </div>

      </div>
      {/* =========================
          HOSPITAL RESULTS
      ========================= */}

      {filteredHospitals.length > 0 ? (

        filteredHospitals.map((hospital) => (

          <HospitalCard
            key={hospital.id}
            hospital={hospital}
          />

        ))

      ) : (

        /* No results */

        <div className="text-center py-12">

          <h2 className="text-xl font-semibold text-slate-800">
            No hospitals found
          </h2>

          <p className="text-slate-500 mt-2">
            No hospital matches "{searchTerm}"
          </p>

        </div>

      )}

    </div>
  );
};

export default ResultList;