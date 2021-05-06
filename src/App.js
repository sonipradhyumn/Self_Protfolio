import React, {useState, useCallback} from 'react';
import './App.css';
import introPage from './components/introPage'

function App () {
  return (
    <div className="text-center">
    
      {introPage()}
    </div>
  );
}

export default App;
