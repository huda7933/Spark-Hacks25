// src/Pages/Home/Home.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollComparison from './components/ScrollComparison';
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Text animation
  useEffect(() => {
    const changingText = document.getElementById("changing-text");
    const phrases = [
      "ONE MAN'S TRASH IS ANOTHER MAN'S TREASURE",
      "CREATE, SHARE, SUSTAIN"
    ];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % phrases.length;
      changingText.textContent = phrases[currentIndex];
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.getElementById("menu");
      const menuIcon = document.querySelector('.menu-icon');
      
      if (!menu.contains(e.target) && !menuIcon.contains(e.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
        setIsMenuActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
    setIsMenuActive(!isMenuActive);
  };

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <body>
      {/* HEADER */}
      <header className="header">
        <div className="logo">AQUALINK</div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>

      <Link to="/dashboard">
    <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
        Dashboard
    </button>
    </Link> 

      {/* Side Menu */}
      <div className="menu" id="menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href='#Sign Up'>Sign Up</a>
      </div>

      

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="animated-text" id="changing-text">
            ONE MAN'S TRASH IS ANOTHER MAN'S TREASURE
          </div>
          <button className="cta" onClick={handleGetStarted}>GET STARTED</button>
        </div>
      </section>
    </body>
    



    
  );
};

export default Home;