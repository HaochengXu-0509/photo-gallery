import React, { useState } from 'react';
import '../styles/Gallery.css';
import photo1 from '../images/Zhenjiang_1.jpg';
import photo2 from '../images/Zhenjiang_2.jpg';
import photo3 from '../images/LA_1.jpg';
import photo4 from '../images/Aurora_1.jpg';
import photo5 from '../images/Star_1.jpg';
import photo6 from '../images/Lake_Como_1.jpg';
import photo7 from '../images/Lake_Como_2.jpg';
import photo8 from '../images/Nice_1.jpg';
import photo9 from '../images/Nice_2.jpg';
import photo10 from '../images/NYC_1.jpg';
import photo11 from '../images/Big_Sur_1.jpg';
import photo12 from '../images/Florence_1.jpg';
import photo13 from '../images/Star_2.jpg';

const photos = [
  { id: 1, src: photo1, description: 'Ancient bridge in Zhenjiang', category: 'Urban' },
  { id: 2, src: photo2, description: 'Yangzi River Sunset', category: 'Urban' },
  { id: 3, src: photo3, description: 'West Hollywood view', category: 'Urban' },
  { id: 4, src: photo4, description: 'Aurora over the coastline', category: 'Nature' },
  { id: 5, src: photo5, description: 'Galaxy over the coastline', category: 'Nature' },
  { id: 6, src: photo6, description: 'View of the Alps from Lake Como', category: 'Nature' },
  { id: 7, src: photo7, description: 'Evening in City of Como', category: 'Urban' },
  { id: 8, src: photo8, description: "Couple on the Cote d'Azur", category: 'Portrait' },
  { id: 9, src: photo9, description: "Old man reading a book seriously", category: 'Portrait' },
  { id: 10, src: photo10, description: "City View of New York City", category: 'Urban' },
  { id: 11, src: photo11, description: "Big Sur Coastline", category: 'Nature' },
  { id: 12, src: photo12, description: "Night view of Santa Maria del Fiore Cathedral", category: 'Urban' },
  { id: 13, src: photo13, description: "Star trails over the coastline", category: 'Nature' },

];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const closeModal = () => {
    setSelectedPhoto(null); // Close the modal
  };

  const [filter, setFilter] = useState('All');

  const filteredPhotos = filter === 'All' ? photos : photos.filter((photo) => photo.category === filter);

  return (
    <main className="gallery">
      <header className="gallery-header">
        <h1>Gallery</h1>
        <div className="filter-controls">
          <button onClick={() => setFilter('All')}>All</button>
          <button onClick={() => setFilter('Nature')}>Nature</button>
          <button onClick={() => setFilter('Urban')}>Urban</button>
          <button onClick={() => setFilter('Portrait')}>Portrait</button>
        </div>
      </header>

      <section className="gallery-grid">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="gallery-card" onClick={() => setSelectedPhoto(photo)}>
            <img src={photo.src} alt={photo.description} />
            <p>{photo.description}</p>
          </div>
        ))}
      </section>

      {selectedPhoto && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto.src} alt={selectedPhoto.description} />
            <p className="modal-description">{selectedPhoto.description}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
