import React from "react";
import "../styles/ShowModal.css";

// Create a new modal component to display all show info
const ShowModal = ({ isModalVisable, movie, onClose }) => {
  if(!isModalVisable) {
    return null;
  }
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-image">
          <img src={movie.largeimage} alt={`Thumbnail of ${movie.title}`} />
        </div>
        <h2>{movie.title}</h2>
        <p>{movie.synopsis.replace('<b>', '').replace('</b>', '').replace('<br>', '').replace('</br>', '')}</p>
        {movie.rating !== '' && <p> {`★ ${movie.rating}`}</p>}
        <p>Type: {movie.type}</p>
        <p>Released: {movie.released}</p>
        <p>Runtime: {movie.runtime}</p>
        <p>unogsdate: {movie.unogsdate}</p>
        <button onClick={onClose}>Back to list</button>
      </div>
    </div>
  );
}

export default ShowModal;
