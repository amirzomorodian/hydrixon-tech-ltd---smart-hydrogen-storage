import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 relative">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-400 font-semibold tracking-wider uppercase">Technology & Services</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Next-Generation Hydrogen Solutions</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            From advanced solid-state storage hardware to precision thermal management, we provide complete, end-to-end solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-brand-500/50 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors border border-slate-600 group-hover:border-brand-500">
                <service.icon className="h-7 w-7 text-brand-200 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;