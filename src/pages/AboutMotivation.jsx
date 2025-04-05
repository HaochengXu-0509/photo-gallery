import React, { useState } from 'react';
import '../styles/AboutMotivation.css';
import fatherPortrait from '../images/father.jpg'; 
import photo1 from '../images/father_photo1.jpg'; 
import photo2 from '../images/father_photo2.jpg';
import photo3 from '../images/father_photo3.jpg';
import photo4 from '../images/father_photo4.jpg';
import photo5 from '../images/father_photo5.jpg';

const Motivation = () => {
  const photos = [photo1, photo2, photo3, photo4, photo5];
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const closeModal = () => {
    setSelectedPhoto(null); // Close the modal
  };

  return (
    <section className="motivation">
      <header className="motivation-header">
        <h2>My Motivation</h2>
      </header>
      <div className="motivation-content">
        <div className="motivation-text">
        <p>
            My father has been a great source of inspiration in my journey as a photographer. His passion for capturing moments and telling stories through photos ignited my interest in photography from a young age.
          </p>
          <p>
            Through his lens, I learned to see the beauty in everyday life and to cherish the fleeting moments that often go unnoticed. His dedication and artistic vision deeply influenced my perspective, driving me to explore the art of photography with the same passion and commitment.
          </p>
          <p>
            Beyond my father's influence, I am driven by a personal desire to capture the beauty and essence of the world around me. Whether it's the quiet serenity of nature or the vibrant energy of urban landscapes, I aim to freeze these moments in time, sharing them with others to inspire and evoke emotion.
          </p>
        </div>
        <div className="motivation-image">
          <img src={fatherPortrait} alt="Portrait of my father" />
        </div>
      </div>
      <div className="motivation-gallery">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo taken by my father ${index + 1}`} onClick={() => setSelectedPhoto(photo)}/> 
        ))}
      </div>

      {selectedPhoto && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto} alt="Expanded view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Motivation;
