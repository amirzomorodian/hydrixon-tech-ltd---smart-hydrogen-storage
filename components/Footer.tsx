import React from 'react';
import { COMPANY_NAME } from '../constants';
import { Hexagon, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
               <Hexagon className="h-6 w-6 text-brand-500 fill-brand-500/20" />
               <span className="text-lg font-bold text-white">{COMPANY_NAME}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses through next-generation technology solutions. We build the digital future, today.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">About Us</a></li>
              <li><a href="#mission" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">News & Blog</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Software Development</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">AI Solutions</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Digital Strategy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;