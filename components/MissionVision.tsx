import React from 'react';
import { TrendingDown, ShieldCheck, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const MissionVision: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Economic Value Proposition</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Hydrixon delivers significant cost advantages over traditional Liquid Hydrogen (LH₂) and Compressed Hydrogen (700 bar) technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cost Efficiency */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-brand-500/50 transition-all shadow-lg"
          >
            <div className="w-14 h-14 bg-brand-900/30 rounded-full flex items-center justify-center mb-6 border border-brand-500/20">
              <TrendingDown className="h-7 w-7 text-brand-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Lower Operating Costs</h3>
            <p className="text-slate-400 text-sm mb-4">
              <strong>16-20% lower</strong> overall operating cost compared to competitors.
            </p>
            <ul className="text-slate-500 text-sm space-y-2">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>75% Lower Energy Cost vs Liquid H₂</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>60% Lower Energy Cost vs 700 bar</li>
            </ul>
          </motion.div>

          {/* Safety */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all shadow-lg"
          >
             <div className="w-14 h-14 bg-blue-900/30 rounded-full flex items-center justify-center mb-6 border border-blue-500/20">
              <ShieldCheck className="h-7 w-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Superior Safety</h3>
            <p className="text-slate-400 text-sm mb-4">
              Solid-state storage eliminates the high risks associated with pressurized gas and cryogenic liquids.
            </p>
            <ul className="text-slate-500 text-sm space-y-2">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Operates at moderate pressure</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>No risk of boil-off explosions</li>
            </ul>
          </motion.div>

           {/* Sustainability */}
           <motion.div 
            whileHover={{ y: -10 }}
            className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all shadow-lg"
          >
             <div className="w-14 h-14 bg-emerald-900/30 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
              <Leaf className="h-7 w-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sustainable & Durable</h3>
            <p className="text-slate-400 text-sm mb-4">
              Designed for longevity with significantly reduced maintenance requirements.
            </p>
             <ul className="text-slate-500 text-sm space-y-2">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>50% Lower Maintenance vs Liquid H₂</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>Simplified Infrastructure</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;