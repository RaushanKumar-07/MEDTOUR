import React from 'react';

export default function TreatmentCard({ item }) {
  return (
    <article className="flex flex-col md:flex-row items-center justify-between bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow gap-6">
      
      {/* Visual Media Section */}
      <div className="w-full md:w-48 h-36 flex-shrink-0">
        <img
          src={item.image}
          alt={item.treatmentTitle}
          className="w-full h-full object-cover rounded-xl border border-slate-100"
        />
      </div>

      {/* Main Details Section */}
      <div className="flex-1 flex flex-col justify-between space-y-2">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            {item.treatmentTitle}
          </h2>
          <p className="text-sm font-medium text-slate-600">
            by {item.hospitalName} &bull; <span className="text-slate-500">{item.location}</span>
          </p>
        </div>

        {/* Rating Row */}
        <div className="flex items-center space-x-1 text-sm">
          <span className="text-amber-500 font-bold">★ 4.7</span>
          <span className="text-slate-500 font-normal">({item.reviews} reviews)</span>
        </div>

        {/* Procedures Grid / Badges */}
        {/* <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
          <span className="font-semibold text-slate-900">Treatments:</span>
          {item.subTreatments.map((sub, idx) => (
            <span key={idx} className="flex items-center gap-1 text-slate-600">
              &bull; {sub}
            </span>
          ))}
        </div> */}

        {/* Clinical Summary */}
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>

      {/* Pricing & CTA Action Section */}
      <div className="w-full md:w-44 flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 pt-4 md:pt-0 border-slate-100 gap-3">
        <div className="text-left md:text-right">
          <span className="text-xs text-slate-500 block">From</span>
          <span className="text-xl font-bold text-emerald-900">
            ₹{item.startingPrice}
          </span>
        </div>
      </div>

    </article>
  );
}