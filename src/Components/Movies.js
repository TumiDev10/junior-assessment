import React, { useEffect, useState } from 'react';
import './Movies.css';
import img1 from '../images/React.png';
import img2 from '../images/React3.png';
import { Link } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulating API call
  useEffect(() => {
    // Simulating delay to show loading state
    const delay = setTimeout(() => {
      const fetchedMovies = [
        { title: 'Movie 1', description: 'Description 1', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s'  },
        { title: 'Movie 2', description: 'Description 2', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s'  },
        { title: 'Movie 3', description: 'Description 3', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s'  },
        { title: 'Movie 4', description: 'Description 4', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s'  },
        { title: 'Movie 5', description: 'Description 5', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s'  },
        { title: 'Movie 6', description: 'Description 6', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s'  },
      ];
      setMovies(fetchedMovies);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay); // Cleanup timer on unmount
  }, []);

  return (
    <div>
      <h1 style={{ marginLeft: '1%' }}>Movies</h1>
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              {movies.slice(0, 6).map((movie, index) => (
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
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              {movies.slice(6, 12).map((movie, index) => (
                <div className="col-lg-12" key={index}>
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
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Movies;
