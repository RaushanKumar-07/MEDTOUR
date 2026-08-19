import React from 'react'

import { Card, Tag } from "antd";


const TreatmentCard = ({
  title,
  price,
  image,
}) => {
  return (
    <Card
      hoverable
      styles={{
        body: {
          padding: 0,
        },
      }}
      className="
        overflow-hidden
        rounded-2xl
        border
        border-gray-300
        bg-white
        shadow-sm
      "
    >

      {/* Image */}
      <div className="relative p-2">

        <img
          src={image}
          alt={title}
          className="
            h-55
            w-full
            rounded-xl
            object-cover
          "
        />

       

      </div>

      {/* Content */}
      <div className="px-4 pb-5 pt-2">

        <h3 className="mb-2 text-lg font-bold text-slate-800">
          {title}
        </h3>

        <p className="text-base text-slate-500">
          From{" "}
          <span className="font-bold text-slate-800">
            {price}
          </span>
        </p>

      </div>

    </Card>
  );
};

export default TreatmentCard;
