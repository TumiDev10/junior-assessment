import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Movies';
import img1 from '../images/C.png';

function Series() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulating API call
  useEffect(() => {
    // Simulating delay to show loading state
    const delay = setTimeout(() => {
      const fetchedSeries = [
        { title: 'Series 1', description: 'Description 1', youtubeUrl: 'https://www.youtube.com/watch?v=hU7eMdGLe-s' },
        { title: 'Series 2', description: 'Description 2', youtubeUrl: 'https://www.youtube.com/watch?v=0-z1jzvMJIk' },
        { title: 'Series 3', description: 'Description 3', youtubeUrl: 'https://www.youtube.com/watch?v=hUrRTS6n7Y8' },
        { title: 'Series 4', description: 'Description 4', youtubeUrl: 'https://www.youtube.com/watch?v=zTitoHKsyJg' },
        { title: 'Series 5', description: 'Description 5', youtubeUrl: 'https://www.youtube.com/watch?v=pHf_mCDfGW0' },
        { title: 'Series 6', description: 'Description 6', youtubeUrl: 'https://www.youtube.com/watch?v=pHf_mCDfGW0' },
      ];
      setSeries(fetchedSeries);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay); // Cleanup timer on unmount
  }, []);

  return (
    <div>
      <h1 style={{ marginLeft: '1%' }}>Series</h1>
      {loading ? (
        <p>Loading series...</p>
      ) : (
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              {series.slice(0, 6).map((series, index) => (
                <div className="col-lg-2 col-md-4 col-sm-6 col-6" key={index}>
                  <div className="movie-card">
                    <Link to={series.youtubeUrl} target="_blank" rel="noopener noreferrer">
                    <img src={img1} className="movie-image" alt="Movie" />
                    </Link>
                    <div className="movie-details">
                      <h3>{series.title}</h3>
                      <p>{series.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              {series.slice(6, 12).map((series, index) => (
                <div className="col-lg-12" key={index}>
                  <div className="movie-card">
                  <Link to={series.youtubeUrl} target="_blank" rel="noopener noreferrer">
                    <img src={img1} className="movie-image" alt="Movie" />
                    </Link>
                    <div className="movie-details">
                      <h3>{series.title}</h3>
                      <p>{series.description}</p>
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

export default Series;
