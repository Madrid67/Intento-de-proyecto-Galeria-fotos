import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import PhotoCard from './Photocard';

function Categories() {
  const { categoryName } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    Axios.get(`https://api.example.com/photos?category=${categoryName}`)
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => console.error('Error fetching photos by category', error));
  }, [categoryName]);

  return (
    <div>
      <h2>{categoryName} Fotos</h2>
      <div className="photo-list">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
