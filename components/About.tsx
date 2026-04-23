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
              <p className="text-slate-300 pb-4">
                We implement <strong>advanced active cooling</strong> and <strong>precision control systems</strong> to maintain optimal temperatures during cycles. This dissipates hotspots, increases reaction kinetics, and significantly enhances safety and operational life.
              </p>
              <p className="text-slate-300">
                Our solid-state storage solution is uniquely designed to be highly versatile, bridging the gap between scale and portability. It guarantees optimal performance and safety for <strong>both stationary and mobile applications</strong>.
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
            <div className="relative rounded-2xl shadow-2xl border border-slate-700 overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Iczswsn_dpc?rel=0"
                title="Engineering Solid State Hydrogen – Breaking the Thermal Bottleneck"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;