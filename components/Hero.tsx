import React from 'react';
import { ArrowRight, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80" 
          alt="Advanced Laboratory" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900" />
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 mb-6">
            <span className="text-brand-300 text-xs font-semibold tracking-wide uppercase">
              The Future of Energy Storage
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            HyDrox10 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-blue-400">
              Smart. Safe. Solid-State.
            </span>
          </h1>

          <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Advanced Hydrogen Storage Systems with active thermal management. 
            Operates at moderate pressure with higher safety and lower costs than liquid or compressed hydrogen. Designed for both stationary and mobile applications.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-slate-900 bg-brand-400 hover:bg-brand-500 transition-all shadow-lg shadow-brand-500/25"
            >
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 bg-slate-800/50 hover:bg-slate-800 transition-all backdrop-blur-sm"
            >
              Technology
              <Database className="ml-2 h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent z-10" />
    </section>
  );
};

export default Hero;