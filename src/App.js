import logo from './logo.svg';
import './App.css';
import FilterContainer from './Components/FilterContainer';
import React, {useState} from 'react';


function App() {
  return (
    <div>
      <h1>The Royal Bank of Flatiron</h1>
      <FilterContainer/>
    </div>
  );
}

export default App;
