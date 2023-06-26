import React, { useEffect, useState } from 'react';
import './Movies.css';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://imdb-api.com/en/API/Top250Movies/k_vsqa7akw');
        const data = await response.json();
        setMovies(data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1 style={{ marginLeft: '1%' }}>Movies</h1>
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <Container fluid>
          <Row>
            {movies.slice(0, 6).map((movie, index) => (
              <Col lg={2} md={4} sm={6} xs={6} key={index}>
                <Card className="movie-card">
                  <Link to={`https://www.imdb.com/title/${movie.id}`} target="_blank" rel="noopener noreferrer">
                    <Card.Img src={movie.image} className="movie-image" alt="Movie" />
                  </Link>
                  <Card.Body className="movie-details">
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Movies;
