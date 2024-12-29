import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Advantages from './components/Advantages';
import Athletes from './components/Athletes';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Advantages />
      <Athletes />
      <Contacts />
    </div>
  );
}

export default App; 