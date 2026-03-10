import React, { useState } from 'react';
import RepairCard from './RepairCard';
import AddRepairModal from './AddRepairModal';
import { Plus } from 'lucide-react';

export default function SectionView({ section, repairs, onAddRepair }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="animate-[fade-in_0.5s_ease-out_both] slide-in-from-bottom-4">
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-2">{section.label}</h2>
          <p className="text-slate-500 text-lg font-medium">
            {section.desc} {section.sqMeters > 0 && <span className="inline-block ml-2 px-2 py-0.5 bg-primary-50 text-primary-700 rounded-md text-sm font-bold border border-primary-100">{section.sqMeters} m²</span>}
          </p>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          Nuevo Arreglo
        </button>
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

      <AddRepairModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAdd={(newRepair) => {
          onAddRepair(section.id, newRepair);
        }} 
      />
    </div>
  );
}
