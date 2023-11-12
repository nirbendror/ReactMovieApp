import React, {useState} from 'react';
import "../styles/MovieCard.css";
import ShowModal from './ShowModal';

// Component for single movie card include all relevant data
// this component render in 2 mode: (1) cards mode. (2) Show modal of the chosen movie.
const MovieCard = ({ movie }) => {
  const { title, image, rating } = movie;
  const [isModalVisable, setIsModalVisable] = useState(false);

  return (
    <div className="movie-card">
      <div className="movie-image" >
        <img src={image} alt={title} />
      </div>
      <div className='movie-info'>
        <p style={{height: '30px'}}>{title}</p>
        <p>{`★ ${rating}`}</p>
        <div className='read-more'>
            <button onClick={()=> setIsModalVisable(currVal => !currVal)}><span>Read More</span> →</button>
        </div>
      </div>
      <ShowModal isModalVisable={isModalVisable} movie={movie} onClose={() =>setIsModalVisable(currentVal => !currentVal)}/>
    </div>
  );
};

export default MovieCard;