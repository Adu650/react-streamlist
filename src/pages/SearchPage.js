import React, { useState, useEffect } from "react";
import "./SearchPage.css";

function SearchPage({ addEvent, searchResults, setSearchResults }) {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7181d79738cace7fc1fa9dd23fec3e2e&query=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setSearchResults(data.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAddToEvents = (movie) => {
    addEvent(movie);
    alert(`${movie.title} added to events!`);
  };

  return (
    <div className="search-page">
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="results-grid">
  {searchResults.length > 0 ? (
    searchResults.map((movie) => (
      <div key={movie.id} className="movie-card">
        <h3>{movie.title}</h3>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        )}
        <p>{movie.release_date}</p>
        <button onClick={() => handleAddToEvents(movie)}>
          ➕ Add to Events
        </button>
      </div>
    ))
  ) : (
    <p>No results yet. Try searching!</p>
  )}
</div>
    </div>
  );
}

export default SearchPage;
