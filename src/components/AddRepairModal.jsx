import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AddRepairModal({ isOpen, onClose, onAdd }) {
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState('');
  const [quote, setQuote] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState('Media');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    onAdd({
      id: Date.now(),
      title,
      budget: parseFloat(budget) || 0,
      quote: parseFloat(quote) || 0,
      time: time || 'No definido',
      priority,
      status: 'pending'
    });
    
    setTitle('');
    setBudget('');
    setQuote('');
    setTime('');
    setPriority('Media');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-4 overflow-hidden animate-[scale-in_0.3s_ease-out]">
        <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-xl font-bold text-slate-800">Nuevo Arreglo</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Título del Arreglo</label>
            <input 
              type="text" 
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all placeholder:text-slate-400"
              placeholder="Ej. Pintar Paredes..."
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
               <label className="block text-sm font-semibold text-slate-700 mb-1">Presupuesto ($)</label>
               <input 
                type="number" 
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all placeholder:text-slate-400"
                placeholder="0"
              />
            </div>
            <div>
               <label className="block text-sm font-semibold text-slate-700 mb-1">Cotización ($)</label>
               <input 
                type="number" 
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all placeholder:text-slate-400"
                placeholder="0"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Tiempo Estimado</label>
            <input 
              type="text" 
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all placeholder:text-slate-400"
              placeholder="Ej. 2 días, 3 semanas..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Prioridad</label>
            <select 
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
            >
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
              <option value="Urgente">Urgente</option>
            </select>
          </div>
          
          <div className="pt-4 flex gap-3 justify-end">
            <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-xl font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
              Cancelar
            </button>
            <button type="submit" className="px-5 py-2.5 rounded-xl font-semibold text-white bg-primary-600 hover:bg-primary-700 shadow-md shadow-primary-500/20 transition-all">
              Añadir Arreglo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
