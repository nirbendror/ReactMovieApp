import React, { useState, useEffect } from "react";
import "../styles/Search.css";
import { paginationLimit } from "./MovieContainer";
 
const Search = ({movieRepo, setAvailableShows, setSearchData}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (newSearchTerm) => {
        setSearchTerm(newSearchTerm)
    }

    useEffect(() => {
        // Load the first 25 shows from moviesRepo if the search label is empty
        if (searchTerm === '') {
            setAvailableShows(movieRepo.slice(0, paginationLimit));
            setSearchData(false);
        }
        else {
            // Display all the search result
            const filteredRepos = movieRepo.filter(repo => repo.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setAvailableShows(filteredRepos);
            setSearchData(true);
        }
      }, [searchTerm]);

    return (
        <div className="search-container">
            <input
                type="text"
                className='search-input'
                placeholder="Search Your Movie..."
                value={searchTerm}
                onChange={(e) => handleSearchTermChange(e.target.value)}
            />
        </div>
    )
}

export default Search;
