import React, { useState, useEffect, useMemo } from "react";
import Search from "./Search";
import MovieCard from "./MovieCard";
import LoadMoreMovies from "./LoadMoreMovies";

export const paginationLimit = 25;

// Moviw container component that render:
// page title, search component, movie cards and contact us section
const MovieContainer = () => {
    const [movieRepo, setMovieRepo] = useState([]);
    const [availableShows, setAvailableShows] = useState([]);
    const [searchData, setSearchData] = useState(false);
    const [displayCount, setDisplayCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch repositories with client pagination
    const fetchRepos = async () => {
        try {
            const response = await fetch(`http://localhost:3000/movies`);
            if (!response.ok) {
                throw new Error("Failed to fetch repositories");
            }
        const data = await response.json();
        // Update state with new values
        setMovieRepo(data);
        setAvailableShows(data.slice(displayCount, displayCount + paginationLimit));
        setDisplayCount(paginationLimit);
        } catch (error) {
          // Error hendling
            console.error("Error fetching repositories:", error);
            setError("Error fetching repositories");
        } finally {
            setLoading(false);
        }
  };
  
    // Fetch repositories
    useEffect(() => {
        fetchRepos();
    }, []);

    // Function to handle the Load More button click
    const handleLoadButton = () => {
        if (availableShows.length + paginationLimit <= movieRepo.length ) {
          // Load additional data from movieRepo and update availableShows and displayCount
          const additionalData = movieRepo.slice(displayCount,displayCount + paginationLimit);
          setAvailableShows((currentShows) => [...currentShows, ...additionalData]);
          setDisplayCount((currentVal) => currentVal + paginationLimit);
        }
      }
    
      // Memoize the rendering of movie cards
      const memoizedMovieCards = useMemo(() => {
        return (
          <div className="movies-container">
            {availableShows.map(movie => (<MovieCard key={movie.id} movie={movie}/>))}
          </div>
        );
      }, [availableShows]);
      
    return (
        <div>
        <h1>EXPLORE YOUR NEXT MOVIES AND TV SHOWS</h1>
        <Search movieRepo={movieRepo} setAvailableShows={setAvailableShows} setSearchData={setSearchData} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && memoizedMovieCards}
        <LoadMoreMovies onClick={handleLoadButton} disabled={availableShows.length < paginationLimit || availableShows.length >= movieRepo.length || searchData || loading} />
        </div>
    );
}

export default MovieContainer;
