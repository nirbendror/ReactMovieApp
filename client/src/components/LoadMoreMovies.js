import React from "react";
import "../styles/LoadMoreMovies.css";


const LoadMoreMovies = ({ onClick, disabled }) => {
  return (
    <div className="load-more-container">
      <button
        className="load-more-shows"
        onClick={onClick}
        disabled={disabled}
      >
        Load More Shows
      </button>
    </div>
  );
};

export default LoadMoreMovies;
