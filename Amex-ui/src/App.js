import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

import Footer from './components/Footer';

import Team1 from "./components/Team1"
import Search from "./components/Search"




function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/> 
      <About />
      <Team1/>
      <Search/>
      <Footer />
    </div>
  );
}

export default App;
