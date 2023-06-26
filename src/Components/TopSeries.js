import React, { useEffect, useState } from 'react';
import './Movies.css';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function TopSeries() {
  const [Series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch('https://imdb-api.com/en/API/MostPopularTVs/k_vsqa7akw');
        const data = await response.json();
        setSeries(data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching series:', error);
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);

  return (
    <div>
      <h1 style={{ marginLeft: '1%' }}>MostPopularTVs</h1>
      {loading ? (
        <p>Loading Most MostPopularTVs...</p>
      ) : (
        <Container fluid>
          <Row>
            {Series.map((movie, index) => (
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

export default TopSeries;
