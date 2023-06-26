import React, { useEffect, useState } from 'react';
import './Movies.css';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function TopMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://imdb-api.com/en/API/MostPopularMovies/k_kcx6k37t');
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
      <h1 style={{ marginLeft: '1%' }}>MostPopular</h1>
      {loading ? (
        <p>Loading MostPopular Movies...</p>
      ) : (
        <Container fluid>
          <Row>
            {movies.map((movie, index) => (
              <Col lg={2} md={4} sm={6} xs={6} key={index}>
                <Card className="movie-card">
                    <Card.Img src={movie.image} className="movie-image" alt="Movie" />
                  <Card.Body className="movie-details">
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.description}</Card.Text>
                    <Button variant="outline-info">
                      <Link to={`https://www.imdb.com/title/${movie.id}`} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'black'}}>
                        Trailer
                      </Link>
                    </Button>
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

export default TopMovies;
