import React from 'react';
import { Link } from 'react-router-dom';

function Favorites({ favorites }) {
  if (!favorites) {
    return <p>No favorites found.</p>;
  }

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.map((movie, index) => (
        <div className="col-lg-2 col-md-4 col-sm-6 col-6" key={index}>
          <div className="movie-card">
            <img src={movie.image} className="movie-image" alt="Movie" />

            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <Link to={`https://www.imdb.com/title/${movie.id}`} target="_blank" rel="noopener noreferrer">
                Trailer
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
