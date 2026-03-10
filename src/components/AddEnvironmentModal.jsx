import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AddEnvironmentModal({ isOpen, onClose, onAdd }) {
  const [name, setName] = useState('');
  const [sqMeters, setSqMeters] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    onAdd({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      label: name,
      sqMeters: parseFloat(sqMeters) || 0,
      desc: description,
      iconName: 'LayoutGrid' // Default icon for custom environments
    });
    
    setName('');
    setSqMeters('');
    setDescription('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-4 overflow-hidden animate-[scale-in_0.3s_ease-out]">
        <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-xl font-bold text-slate-800">Agregar Ambiente</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Nombre del Ambiente</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all placeholder:text-slate-400"
              placeholder="Ej. Garaje, Patio..."
            />
          </div>
          
          <div>
             <label className="block text-sm font-semibold text-slate-700 mb-1">Metros Cuadrados (m²)</label>
             <input 
              type="number" 
              step="0.1"
              value={sqMeters}
              onChange={(e) => setSqMeters(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all placeholder:text-slate-400"
              placeholder="Ej. 15.5"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Descripción</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all placeholder:text-slate-400 resize-none h-24"
              placeholder="Detalles sobre el ambiente..."
            />
          </div>
          
          <div className="pt-4 flex gap-3 justify-end">
            <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-xl font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
              Cancelar
            </button>
            <button type="submit" className="px-5 py-2.5 rounded-xl font-semibold text-white bg-primary-600 hover:bg-primary-700 shadow-md shadow-primary-500/20 transition-all">
              Guardar Ambiente
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
