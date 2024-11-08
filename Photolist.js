import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import PhotoCard from './Photocard';

function PhotoList() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    Axios.get('https://api.example.com/photos')
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => console.error('Error fetching photos', error));
  }, []);

  return (
    <div>
      <h2>Todas las fotos</h2>
      <div className="photo-list">
        {photos.map((photo) => (
          <Link to={`/photo/${photo.id}`} key={photo.id}>
            <PhotoCard photo={photo} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PhotoList;
