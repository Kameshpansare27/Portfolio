import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import HomeHero from './components/HomeHero';
import Footer from './components/Footer';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeHero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
