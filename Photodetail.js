import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function PhotoDetail() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    Axios.get(`https://api.example.com/photos/${id}`)
      .then((response) => {
        setPhoto(response.data);
      })
      .catch((error) => console.error('Error fetching photo details', error));
  }, [id]);

  if (!photo) return <p>Carganndo...</p>;

  return (
    <div>
      <h2>{photo.title}</h2>
      <img src={photo.url} alt={photo.title} />
      <p>{photo.description}</p>
    </div>
  );
}

export default PhotoDetail;
