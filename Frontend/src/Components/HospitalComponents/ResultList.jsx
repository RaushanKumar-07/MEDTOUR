import React from "react";
import hospitals from "./Data/HospitalData";
import HospitalCard from "./HospitalCard";

const ResultList = () => {

  return (
    <div className="px-5 flex w-full flex-col gap-4 sm:gap-5">
      <h1 className='text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-3'>Explore Top Rated Hospitals</h1>
      <h3 className="text-slate-800">Compare accredited healthcare insititution and book your cunsultation</h3>
      {hospitals.map((hospital) => (
        <HospitalCard
          key={hospital.id}
          hospital={hospital}
        />
      ))}
    </div>
  );
};

export default ResultList;