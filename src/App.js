import './App.css';
import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particle from './components/Particle';

function App() {
 
  return (
    <div>
      <Nav />
      <Particle />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
