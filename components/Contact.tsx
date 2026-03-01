import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-900/10 skew-x-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Build Something Great</h2>
            <p className="text-slate-400 mb-10 text-lg">
              Have a project in mind? Reach out to us. We are always ready to discuss your next big idea and how Hydrixon can help bring it to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-brand-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-slate-400">info@hydrixon.uk</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
            <form action="mailto:info@hydrixon.uk" method="POST" encType="text/plain" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-brand-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;