import React from "react";
import { Rate, Button } from "antd";
import { useNavigate } from "react-router-dom";

const HospitalCard = ({ hospital }) => {
  const navigate = useNavigate();
  return (
    <div
      className="
      mb-3
        group
        flex
        flex-col
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-3
        shadow-sm
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-lg

        sm:p-4

        md:flex-row
        md:items-center
        md:gap-5

        lg:p-4

        xl:gap-6
      "
    >
      {/* Image */}
      <div
        className="
          h-52
          w-full
          shrink-0
          overflow-hidden
          rounded-xl

          sm:h-56

          md:h-36
          md:w-48

          lg:h-40
          lg:w-52

          xl:h-44
          xl:w-60
        "
      >
        <img
          src={hospital.image}
          alt={hospital.name}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Hospital Information */}
      <div className="min-w-0 flex-1">
        {/* Name */}
        <h2
          className="
            truncate
            text-lg
            font-semibold
            text-slate-900

            sm:text-xl

            lg:text-2xl
          "
        >
          {hospital.name}
        </h2>

        {/* Location */}
        <p className="mt-1 text-sm text-slate-600 sm:text-base lg:text-lg">
          {hospital.location}
        </p>

        {/* Rating */}
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <Rate
            disabled
            allowHalf
            value={hospital.rating}
            className="text-sm sm:text-base"
          />

          <span className="text-xs text-slate-600 sm:text-sm">
            {hospital.rating} ({hospital.reviews} reviews)
          </span>
        </div>

        {/* Treatment */}
        <p className="mt-3 text-slate-700 sm:text-base">
          <strong>Speciality:</strong> {hospital.treatment}
        </p>
        {/* Hospital Details */}
    <p className="mt-3">{hospital.hospitalDescription}</p>
      </div>
      {/* Price + Button */}
      <div
        className="
          flex
          w-full
          items-center
          justify-between
          gap-4
          border-t
          border-slate-100
          pt-3

          md:w-auto
          md:min-w-40
          md:flex-col
          md:items-end
          md:border-t-0
          md:pt-0
        "
      >
        {/* Price */}
        <div className="text-left md:text-right">
          <p className="text-xs text-slate-500 sm:text-sm">From</p>

          <p className="text-lg font-bold text-teal-600 sm:text-xl lg:text-2xl">
            {hospital.price}
          </p>
          <button
          onClick ={() => navigate("/appointment")}
           className='my-2 px-5 py-2 text-white font-medium bg-green-800 border rounded-xl hover:bg-green-500'>Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
