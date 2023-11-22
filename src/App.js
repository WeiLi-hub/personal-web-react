import './App.css';
import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
 
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
