import React, { useState } from 'react';
import SectionView from './components/SectionView';
import { initialData } from './data';
import { Home, Bath, BedDouble, UtensilsCrossed, PlusCircle } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('cocina');
  
  const navItems = [
    { id: 'cocina', label: 'Cocina', icon: <UtensilsCrossed className="w-5 h-5" />, desc: 'Gestión de renovaciones culinarias y electrodomésticos' },
    { id: 'bano', label: 'Baño', icon: <Bath className="w-5 h-5" />, desc: 'Modernización, sanitarios y fontanería' },
    { id: 'habitaciones', label: 'Habitaciones', icon: <BedDouble className="w-5 h-5" />, desc: 'Confort, pintura y espacios de descanso' },
  ];

  const activeNav = navItems.find(item => item.id === activeTab);

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 selection:bg-primary-200">
      {/* Decorative Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary-100/40 to-transparent -z-10 pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-200/20 rounded-full blur-[80px] -z-10 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-accent-200/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8 relative z-20">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-xl shadow-primary-500/30 text-white transform transition-transform hover:scale-105">
              <Home className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">Casa<span className="text-primary-600">Renova</span></h1>
              <p className="text-slate-500 text-sm md:text-base font-medium mt-1">Gestor Inteligente de Reformas</p>
            </div>
          </div>
          
          {/* Navigation Pills */}
          <nav className="flex p-1.5 bg-white/70 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/60 w-full md:w-auto overflow-x-auto hide-scrollbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex-1 md:flex-none flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  activeTab === item.id 
                    ? 'bg-white text-primary-600 shadow-md ring-1 ring-slate-100 transform scale-100' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50 scale-95 hover:scale-100'
                }`}
              >
                {item.icon}
                <span className="hidden sm:inline-block">{item.label}</span>
              </button>
            ))}
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="min-h-[500px] relative z-20">
          <SectionView 
            key={activeTab} // Enforces re-mount triggering entrance animations
            title={activeNav.label}
            description={activeNav.desc}
            repairs={initialData[activeTab]} 
          />
        </main>
        
        {/* Floating Action Button for future features */}
        <button className="fixed bottom-8 right-8 bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-full shadow-2xl hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1 group z-50">
           <PlusCircle className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

export default App;
