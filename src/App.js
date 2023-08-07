import './App.css';
import React from 'react'
// import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particle from './components/Particle';
// import LoadingPage from './components/LoadingPage'

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

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
