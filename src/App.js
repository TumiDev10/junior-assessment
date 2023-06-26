import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Movies from './Components/Movies';
import Series from './Components/Series';
import TopMovies from './Components/TopMovies';
import TopSeries from './Components/TopSeries';
import Search from './Components/Search';
import Favorites from './Components/Favorites';

function App() {
  return (
    <Router>
      <div style={{backgroundColor: 'aliceblue'}}>
        <Navbar />
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/topmovies" element={<TopMovies />} />
          <Route path="/topseries" element={<TopSeries />} />
          <Route path="/search" element={<Search />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
