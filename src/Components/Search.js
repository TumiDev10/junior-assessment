import React, { useEffect, useState } from 'react';
import './Search.css';
import img1 from '../images/React.png';
import { Link } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Simulating API call
  useEffect(() => {
    // Simulating delay to show loading state
    const delay = setTimeout(() => {
      const fetchedMovies = [
        { title: 'Movie 1', description: 'Description 1', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s' },
        { title: 'Movie 2', description: 'Description 2', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s' },
        { title: 'Movie 3', description: 'Description 3', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s' },
        { title: 'Movie 4', description: 'Description 4', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s' },
        { title: 'Movie 5', description: 'Description 5', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s' },
        { title: 'Movie 6', description: 'Description 6', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s' },
        { title: 'Series 1', description: 'Description 1', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s' },
        { title: 'Series 2', description: 'Description 2', youtubeUrl: 'https://www.youtube.com/watch?v=0-z1jzvMJIk' },
        { title: 'Series 3', description: 'Description 3', youtubeUrl: 'https://www.youtube.com/watch?v=hUrRTS6n7Y8' },
        { title: 'Series 4', description: 'Description 4', youtubeUrl: 'https://www.youtube.com/watch?v=zTitoHKsyJg' },
        { title: 'Series 5', description: 'Description 5', youtubeUrl: 'https://www.youtube.com/watch?v=pHf_mCDfGW0' },
        { title: 'Series 6', description: 'Description 6', youtubeUrl: 'https://www.youtube.com/watch?v=pHf_mCDfGW0' },
        { title: 'Top Series 1', description: 'Description 1', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s' },
        { title: 'Top Series 2', description: 'Description 2', youtubeUrl: 'https://www.youtube.com/watch?v=0-z1jzvMJIk' },
        { title: 'Top Series 3', description: 'Description 3', youtubeUrl: 'https://www.youtube.com/watch?v=hUrRTS6n7Y8' },
        { title: 'Top Series 4', description: 'Description 4', youtubeUrl: 'https://www.youtube.com/watch?v=zTitoHKsyJg' },
        { title: 'Top Series 5', description: 'Description 5', youtubeUrl: 'https://www.youtube.com/watch?v=pHf_mCDfGW0' },
        { title: 'Top Series 6', description: 'Description 6', youtubeUrl: 'https://www.youtube.com/watch?v=pHf_mCDfGW0' },
        { title: 'Top Movie 1', description: 'Description 1', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s'  },
        { title: 'Top Movie 2', description: 'Description 2', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s'  },
        { title: 'Top Movie 3', description: 'Description 3', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s'  },
        { title: 'Top Movie 4', description: 'Description 4', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s'  },
        { title: 'Top Movie 5', description: 'Description 5', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s'  },
        { title: 'Top Movie 6', description: 'Description 6', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s'  },
      ];
      setMovies(fetchedMovies);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay); // Cleanup timer on unmount
  }, []);

  const handleSearch = () => {
    const results = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const renderMovies = () => {
    if (searchQuery && searchResults.length === 0) {
      return <p>No movies found.</p>;
    }

    const moviesToRender = searchQuery ? searchResults : movies;

    return moviesToRender.map((movie, index) => (
      <div className="col-lg-2 col-md-4 col-sm-6 col-6" key={index}>
        <div className="movie-card">
          <Link to={movie.youtubeUrl} target="_blank" rel="noopener noreferrer">
            <img src={img1} className="movie-image" alt="Movie" />
          </Link>
          <div className="movie-details">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h1 style={{ marginLeft: '1%' }}>Search Movies</h1>
      <div style={{marginLeft: "36%", marginBottom: '7%'}}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search movies..."
          className='form-control'
        />
        <button className='Searchbtn' onClick={handleSearch}>Search</button>
      </div>
      {loading ? <p>Loading movies...</p> : <div className="row">{renderMovies()}</div>}
    </div>
  );
}

export default Movies;
