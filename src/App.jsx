import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero, About, Skills, Projects, Certifications, Contact, Footer } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;