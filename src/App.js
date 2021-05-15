import React, {useState, useCallback} from 'react';
import './App.css';
import IntroPage from './components/introPage'
import Navbar from './components/navbar'


function App () {
  return (
  <div>
    <Navbar/>
    <IntroPage/>
  </div>
  );
}

export default App;
