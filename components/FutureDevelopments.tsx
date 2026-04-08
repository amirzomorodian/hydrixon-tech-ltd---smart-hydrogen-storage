import React from 'react';
import { BrainCircuit, Cpu, Database, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const FutureDevelopments: React.FC = () => {
  return (
    <section id="future" className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-400 font-semibold tracking-wider uppercase">Roadmap</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Future Developments</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            We are actively expanding our technological capabilities to incorporate advanced artificial intelligence and cloud-based smart manufacturing in our next-generation systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* AI Control */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-brand-500/50 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-brand-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors border border-brand-500/20 group-hover:border-brand-400">
              <BrainCircuit className="h-7 w-7 text-brand-400 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI-Driven Control Algorithms</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Implementing advanced artificial intelligence to optimize thermal management during cycles. Our future AI-driven control models will proactively predict and dissipate hotspots, vastly increasing reaction kinetics, safety, and cycle life span compared to static control methods.
            </p>
          </motion.div>

          {/* AWS IoT */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-blue-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors border border-blue-500/20 group-hover:border-blue-400">
              <Cpu className="h-7 w-7 text-blue-400 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AWS IoT Smart Manufacturing</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Harnessing the power of AWS IoT SiteWise and Greengrass for real-time monitoring of our manufacturing processes. This infrastructure will ensure strict batch-to-batch consistency, advanced quality control, and deep predictive analytics across our entire production line.
            </p>
          </motion.div>

          {/* Predictive Analytics */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-purple-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors border border-purple-500/20 group-hover:border-purple-400">
              <Database className="h-7 w-7 text-purple-400 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Deploying Machine Learning models to correlate complex manufacturing parameters with product performance, dramatically reducing waste and accelerating research cycles.
            </p>
          </motion.div>

          {/* Supply Chain */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-emerald-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors border border-emerald-500/20 group-hover:border-emerald-400">
              <Zap className="h-7 w-7 text-emerald-400 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Supply Chain Visibility</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Creating centralized data lakes to track raw material origins and rare-earth certifications, providing unparalleled transparency and sustainability metrics down the entire value chain.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FutureDevelopments;
