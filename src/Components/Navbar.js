import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Navbar() {
  return (
    <div className="topnav">
      <Link to="/Movies" className="active">Movies</Link>
      <Link to="/Series">Series</Link>
      <Link to="/TopMovies">TopMovies</Link>
      <Link to="/TopSeries">TopSeries</Link>
      <Link to="/Search">Search</Link>
      <Link to="/Favorites">Favourites</Link>
    </div>
  );
}

export default Navbar;
