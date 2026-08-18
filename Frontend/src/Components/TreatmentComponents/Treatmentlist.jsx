import React from 'react';
import { treatmentsData } from './TreatmentDetails';
import TreatmentCard from './TreatmentCard';

export default function TreatmentList() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <section className="max-w-4xl mx-auto space-y-4">
        {treatmentsData.map((item) => (
          <TreatmentCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}