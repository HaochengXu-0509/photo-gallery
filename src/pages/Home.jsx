import React from 'react';
import '../styles/Home.css';

const Home = ({ setCurrentPage }) => {
  return (
    <main id="main-content" className="home">
      <div className="background-overlay"></div>
      <header className="home-header">
        <h1>Welcome to Haocheng Xu Photography</h1>
        <p>Capturing moments, telling stories.</p>
      </header>

      <section className="home-hero">
        <p>
          Explore my collection of photographs that capture the beauty of life and nature.
        </p>
        <a href="#gallery" className="cta-button" onClick={() => setCurrentPage('Gallery')}>
          View Gallery
        </a>
      </section>
    </main>
  );
};

export default Home;
