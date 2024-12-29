import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Loader from './components/Loader/Loader';
import './styles/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <Loader isLoading={isLoading} />
      <Header isLoading={isLoading} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
