import React from 'react';
import { Clock, CheckCircle2, CircleDashed, AlertCircle, TrendingUp, Wallet } from 'lucide-react';

export default function RepairCard({ repair }) {
  const getStatusConfig = () => {
    switch(repair.status) {
      case 'completed':
        return { color: 'text-green-600', bg: 'bg-green-100', icon: <CheckCircle2 className="w-4 h-4" />, text: 'Completado' };
      case 'in-progress':
        return { color: 'text-blue-600', bg: 'bg-blue-100', icon: <CircleDashed className="w-4 h-4 animate-[spin_3s_linear_infinite]" />, text: 'En curso' };
      default:
        return { color: 'text-amber-600', bg: 'bg-amber-100', icon: <AlertCircle className="w-4 h-4" />, text: 'Pendiente' };
    }
  };

  const status = getStatusConfig();

  return (
    <div className="group relative overflow-hidden glass-panel rounded-3xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-white flex flex-col h-full border border-slate-100">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4 gap-4 border-b border-slate-100 pb-4 flex-wrap">
          <div className="flex-1 pr-2">
            <h3 className="text-xl font-bold text-slate-800 leading-tight mb-2">{repair.title}</h3>
            {repair.priority && (
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${
                repair.priority === 'Urgente' ? 'bg-red-100 text-red-700' :
                repair.priority === 'Alta' ? 'bg-orange-100 text-orange-700' :
                repair.priority === 'Media' ? 'bg-blue-100 text-blue-700' :
                'bg-slate-100 text-slate-600'
              }`}>
                Prioridad {repair.priority}
              </span>
            )}
          </div>
          <span className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${status.bg} ${status.color} shadow-sm border border-white/50`}>
            {status.icon}
            {status.text}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-auto mb-6">
          <div className="bg-slate-50/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-100/50 shadow-sm group-hover:bg-white transition-colors duration-300">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="w-4 h-4 text-slate-400" />
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Presupuesto</p>
            </div>
            <p className="text-2xl font-black text-slate-700 tracking-tight">${repair.budget}</p>
          </div>
          <div className="bg-primary-50/50 backdrop-blur-sm p-4 rounded-2xl border border-primary-100/50 shadow-sm group-hover:bg-primary-50 transition-colors duration-300">
             <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-primary-500" />
              <p className="text-xs text-primary-600/80 font-bold uppercase tracking-wider">Cotización</p>
            </div>
            <p className="text-2xl font-black text-primary-600 tracking-tight">${repair.quote}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm bg-slate-50 p-3 lg:p-4 rounded-2xl border border-slate-100">
          <div className="flex items-center text-slate-500">
             <Clock className="w-4 h-4 text-slate-400 mr-2" />
             <span className="font-medium">Tiempo estimado:</span>
          </div>
          <span className="font-bold text-slate-700 bg-white px-2 py-1 rounded-lg border border-slate-100 shadow-sm">{repair.time}</span>
        </div>
      </div>
    </div>
  );
}
