import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import MissionVision from './components/MissionVision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-brand-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;