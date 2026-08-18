import React from 'react'
import {
  MedicineBoxOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

const features = [
  {
    title: "Top Hospitals",
    subtitle: "Accredited & Trusted",
    icon: <MedicineBoxOutlined />,
  },
  {
    title: "Expert Doctors",
    subtitle: "Experienced & Caring",
    icon: <TeamOutlined />,
  },
  {
    title: "Affordable Care",
    subtitle: "Save up to 70%",
    icon: <SafetyCertificateOutlined />,
  },
];

const Features = () => {
  return (
    <div className="mt-8 grid max-w-[760px] grid-cols-1 gap-3 sm:grid-cols-3">

      {features.map((feature) => (
        <div
          key={feature.title}
          className="
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-3
            shadow-[0_2px_10px_rgba(15,23,42,0.04)]
          "
        >

          <div
            className="
              grid
              h-10
              w-10
              shrink-0
              place-items-center
              rounded-full
              bg-emerald-50
              text-lg
              text-[#0f8b7d]
            "
          >
            {feature.icon}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold text-slate-800">
              {feature.title}
            </h3>

            <p className="truncate text-xs text-slate-500">
              {feature.subtitle}
            </p>
          </div>

        </div>
      ))}

    </div>
  );
};

export default Features;
