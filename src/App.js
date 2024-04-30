import './App.css';
import Home from './components/Home';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000
    });
  }, []);
  return (
    <div className="App">
    <Home/>
    </div>
  );
}

export default App;
