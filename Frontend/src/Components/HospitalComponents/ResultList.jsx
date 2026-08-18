import React from "react";
import hospitals from "./Data/HospitalData";
import HospitalCard from "./HospitalCard";

const ResultList = () => {
  if (hospitals.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center">
        <h2 className="text-lg font-semibold text-slate-700">
          No hospitals found
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Try changing your search, category, or location.
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4 sm:gap-5">
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