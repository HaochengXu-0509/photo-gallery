import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Introduction from './pages/AboutIntroduction'
import Motivation from './pages/AboutMotivation'
import Plan from './pages/AboutPlan'

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'Gallery':
        return <Gallery />;
      case 'Contact':
        return <Contact />;
      case 'Introduction':
        return <Introduction />;
      case 'Motivation':
        return <Motivation />;
      case 'Plan':
        return <Plan />;
    }
  };

  const handleNavClick = (page) => {
    setCurrentPage(page); 
    setMenuOpen(false);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="branding">
          <h1>Haocheng Xu Photography</h1>
          <p>Capturing moments, telling stories</p>
        </div>

        <nav className="nav-bar">
          {/* Hamburger Menu */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>

          {/* Dropdown Menu */}
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <a href="#home" onClick={() => handleNavClick('Home')}>Home</a>
          </li>
          <li>
            <a href="#gallery" onClick={() => handleNavClick('Gallery')}>Gallery</a>
          </li>
          <li className="dropdown">
          <a href="#" onClick={(e) => e.preventDefault()}>About</a>
          <ul className="dropdown-menu">
            <li><a href="#introduction" onClick={() => handleNavClick('Introduction')}>Introduction</a></li>
            <li><a href="#motivation" onClick={() => handleNavClick('Motivation')}>Motivation</a></li>
            <li><a href="#plan" onClick={() => handleNavClick('Plan')}>Future Plans</a></li>
          </ul>
          </li>
          <li>
            <a href="#contact" onClick={() => handleNavClick('Contact')}>Contact</a>
          </li>
          </ul>
        </nav>
      </header>

      <a href="#main-content" className="skip-link">Skip to main content</a>
      <main className="main-content">{renderPage()}</main>

      <footer className="footer">
        <p>© 2024 Haocheng Xu Photography. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
