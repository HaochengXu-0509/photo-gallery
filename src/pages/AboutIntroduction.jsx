import React from 'react';
import '../styles/AboutIntroduction.css';
import profilePic from '../images/profile.jpg'; 

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="introduction-text">
        <h2>Introduction</h2>
        <p>
          My name is Haocheng Xu, and I am currently pursuing my Master's degree in Software Engineering Systems at Northeastern University. Originally from Jiangsu, China, I have a strong passion for photography, software development, and creative problem-solving.
        </p>
        <p>
          I enjoy exploring the intersection between technology and art, creating both software solutions and photographic works that inspire and engage audiences. When I'm not coding or capturing moments, I love traveling and immersing myself in different cultures.
        </p>
      </div>
      <div className="introduction-image">
        <img src={profilePic} alt="Haocheng Xu Portrait" />
      </div>
    </section>
  );
};

export default Introduction;
