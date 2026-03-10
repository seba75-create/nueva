import React from 'react';
import RepairCard from './RepairCard';

export default function SectionView({ title, description, repairs }) {
  return (
    <div className="animate-[fade-in_0.5s_ease-out_both] slide-in-from-bottom-4">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-2">{title}</h2>
        <p className="text-slate-500 text-lg font-medium">{description}</p>
      </div>
      
      {repairs && repairs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repairs.map(repair => (
            <RepairCard key={repair.id} repair={repair} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-12 text-center bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-dashed border-slate-200">
          <p className="text-slate-400 font-medium h-[200px] flex items-center justify-center">
            No hay arreglos planificados para esta sección todavía.
          </p>
        </div>
      )}
    </div>
  );
}
