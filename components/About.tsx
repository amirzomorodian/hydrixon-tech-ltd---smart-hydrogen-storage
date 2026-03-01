import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* The Challenge & Solution */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Metal Hydride Challenge
            </h2>
            <div className="h-1 w-20 bg-brand-500 rounded mb-8" />

            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              Hydrogen storage in metal hydrides relies on adsorption and desorption processes. These reactions are highly sensitive to temperature, requiring precise control. Without proper heat regulation, systems suffer from slow kinetics, reduced capacity, and safety risks.
            </p>

            <div className="bg-slate-800/50 border-l-4 border-brand-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-white mb-2">The Hydrixon Solution</h3>
              <p className="text-slate-300">
                We implement <strong>advanced active cooling</strong> and <strong>AI-driven control algorithms</strong> to maintain optimal temperatures during cycles. This dissipates hotspots, increases reaction kinetics, and significantly enhances safety and operational life.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-500 rounded-2xl transform rotate-3 opacity-20" />
            <img
              src="/smart_hydrogen_storage.png"
              alt="Hydrixon Thermal Management System"
              className="relative rounded-2xl shadow-2xl border border-slate-700 w-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;