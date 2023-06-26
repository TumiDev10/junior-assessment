import React, { useEffect, useState } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Search() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Fetch movies from API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://imdb-api.com/en/API/Top250Movies/k_kcx6k37t');
        const data = await response.json();
        console.log('Fetched movies:', data); // Log the fetched data for debugging
        if (data?.items) {
          setMovies(data.items);
          setLoading(false);
        } else {
          console.error('Invalid API response:', data);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = () => {
    console.log('Movies:', movies);
    if (movies.length > 0) {
      const results = movies.filter(
        (movie) =>
          movie.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          movie.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    }
  };
  
  
  

  const renderMovies = () => {
    if (searchQuery && searchResults.length === 0) {
      return <p>No movies found.</p>;
    }

    const moviesToRender = searchQuery ? searchResults : movies;

    return moviesToRender.map((movie, index) => (
      <div className="col-lg-2 col-md-4 col-sm-6 col-6" key={index}>
        <div className="movie-card">
            <img src={movie.image} className="movie-image" alt="Movie" />
          
          <div className="movie-details">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <Button variant="outline-info">
                <Link to={`https://www.imdb.com/title/${movie.id}`} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'black'}}>
                  Trailer
                </Link>
              </Button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h1 style={{ marginLeft: '1%' }}>Search Movies</h1>
      <div style={{ marginLeft: '36%', marginBottom: '7%' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search movies..."
          className="form-control"
        />
        <button className="Searchbtn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {loading ? <p>Loading movies...</p> : <div className="row">{renderMovies()}</div>}
    </div>
  );
}

export default Search;
