import './App.css';
import Home from './components/Home';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { Route, Routes } from 'react-router-dom';
import BlogPage from './components/BlogPage';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog-details/:id' element={<BlogPage/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
