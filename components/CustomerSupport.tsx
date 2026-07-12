import React from 'react';

const CustomerSupport: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
          At Hydrixon Tech, we support our customers with cutting-edge hydrogen engineering design, clean technology solutions, and professional consultancy. For more information please{' '}
          <a href="#contact" className="text-brand-400 hover:text-brand-300 font-semibold underline underline-offset-4">
            contact us
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default CustomerSupport;
