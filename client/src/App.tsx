import React from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
// import Skills from './components/Skills/Skills';
// import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      {/* <Skills /> */}
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}

export default App;
