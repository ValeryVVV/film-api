import Home from 'pages/HomePage/HomePage';
import MovieSearch from 'pages/Movies/Movies';
import React from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';


export const App = () => {

  return (
      <div>
          <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/movies">Movies</NavLink>

          </nav>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movies' element={<MovieSearch />} />
              <Route path='/movies/:movieId' element={<div>Movies details</div>} />
          </Routes> 
    </div>
  );
};
