import './App.css';
import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Project from './components/Project';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return ( 
    <div>
      <Nav />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
