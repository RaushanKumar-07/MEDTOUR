import React from 'react'

import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

import TreatmentCard from "./TreatmentCard";

import hairImage from "../../assets/hair.jpg";
import dentalImage from "../../assets/dental.jpg";
import cosmeticImage from "../../assets/cosmetic.jpg";
import fertilityImage from "../../assets/fertility.jpg";
import cardiacImage from "../../assets/cardiac.jpg";

const treatments = [
  {
    title: "Hair Transplant",
    price: "₹40,000",
    image: hairImage,
  },
  {
    title: "Dental Treatment",
    price: "₹15,000",
    image: dentalImage,
  },
  {
    title: "Cosmetic Surgery",
    price: "₹75,000",
    image: cosmeticImage,
  },
  {
    title: "Fertility Treatment",
    price: "₹1,20,000",
    image: fertilityImage,
  },
  {
    title: "Cardiac Care",
    price: "₹2,50,000",
    image: cardiacImage,
  },
];

const PopularTreatment = () => {
  return (
    <section className=" mx-5 px-5 py-10 sm:px-8 lg:px-0 lg:py-12">

      
      <div className="mb-7 flex items-center justify-between">

        <h2 className="m-0 text-2xl font-bold tracking-[-0.5px] text-slate-900 sm:text-3xl">
          Popular Treatments
        </h2>
      </div>

      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 border border-slate-300 p-5 rounded-2xl">

        {treatments.map((treatment) => (
          <TreatmentCard
            key={treatment.title}
            {...treatment}
          />
        ))}

      </div>

    </section>
  );
};

export default PopularTreatment;
