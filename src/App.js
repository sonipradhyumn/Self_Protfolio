import React, {useState, useCallback} from 'react';
import {Link, BrowserRouter ,useHistory} from 'react-router-dom';

import './App.css';
import IntroPage from './components/introPage'
import Navbar from './components/navbar'


function App () {
  return (
  <div>
  <BrowserRouter>
    <Navbar/>
    <IntroPage/>
  </BrowserRouter>
  </div>
  );
}

export default App;
