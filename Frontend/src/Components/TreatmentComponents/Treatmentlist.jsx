import React from 'react';
import { treatmentsData } from './TreatmentDetails';
import TreatmentCard from './TreatmentCard';

export default function TreatmentList() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className='text-2xl sm:text-3xl font-bold tracking-tight text-slate-900'>Browse Available Treatments & Procedures</h1>
      <section className="mt-5 mx-auto space-y-4">
        {treatmentsData.map((item) => (
          <TreatmentCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}